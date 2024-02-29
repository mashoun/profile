export default class Reel {
    constructor(payload = null) {
        if (payload) {
            this.id = payload.id
            this.timestamp = payload.timestamp
            this.title = payload.title
            this.thumbnails = payload.thumbnails
        } else {
            this.id = ''
            this.timestamp = ''
            this.title = ''
            this.thumbnails = ''
        }
    }
}