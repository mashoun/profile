import utilities from "../../../js/utilities.js"
import store from '../../../js/store.js'
import Page from '../../../js/classes/Page.js'

export default {
    template: await utilities.getPage('/editor/components/pageEditor/index.html'),
    data() {
        return {
            store,
            utilities,
            spinner: false,

        }
    },
    computed: {
        generatePageUrl() {
            return `https://mashoun.com/${this.store.nextPage.type}/${utilities.encodeTitle(this.store.nextPage.title)}.html`
        },
        selectPageType() {
            switch (this.store.nextPage.type) {
                case 'blogs': return 'saveBlog'
                case 'tutorials': return 'saveTutorial'
                case 'solutions': return 'saveSolution'
            }
        }
    },
    methods: {
        restoreArticle() {
            document.getElementsByClassName('ql-editor').item(0).innerHTML = this.store.nextPage.article
        },
        saveRecord() {
            try {
                return new Promise((resolve, reject) => {
                    this.spinner = true
                    this.store.nextPage.article = document.getElementById('editor-output').innerHTML
                    this.store.nextPage.url = this.generatePageUrl

                    // saving record
                    var payload = {
                        username: this.store.username,
                        password: this.store.password,
                        saveBlog: '',
                        saveTutorial: '',
                        saveSolution: ''
                    }
                    payload[this.selectPageType] = this.store.nextPage
                    payload = utilities.removeEmptyProperties(payload)

                    fetch(this.store.api + `?${this.selectPageType}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        body: JSON.stringify(payload)
                    }).then(res => res.json()).then(res => {
                        console.log(res);
                        if (res.status) {
                            this.store.nextPage = new Page(res.data.record)
                            console.log(this.store.nextPage);
                        }
                        this.spinner = false
                        resolve(res.status)
                    }).catch(err => {
                        this.spinner = false
                        throw new Error(err)
                    })
                })
            } catch (err) {
                console.error(err);
            }
        },
        async generatePage() {
            try {
                this.spinner = true
                // fetching the template
                this.store.nextPageTemplate = await utilities.getPage('/_template/index.html')

                // subsituting the values
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll('_title', utilities.deQuote(this.store.nextPage.title.trim()))
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll('_url', 'https://mashoun.com/' + utilities.deQuote(this.store.nextPage.type) + '/' + utilities.encodeTitle(this.store.nextPage.title) + '.html')
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_description", utilities.deQuote(this.store.nextPage.description.trim()))
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_keywords", utilities.deQuote(this.store.nextPage.keywords.trim()))
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_folder", utilities.deQuote(this.store.nextPage.type) + '/')
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_badge", utilities.deQuote(this.store.nextPage.badge))
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_date", new Date().toUTCString())
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_thumbnail", this.store.nextPage.thumbnails.split(',')[0])
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_media", this.store.nextPage.thumbnails)

                // inserting article
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("<!-- _article -->", this.store.nextPage.article)
                // remove live server code
                this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/g, "")
                this.store.nextPageTemplate = utilities.text64(this.store.nextPageTemplate)

            } catch (err) {
                console.log(err);
                alert(err)
            }
        },
        async publishPage() {
            // 1. save record to database
            // 2. generate page
            // 3. host page
            try {

                this.spinner = true
                this.store.nextPage.article = document.getElementById('editor-output').innerHTML
                this.store.nextPage.url = this.generatePageUrl

                // saving record
                var payload = {
                    username: this.store.username,
                    password: this.store.password,
                    saveBlog: '',
                    saveTutorial: '',
                    saveSolution: ''
                }
                payload[this.selectPageType] = this.store.nextPage
                payload = utilities.removeEmptyProperties(payload)

                var res = await fetch(this.store.api + `?${this.selectPageType}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    body: JSON.stringify(payload)
                })
                res = await res.json()
                console.log('results from backend after saving page:');
                console.log(res);
                if (res.status) {
                    this.store.nextPage = new Page(res.data.record)
                    console.log('NextPage = ');
                    console.log(this.store.nextPage);
                    // Generating the page
                    // fetching the template
                    this.store.nextPageTemplate = await utilities.getPage('/_template/index.html')

                    // subsituting the values
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll('_title', utilities.deQuote(this.store.nextPage.title.trim()))
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll('_url', 'https://mashoun.com/' + utilities.deQuote(this.store.nextPage.type) + '/' + utilities.encodeTitle(this.store.nextPage.title) + '.html')
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_description", utilities.deQuote(this.store.nextPage.description.trim()))
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_keywords", utilities.deQuote(this.store.nextPage.keywords.trim()))
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_folder", utilities.deQuote(this.store.nextPage.type) + '/')
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_badge", utilities.deQuote(this.store.nextPage.badge))
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_date", new Date().toUTCString())
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_thumbnail", this.store.nextPage.thumbnails[0])
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_media", this.store.nextPage.thumbnails.toString())

                    // inserting article
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("<!-- _article -->", this.store.nextPage.article)
                    // remove live server code
                    this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/g, "")
                    
                    // console.log(this.store.nextPageTemplate);
                    this.store.nextPageTemplate = utilities.text64(this.store.nextPageTemplate)

                    // Host page
                    var github = await utilities.githubPush({
                        content: this.store.nextPageTemplate,
                        token: this.store.token,
                        filename: utilities.deQuote(this.store.nextPage.type + "/") + utilities.encodeTitle(this.store.nextPage.title) + '.html'
                    })
                    console.log(github);

                }

            } catch (err) {
                alert(err)
                console.error(err);
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
            this.store.nextPage.thumbnails = files64
        },
    },
    mounted() {
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
            // !!!!!!!!! the THIS operator of vue js is not scoped in here !!!!!!!!!!!!!!
            // Handle text change event
            document.getElementById('editor-output').innerHTML = quill.root.innerHTML
        });

        this.restoreArticle()
    },

    beforeRouteLeave(to, from, next) {
        this.store.nextPage.article = document.getElementById('editor-output').innerHTML
        console.log(this.store.nextPage.article);
        next()
    },
}