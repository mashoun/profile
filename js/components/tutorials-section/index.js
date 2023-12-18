import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/tutorials-section/index.html'),
    data() {
        return {
            store,
            utilities,
            isInRoute: false
        }
    },
    computed: {
        fltrTutorials() {

            if (location.href.includes('/courses')) {
                return this.store.tutorials
            }
            return this.store.tutorials.slice(-8)
        }
    },
    methods: {
        checkTutorialRoute() {
            if (location.href.includes('/courses')) return true
            return false
        }
    },
    mounted(){
        if (location.href.includes('/courses')) this.isInRoute = true
        
    }
}