export default class Page {
    constructor(payload = null) {
        if (payload) {
            this.id = payload.id
            this.timestamp = payload.timestamp
            this.thumbnails = payload.thumbnails
            this.youtube = payload.youtube
            this.googleDrive = payload.googleDrive
            this.title = payload.title
            this.badge = payload.badge
            this.keywords = payload.keywords
            this.description = payload.description
            this.url = payload.url
            this.article = payload.article
            this.client = payload.client
            this.flag = payload.flag
            // type = BLOG, SOLUTION, TUTORIAL
            this.folder = payload.folder
            this.spellcheckArticle = payload.spellcheckArticle
            this.generateArticle = payload.generateArticle
            this.summariseArticle = payload.summariseArticle
            this.translateArticle = payload.translateArticle


        } else {
            this.id = ''
            this.timestamp = ''
            this.thumbnails = ''
            this.youtube = ''
            this.googleDrive = ''
            this.title = ''
            this.badge = ''
            this.keywords = ''
            this.description = ''
            this.url = ''
            this.article = ''
            this.folder = ''
            this.spellcheckArticle = ''
            this.translateArticle = ''
            this.summariseArticle = ''
            this.generateArticle = ''
            this.client = ''
            this.flag = ''

        }
    }
}