import store from '../js/store.js'
import utilities from '../js/utilities.js'

import Reel from '../js/classes/Reel.js'
import Link from '../js/classes/Link.js'
import Blog from '../js/classes/Blog.js'
import Solution from '../js/classes/Solution.js'
import Tutorial from '../js/classes/Tutorial.js'

import '../js/packages/day.min.js'
import '../js/packages/relativetime.min.js'

var app = Vue.createApp({
    data() {
        return {
            store,
            utilities,
            spinner: false

        }
    },
    methods: {

        login() {
            this.spinner = true
            fetch(this.store.api, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: JSON.stringify({
                    username: this.store.username,
                    password: this.store.password
                })
            }).then(res => res.json()).then(res => {
                console.log(res);
                if (res.status) {
                    this.spinner = false
                    this.store.githubToken = res.data.githubToken
                    this.store.geminiToken = res.data.geminiToken
                    this.store.isLogedIn = true
                    // this.getProfile()
                }
            }).catch(err => {
                console.log(err);
                this.spinner = false
            })
        },

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

                    console.log(this.store.reels);
                }

                this.spinner = false

            }).catch(err => {
                console.log(err);
                this.spinner = false
            })
        }
    },
    async mounted() {
        this.getProfile()
        // fetching the template
        this.store.nextPageTemplate = await utilities.getPage('/_template/index.html')
    }
})


import pageEditor from '../editor/components/pageEditor/index.js'
app.component('page-editor', pageEditor)

import linksEditor from '../editor/components/linksEditor/index.js'
app.component('links-editor', linksEditor)

import reelsEditor from '../editor/components/reelsEditor/index.js'
app.component('links-editor', reelsEditor)


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: pageEditor,
            name: 'home',
        },
        { path: '/links', component: linksEditor, name: 'links' },
        { path: '/reels', component: reelsEditor, name: 'reels' }
    ]
})

app.use(router)
app.mount('#root')