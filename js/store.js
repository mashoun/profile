import Page from './classes/Page.js'
export default {
    version: '1.1',
    showReels: false,
    showMeetingModal: false,
    showSubscribtionModal: false,
    logoSrc: '/assets/logo.jpg',
    OAuthUser: false,
    username: 'mashoun',
    password: '2O24',
    isLogedIn: false,
    githubToken: '',
    geminiToken: '',
    api: 'https://script.google.com/macros/s/AKfycbysgSXsHETpDYPMY7SvDk4gO5duhfJqp_hFZCZt6C80JqGlBYFETxqWPS57lrhAY1_2/exec',
    reels: [],
    solutions: [],
    blogs: [],
    tutorials: [],
    links: [],
    nextPage: new Page(),
    nextPageTemplate: null


}