import store from '../js/store.js'
import utilities from '../js/utilities.js'

import Reel from '../js/classes/Reel.js'
import Link from '../js/classes/Link.js'
import Blog from '../js/classes/Blog.js'
import Solution from '../js/classes/Solution.js'
import Tutorial from '../js/classes/Tutorial.js'

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
                    this.store.token = res.token
                    this.store.isLogedIn = true
                }
            }).catch(err => {
                console.log(err);
                this.spinner = false
            })
        },

        getProfile() {
            this.spinner = true
            fetch(this.store.api + '?getProfile').then(res => res.json()).then(res => {
                console.log(res);
                if (res.status) {

                    this.store.reels = res.data.reels.map(node => new Reel(node))
                    this.store.links = res.data.links.map(node => new Link(node))
                    this.store.blogs = res.data.blogs.map(node => new Blog(node))
                    this.store.solutions = res.data.solutions.map(node => new Solution(node))
                    this.store.tutorials = res.data.tutorials.map(node => new Tutorial(node))

                    console.log(this.store.links);
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

import preview from '../editor/components/preview/index.js'
app.component('preview', preview)

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: pageEditor,
            name: 'home',
        },
        { path: '/links', component: linksEditor, name: 'links' },
        { path: '/preview', component: preview, name: 'preview' }
    ]
})

app.use(router)
app.mount('#root')