export default class Link {
    constructor(payload = null) {
        if (payload) {
            this.id = payload.id
            this.timestamp = payload.timestamp
            this.group = payload.group
            this.title = payload.title
            this.url = payload.url
        } else {
            this.id = ''
            this.timestamp = ''
            this.group = ''
            this.title = ''
            this.url = ''
        }
    }
}