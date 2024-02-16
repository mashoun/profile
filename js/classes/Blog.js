export default class Blog {
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
            this.url = payload.url,
            this.article = payload.article
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
            this.url = '',
            this.article = ''
        }
    }
}