export default class Tutorial {
    constructor(payload) {
        this.id = payload.id
        this.timestamp = payload.timestamp
        this.thumbnails = payload.thumbnails.split(',')
        this.youtube = payload.youtube
        this.googleDrive = payload.googleDrive
        this.title = payload.title
        this.badge = payload.badge
        this.keywords = payload.keywords
        this.description = payload.description
        this.url = payload.url
    }
}