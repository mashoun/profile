export default class Blogs {
    constructor(payload = null) {
        var keys = ['id', 'timestamp', 'thumbnails', 'youtube', 'googleDrive', 'title', 'badge', 'keywords', 'description', 'url', 'folder']
        for (let prop of keys) {
            this[prop] = payload ? payload[prop] : ''
        }
    }
}