import store from './store.js'
import utilities from './utilities.js'
// var article = ''

var app = Vue.createApp({
    data() {
        return {
            store,
            utilities,
            preview: false,
            hideEditor: false,
            spinner: false,
            thumbnails: false,
            template: false,
            blog: {
                date: '',
                url: '',
                keywords: '',
                description: '',
                badge: 'BLOG',
                title: ''
            },

        }
    },
    methods: {

        isValidPage() {
            // check for thumbnails
            // check for blog and article
            if (this.thumbnails) {
                if (this.blog.title.trim() != '') {
                    if (this.blog.keywords.trim() != '') {
                        if (this.blog.description.trim() != '') {
                            if (this.blog.badge.trim() != '') {
                                if (this.store.article.trim() != '') {
                                    return {
                                        status: true,
                                        message: 'valid'
                                    }
                                } else return { status: false, message: 'article is required!' }
                            } else return { status: false, message: 'badge is required!' }
                        } else return { status: false, message: 'description is required!' }
                    } else return { status: false, message: 'keywords is required!' }
                } else return { status: false, message: 'title is required!' }
            } else return { status: false, message: 'thumbnail is required!' }

        },

        async generateBlog() {
            if(this.isValidPage()){
                if (confirm('Are you sure ?')) {
                    this.spinner = true
    
                    // fetching the template
                    this.template = await utilities.getPage('/_template/index.html')
    
                    // hosting thumbnails
                    if (this.thumbnails) {
    
                        fetch(this.store.api + '?hostImages=1', {
                            method: "POST",
                            headers: {
                                "Content-Type": "text/plain"
                            },
                            body: JSON.stringify({
                                images: this.thumbnails
                            })
                        }).then(res => res.json()).then(res => {
                            console.log(res);
                            this.thumbnails = res
    
                            // subsituting the values
                            this.template = this.template.replaceAll('_title', utilities.deQuote(this.blog.title.trim()))
                            this.template = this.template.replaceAll('_url', 'https://mashoun.com/' + utilities.deQuote(this.blog.badge.toLowerCase() + "s/") + utilities.encodeTitle(this.blog.title) + '.html')
                            // this.template = this.template.replaceAll('_url', 'https://mashoun.com/' + utilities.encodeTitle(this.blog.title) + '.html')
                            this.template = this.template.replaceAll("_description", utilities.deQuote(this.blog.description.trim()))
                            this.template = this.template.replaceAll("_keywords", utilities.deQuote(this.blog.keywords.trim()))
                            this.template = this.template.replaceAll("_folder", utilities.deQuote(this.blog.badge.toLowerCase() + "s"))
                            this.template = this.template.replaceAll("_badge", utilities.deQuote(this.blog.badge))
                            this.template = this.template.replaceAll("_date", new Date())
                            this.template = this.template.replaceAll("_thumbnail", this.thumbnails[0].src)
                            this.template = this.template.replaceAll("_media", JSON.stringify(this.thumbnails))
    
                            // inserting article
                            this.template = this.template.replaceAll("<!-- _article -->", this.store.article)
                            // remove live server code
                            this.template = this.template.replaceAll(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/g, "")
    
                            navigator.clipboard.writeText(this.template)
                            console.log(this.template);
    
                            this.spinner = false
                            alert('copied')
    
                        }).catch(err => {
                            console.log(err);
                            this.spinner = false
                        })
    
                    }
    
                }
            }

        },
        async selectImages() {
            var files = await utilities.openFiles()
            var files64 = [];
            for (let i = 0; i < files.length; i++) {
                files64.push({
                    alt: `BLOG ${i} ${utilities.getCurrentDate()}`,
                    // src64: await utilities.file64(files[i])
                    src64: await utilities.optimizeImageQuality(await utilities.file64(files[i]), 0.7)
                })
            }
            // console.log(files64);
            // return files64
            this.thumbnails = files64
        }
    },
    mounted() {

        // console.log(utilities.deQuote('Mashoun"s code'));
        // console.log('Mashoun"s code'.replaceAll(/"/g,'/"'));
        var quill = new Quill('#editor-container', {
            theme: 'snow',
            modules: {
                toolbar: [
                    // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'clean', 'link', { 'direction': 'rtl' }, 'code-block', 'blockquote'],
                ],
            },

        });


        quill.on('text-change', function (delta, oldDelta, source) {
            // the this operator of vue js is not scoped in here
            // Handle text change event
            // console.log('Text changed:', quill.root.innerHTML);
            document.getElementById('editor-output').innerHTML = quill.root.innerHTML
            store.article = quill.root.innerHTML
            // this.article = document.getElementById('editor-output').innerHTML
            console.log(store.article);
            // console.log(quill);
        });
    }
})


import pageNotFound from './components/page-not-found/index.js'
app.component('page-not-found', pageNotFound)

app.mount('#root')