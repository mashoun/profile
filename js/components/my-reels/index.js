import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/my-reels/index.html'),
    data() {
        return {
            store,
            utilities,
            spinner: false
        }
    },
    methods: {

        getReels() {
            this.spinner = true
            fetch(this.store.api + '?getReels=1').then(res => res.json()).then(res => {
                // console.log(res);
                if (res) {
                    this.store.reels = res
                }

                this.spinner = false

            }).catch(err => {
                console.log(err);
                this.spinner = false
            })
        }
    },
    mounted() {
        if (this.store.reels[0].id == "") {
            // this means no reels
            this.getReels()
        }
    }


}