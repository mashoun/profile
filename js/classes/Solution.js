export default class Solution {
    constructor(payload = null) {
        var keys = ['id', 'timestamp', 'thumbnails', 'youtube', 'googleDrive', 'title', 'badge', 'keywords', 'description', 'url', 'flag', 'client', 'folder']
        for (let prop of keys) {
            this[prop] = payload ? payload[prop] : ''
        }
    }
}