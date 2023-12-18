import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/textnote/index.html'),
    data() {
        return {
            store,
            utilities
        }
    }
}