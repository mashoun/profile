export default class Solution {
    constructor(payload) {
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
        this.flag = payload.flag
        this.client = payload.client
    }
}