import store from './store.js'
import utilities from './utilities.js'
import Reel from './classes/Reel.js'
import Link from './classes/Link.js'
import Blog from './classes/Blog.js'
import Solution from './classes/Solution.js'
import Tutorial from './classes/Tutorial.js'
import './packages/day.min.js'
import './packages/relativetime.min.js'
const app = Vue.createApp({
    data() {
        return {
            store,
            utilities,
            spinner: false
        }
    },
    methods: {
        getProfile() {
            this.spinner = true
            fetch(this.store.api + '?getProfile').then(res => res.json()).then(res => {
                // console.log(res);
                if (res.status) {
                    
                    this.store.reels = res.data.reels.map(node => new Reel(node))
                    this.store.links = res.data.links.map(node => new Link(node))
                    this.store.blogs = res.data.blogs.map(node => new Blog(node))
                    this.store.solutions = res.data.solutions.map(node => new Solution(node))
                    this.store.tutorials = res.data.tutorials.map(node => new Tutorial(node))
                }

                this.spinner = false

            }).catch(err => {
                console.log(err);
                this.spinner = false
            })
        }
    },
    mounted() {
        this.getProfile()
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