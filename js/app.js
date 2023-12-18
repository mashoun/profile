import store from './store.js'
import utilities from './utilities.js'
import './day.min.js'
import './relativetime.min.js'
const app = Vue.createApp({
    data() {
        return {
            title: 'Mashoun',
            store,
            utilities,
            spinner: false
        }
    },
    methods: {
        // handleResponse(res) {
        //     console.log(res);
        //     if (res.credential) {
        //         var user = JSON.parse(atob(res.credential.split('.')[1]))
        //         console.log(user);
        //         this.store.OAuthUser = user
        //     }
        // },
        // init() {
        //     google.accounts.id.initialize({
        //         client_id: "410541718272-uar8q0e69kcae892fo0fq59mvh7ilngk.apps.googleusercontent.com",
        //         auto_select: true,
        //         callback: this.handleResponse
        //     })
        //     google.accounts.id.prompt()
        // }
        getReels() {
            this.spinner = true
            fetch(this.store.api + '?getReels=1').then(res => res.json()).then(res => {
                // console.log(res);
                if (res) {
                    this.store.reels = res
                }

                this.spinner = false
                
            }).catch(err => {
                console.log(err);
                this.spinner = false
            })
        }
    },
    mounted() {
        console.log('mounted');
        this.getReels()
    }
})



import flag from './components/flag/index.js'
app.component('flag', flag)

import blogHeader from './components/blog-header/index.js'
app.component('blog-header', blogHeader)

import blogMedia from './components/blog-media/index.js'
app.component('blog-media', blogMedia)

import blogInfobar from './components/blog-infobar/index.js'
app.component('blog-infobar', blogInfobar)

import blogFooter from './components/blog-footer/index.js'
app.component('blog-footer', blogFooter)

import pagination from './components/pagination/index.js'
app.component('pagination', pagination)

import newMeeting from './components/new-meeting/index.js'
app.component('new-meeting', newMeeting)

import subscribe from './components/subscribe/index.js'
app.component('subscribe', subscribe)

import myReels from './components/my-reels/index.js'
app.component('my-reels', myReels)

import text from './components/textnote/index.js'
app.component('textnote', text)

import checkAlso from './components/check-also/index.js'
app.component('check-also', checkAlso)

import subtitle from './components/subtitle/index.js'
app.component('subtitle', subtitle)

import solutionsSection from './components/solutions-section/index.js'
app.component('solutions-section', solutionsSection)

import tutorialsSection from './components/tutorials-section/index.js'
app.component('tutorials-section', tutorialsSection)

import footerSection from './components/footer-section/index.js'
app.component('footer-section', footerSection)



app.mount('#app')