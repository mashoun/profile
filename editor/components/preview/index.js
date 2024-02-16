import utilities from "../../../js/utilities.js"
import store from '../../../js/store.js'
export default {
    template: await utilities.getPage('/editor/components/preview/index.html'),
    data() {
        return {
            store,
            utilities
        }
    }
}