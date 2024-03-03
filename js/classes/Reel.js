export default class Reel {
    constructor(payload = null) {
        var keys = ['id', 'timestamp','title', 'thumbnails']
        for (let prop of keys) {
            this[prop] = payload ? payload[prop] : ''
        }
    }
}