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
    token: '',
    api: 'https://script.google.com/macros/s/AKfycbxSsAdz7jp-VvjKsvpywwWxWQlvYz5kKm1qKDmO8jm1xMSO3eEmAetswBvWPW6s3oxv/exec',
    reels: [],
    solutions: [],
    blogs: [],
    tutorials: [],
    links: [],
    nextPage: new Page(),
    nextPageTemplate: null


}