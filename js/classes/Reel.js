export default class Reel {
    constructor(payload) {
        this.id = payload.id
        this.timestamp = payload.timestamp
        this.title = payload.title
        this.size = payload.size
        this.src = payload.src
    }
}