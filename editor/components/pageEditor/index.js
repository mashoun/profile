import utilities from "../../../js/utilities.js"
import store from '../../../js/store.js'
// import Page from '../../../js/classes/Page.js'

export default {
    template: await utilities.getPage('/editor/components/pageEditor/index.html'),
    data() {
        return {
            store,
            utilities,
            spinner: false,

        }
    },
    methods: {
        restoreArticle() {
            document.getElementsByClassName('ql-editor').item(0).innerHTML = this.store.nextPage.article
        },
        publishPage() {
            // 1. save record to database
            // 2. generate page
            // 3. host page
            try {

                console.log(this.store.nextPage);

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