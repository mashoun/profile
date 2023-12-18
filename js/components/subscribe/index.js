import utilities from "../../utilities.js"
import store from '../../store.js'
export default {
    template: await utilities.getPage('/js/components/subscribe/index.html'),
    data() {
        return {
            store,
            utilities,
            payload: {
                "name": "",
                "email": "",
            },
            spinner: false

        }
    },
    computed: {
        isEmptyValue() {
            // if(this.isValidEmail(this.payload.email)){

            for (const property in this.payload) {
                if (this.payload.hasOwnProperty(property)) {
                    if (this.payload[property].trim() == "") return true
                }
            }
            // }

            return false
        }
    },
    methods: {
        isValidEmail(email) {
            // Regular expression for a basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Test the email against the regex pattern
            if (email == "") return true
            return emailRegex.test(email);
        },
        subscribe() {
            if (confirm('Are you sure?')) {
                this.spinner = true
                fetch(this.store.api + "?subscribe=1", {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    body: JSON.stringify(this.payload)
                }).then(res => res.json()).then(res => {
                    console.log(res);
                    console.log(typeof (res));
                    if (res === true) {
                        alert("Meshe L7al ✅")
                        this.store.showSubscribtionModal = false
                    } else {
                        alert(`Ma Meshe L7al ❌: ${res}`)
                        this.store.showSubscribtionModal = false
                    }
                    this.spinner = false
                }).catch(err => {
                    console.log(err);
                    this.spinner = false
                    alert('🌐 Weak network')
                    this.store.showSubscribtionModal = false
                })
            }
        }
    }
}