const temp = {
    _reels: [
        {
            "id": "",
            "title": "",
            "size": "",
            "src": ""
        },
        {
            "id": "",
            "title": "",
            "size": "",
            "src": ""
        },
        {
            "id": "",
            "title": "",
            "size": "",
            "src": ""
        },
    ],
    _solutions: [
        {
            id: '0001',
            badge: 'PROJECT',
            date: '2023-8-1',
            title: 'Gym Booking System',
            client: 'Femathletic Fitness Club',
            flag: 'LB',
            description: `Designed to streamline and organize gym reservations for female members. The project aims to enforce a booking requirement for gym access, with members required to pre-book using credits in their accounts. The user-friendly UI/UX caters to the target audience aged 20-50. The system includes features such as user accounts, content management, service management, and a credit payment system. Stringent testing and security measures ensure criteria compliance for booking requests, including capacity limits, service availability, and time constraints.`,
            tags: ['credits_payment_system', 'UIUX', 'dashboard', 'google_calendar_api', 'vuejs', 'vuegle_stack'],
            url: '',
            thumbnails: ['https://picsum.photos/1080']
        },
        {
            id: '0002',
            badge: 'PROJECT',
            date: '2022-8-1',
            title: 'Photobooth PWA',
            client: 'Saudi National Bank',
            flag: 'SA',
            description: `aimed to create a user-friendly experience during Riyadh Season 2022. Completed in three days, the PWA allows users to take a selfie, save personal data on Google Sheets, and receive a modified image via email. The challenge lay in quality assurance, particularly in image processing and printing, ensuring optimal image quality, correct aspect ratio, and a distinct watermark.`,
            tags: ['Printer_Integration', 'Image_Processing', 'Progressive_Web_App', 'google_apps_script'],
            url: '',
            thumbnails: ['https://picsum.photos/1080']
        },
        {
            id: '0003',
            badge: 'PROJECT',
            date: '2022-8-1',
            title: 'Blogging System',
            client: 'Jurdi Law + Incugamecon',
            flag: 'UAE',
            description: `It features a user-friendly dashboard allowing users to input YouTube URLs, with Chat GPT 3.5 generating blog content automatically. The system incorporates functionalities like multi-admin login, Grammarly and Chat GPT integration, custom translation, and unique templates for each website. Quality assurance includes image optimization, dynamic design for language translation, and social media compatibility.`,
            tags: ['seo', 'chatGPT', 'grammarly_api', 'vuejs', 'translation_sys', 'blog_editor', 'github_api'],
            url: '',
            thumbnails: ['https://picsum.photos/1080']
        },
        {
            id: '0004',
            badge: 'PROJECT',
            date: '2022-8-1',
            title: 'Academic Registration System',
            client: 'Bayan International Group',
            flag: 'LB',
            description: `Utilizing Google Forms, Google Sheets, and Google Classroom, the system automates the registration process and facilitates efficient content management for courses and users across multiple domains, including a specialized setup for the Jordan branch. The system ensures quality assurance through an image optimizer for faster loading and seamless integration with an instructor-provided Excel sheet for easy entry of student marks.`,
            tags: ['Student_Management', 'Registration_System', 'Google_Form_Automation', 'vuegle_stack'],
            url: '',
            thumbnails: ['https://picsum.photos/1080']
        },
        {
            id: '0005',
            badge: 'PROJECT',
            date: '2022-8-1',
            title: 'Events Management System',
            client: 'Personal Project',
            flag: 'LOCK-GREY',
            description: `The Goal is to simplify event planning, offering both online and offline support. Users can seamlessly create and monitor events by inputting details into a Google sheet, which, with one click, integrates with Google Calendar and sends customized confirmation emails. The system boasts a user-friendly design, allowing concurrent management of multiple events, Google Calendar notifications, personalized email templates, and future compatibility for WhatsApp and SMS invitations. Additional features include participant grouping, website embedding, event feedback submissions, QR code attendance verification, waiting lists, analytics, and business email and domain configurations.`,
            tags: ['automation', 'google_calendar', 'analytics', 'attendance_verification', 'vuegle_stack'],
            url: '',
            thumbnails: ['https://picsum.photos/1080']
        },
        {
            id: '0006',
            badge: 'PROJECT',
            date: '2022-8-1',
            title: 'CRM',
            client: 'The Artist Overseas',
            flag: 'LB',
            description: `Client relationship management system for a company specializing in visa applications and counseling. Key objectives include resolving issues related to incomplete fee payments upon visa acceptance and ensuring data security across multiple branches with 100 employees. The CRM system manages employee attendance for salary calculations and automates client registration, directing each client to the appropriate employee. The system features a simple and responsive website, automated email management, live monitoring of employee activities, QR code-based check-in/out, and integration with Google Forms for client registration.`,
            tags: ['CRM', 'Visa_Applications', 'Email_Automation', 'checkIN_with_QRCode', 'chrome_extention'],
            url: '',
            thumbnails: ['https://picsum.photos/1080']
        },
    ],
    _tutorials: [
        {
            id: '20221',
            badge: 'COURSE',
            date: '2022-1-16',
            title: 'Google Apps Script Crash Course 2022',
            url: 'https://www.youtube.com/live/ERzt6R2_Fqk?si=PPvf3Mk1m-EW4wjP',
            thumbnail: 'https://i.ytimg.com/vi/ERzt6R2_Fqk/hqdefault.jpg',
        },
        {
            id: '20222',
            badge: 'COURSE',
            date: '2022-1-31',
            title: 'Dynamic Websites 1: Fetch data from Google sheets using Google Apps Script',
            url: 'https://www.youtube.com/live/mJ30Kes4Ews?si=1JOsV-pm6reVXmod',
            thumbnail: 'https://i.ytimg.com/vi/mJ30Kes4Ews/hqdefault.jpg',
        },
        {
            id: '20223',
            badge: 'COURSE',
            date: '2022-3-14',
            title: 'Dynamic Websites 2: Save data to Google sheets using Google Apps Script',
            url: 'https://www.youtube.com/live/Go-Ri20pB2o?si=7gNGxAUOQZfe53_Q',
            thumbnail: 'https://i.ytimg.com/vi/Go-Ri20pB2o/hqdefault.jpg',
        },
        {
            id: '20224',
            badge: 'COURSE',
            date: '2022-7-19',
            title: 'Authentication in Google Apps Script: Login using username and password',
            url: 'https://www.youtube.com/live/sE5qcFwNmP4?si=hK_a9rSkV_qR6kP_',
            thumbnail: 'https://i.ytimg.com/vi/sE5qcFwNmP4/hqdefault.jpg',
        },
        {
            id: '20225',
            badge: 'COURSE',
            date: '2022-12-9',
            title: 'Build your own chrome extension',
            url: 'https://www.youtube.com/live/HNtGQNbOfeE?si=ATrjxbsof8YMXt8z',
            thumbnail: 'https://i.ytimg.com/vi/HNtGQNbOfeE/hqdefault.jpg',
        },
        {
            id: '20226',
            badge: 'COURSE',
            date: '2022-11-22',
            title: 'Get 1 year of exp in Full-Stack Web Dev / Freelancing - Part1',
            url: 'https://www.youtube.com/live/zid0GrXQ5Pk?si=HnSKDd2qv9Ts7ZQR',
            thumbnail: 'https://i.ytimg.com/vi/zid0GrXQ5Pk/hqdefault.jpg',
        },
        {
            id: '20226',
            badge: 'COURSE',
            date: '2022-11-22',
            title: 'Get 1 year of exp in Full-Stack Web Dev / Freelancing - Part2',
            url: 'https://www.youtube.com/live/G14GAKgGdkw?si=gn1hAterDuwE1tM7',
            thumbnail: 'https://i.ytimg.com/vi/G14GAKgGdkw/hqdefault.jpg',
        },
        {
            id: '20227',
            badge: 'COURSE',
            date: '2022-11-22',
            title: 'Get 1 year of exp in Full-Stack Web Dev / Freelancing - Part3',
            url: 'https://www.youtube.com/live/k8VzW9mtbQs?si=DA7c10usppOe5nG0',
            thumbnail: 'https://i.ytimg.com/vi/k8VzW9mtbQs/hqdefault.jpg',
        },
        {
            id: '20228',
            badge: 'COURSE',
            date: '2023-4-17',
            title: 'Hosting Images to Google Drive using Google Apps Script',
            url: 'https://www.youtube.com/live/AQ72TqxGyZ0?si=09JObpo5Ufj1vUuu',
            thumbnail: 'https://i.ytimg.com/vi/AQ72TqxGyZ0/hqdefault.jpg',
        },
        {
            id: '20229',
            badge: 'COURSE',
            date: '2023-2-28',
            title: 'Intellectual Property for Developers: Copyrights & Licenses',
            url: 'https://www.youtube.com/live/44uGNa9PNN0?si=OUNqWQ9EwoICDluN',
            thumbnail: 'https://i.ytimg.com/vi/44uGNa9PNN0/hqdefault.jpg',
        },
        {
            id: '20229',
            badge: 'COURSE',
            date: '2023-2-28',
            title: 'Intellectual Property for Developers: Patents & Trademarks',
            url: 'https://www.youtube.com/live/5sVm5eg8AiY?si=Brns_iUq0KbtOo35',
            thumbnail: 'https://i.ytimg.com/vi/5sVm5eg8AiY/hqdefault.jpg',
        },
        {
            id: '20229',
            badge: 'COURSE',
            date: '2023-2-28',
            title: 'Intellectual Property, Alternative Dispute Resolution: Arbitration vs Mediation',
            url: 'https://www.youtube.com/live/KkJlcsAtYZc?si=RNvBxHMhIMN7T24k',
            thumbnail: 'https://i.ytimg.com/vi/KkJlcsAtYZc/hqdefault.jpg',
        },
        {
            id: '20229',
            badge: 'COURSE',
            date: '2023-7-5',
            title: 'Build responsive websites with Bootstrap 5',
            url: 'https://www.youtube.com/live/swqVbtj2M_A?si=n5ZiMFZWNUgzkioQ',
            thumbnail: 'https://i.ytimg.com/vi/swqVbtj2M_A/hqdefault.jpg',
        },
        {
            id: '20229',
            badge: 'COURSE',
            date: '2023-4-6',
            title: 'Full Stack Project part1: Build your online cv',
            url: 'https://www.youtube.com/live/0iBsUJ8ZhMM?si=pTEp_2ZVa1nicDMI',
            thumbnail: 'https://i.ytimg.com/vi/0iBsUJ8ZhMM/hqdefault.jpg',
        },
    ],
    _blogs: [
        {
            id: '',
            badge: '',
            date: '',
            title: '',
            url: '',
            thumbnails: [''],
            description: '',
        }
    ],
}

// handleResponse(res) {
//     console.log(res);
//     if (res.credential) {
//         var user = JSON.parse(atob(res.credential.split('.')[1]))
//         console.log(user);
//         this.store.OAuthUser = user
//     }
// },
// init() {
//     google.accounts.id.initialize({
//         client_id: "410541718272-uar8q0e69kcae892fo0fq59mvh7ilngk.apps.googleusercontent.com",
//         auto_select: true,
//         callback: this.handleResponse
//     })
//     google.accounts.id.prompt()
// }


/*
    version= '1.1'
    showReels= false
    showMeetingModal= false
    showSubscribtionModal= false
    logoSrc= '/assets/logo.jpg'
    OAuthUser= false
    article= ''
    username= ''
    password= ''
    isLogedIn= false
    token= ''
    api= 'https://script.google.com/macros/s/AKfycbygEtwXNKMQOOq-s28zwGzIrWz59lnvo-U62pBobFvlz2MFMCWdbsTVOrFEviOLwmHB/exec'
    reels= []
    solutions= []
    blogs= []
    tutorials= []
    links= []
 */

/**
 
    isValidPage() {
        // check for thumbnails
        // check for blog and article
        if (this.thumbnails) {
            if (this.blog.title.trim() != '') {
                if (this.blog.keywords.trim() != '') {
                    if (this.blog.description.trim() != '') {
                        if (this.blog.badge.trim() != '') {
                            if (this.store.article.trim() != '') {
                                return {
                                    status: true,
                                    message: 'valid'
                                }
                            } else return { status: false, message: 'article is required!' }
                        } else return { status: false, message: 'badge is required!' }
                    } else return { status: false, message: 'description is required!' }
                } else return { status: false, message: 'keywords is required!' }
            } else return { status: false, message: 'title is required!' }
        } else return { status: false, message: 'thumbnail is required!' }

    },

    async generateBlog() {
        if (this.isValidPage() && this.store.isLogedIn) {
            if (confirm('Are you sure ?')) {
                this.spinner = true

                // fetching the template
                this.template = await utilities.getPage('/_template/index.html')

                // hosting thumbnails
                if (this.thumbnails) {

                    fetch(this.store.api + '?hostImages=1', {
                        method: "POST",
                        headers: {
                            "Content-Type": "text/plain"
                        },
                        body: JSON.stringify({
                            images: this.thumbnails,
                            username: this.store.username,
                            password: this.store.password

                        })
                    }).then(res => res.json()).then(res => {
                        console.log(res);
                        this.thumbnails = res

                        // subsituting the values
                        this.template = this.template.replaceAll('_title', utilities.deQuote(this.blog.title.trim()))
                        this.template = this.template.replaceAll('_url', 'https://mashoun.com/' + utilities.deQuote(this.blog.badge.toLowerCase() + "s/") + utilities.encodeTitle(this.blog.title) + '.html')
                        // this.template = this.template.replaceAll('_url', 'https://mashoun.com/' + utilities.encodeTitle(this.blog.title) + '.html')
                        this.template = this.template.replaceAll("_description", utilities.deQuote(this.blog.description.trim()))
                        this.template = this.template.replaceAll("_keywords", utilities.deQuote(this.blog.keywords.trim()))
                        this.template = this.template.replaceAll("_folder", utilities.deQuote(this.blog.badge.toLowerCase() + "s"))
                        this.template = this.template.replaceAll("_badge", utilities.deQuote(this.blog.badge))
                        this.template = this.template.replaceAll("_date", new Date())
                        this.template = this.template.replaceAll("_thumbnail", this.thumbnails[0].src)
                        this.template = this.template.replaceAll("_media", JSON.stringify(this.thumbnails))

                        // inserting article
                        this.template = this.template.replaceAll("<!-- _article -->", this.store.article)
                        // remove live server code
                        this.template = this.template.replaceAll(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/g, "")
                        this.template = utilities.text64(this.template)

                        var github = utilities.githubPush({
                            content: this.template,
                            token: this.store.token,
                            filename: utilities.deQuote(this.blog.badge.toLowerCase() + "s/") + utilities.encodeTitle(this.blog.title) + '.html'
                        })

                        this.spinner = false
                        alert('copied')

                    }).catch(err => {
                        console.log(err);
                        this.spinner = false
                    })

                }

            }
        }

    },
 */

/*
 
    saveRecord() {
        try {
            return new Promise((resolve, reject) => {
                this.spinner = true
                this.store.nextPage.article = document.getElementById('editor-output').innerHTML
                this.store.nextPage.url = this.generatePageUrl

                // saving record
                var payload = {
                    username: this.store.username,
                    password: this.store.password,
                    saveBlog: '',
                    saveTutorial: '',
                    saveSolution: ''
                }
                payload[this.selectPageType] = this.store.nextPage
                payload = utilities.removeEmptyProperties(payload)

                fetch(this.store.api + `?${this.selectPageType}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    body: JSON.stringify(payload)
                }).then(res => res.json()).then(res => {
                    console.log(res);
                    if (res.status) {
                        this.store.nextPage = new Page(res.data.record)
                        console.log(this.store.nextPage);
                    }
                    this.spinner = false
                    resolve(res.status)
                }).catch(err => {
                    this.spinner = false
                    throw new Error(err)
                })
            })
        } catch (err) {
            console.error(err);
        }
    },
    async generatePage() {
        try {
            this.spinner = true
            // fetching the template
            this.store.nextPageTemplate = await utilities.getPage('/_template/index.html')

            // subsituting the values
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll('_title', utilities.deQuote(this.store.nextPage.title.trim()))
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll('_url', 'https://mashoun.com/' + utilities.deQuote(this.store.nextPage.type) + '/' + utilities.encodeTitle(this.store.nextPage.title) + '.html')
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_description", utilities.deQuote(this.store.nextPage.description.trim()))
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_keywords", utilities.deQuote(this.store.nextPage.keywords.trim()))
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_folder", utilities.deQuote(this.store.nextPage.type) + '/')
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_badge", utilities.deQuote(this.store.nextPage.badge))
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_date", new Date().toUTCString())
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_thumbnail", this.store.nextPage.thumbnails.split(',')[0])
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("_media", this.store.nextPage.thumbnails)

            // inserting article
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll("<!-- _article -->", this.store.nextPage.article)
            // remove live server code
            this.store.nextPageTemplate = this.store.nextPageTemplate.replaceAll(/<!-- Code injected by live-server -->[\s\S]*?<\/script>/g, "")
            this.store.nextPageTemplate = utilities.text64(this.store.nextPageTemplate)

        } catch (err) {
            console.log(err);
            alert(err)
        }
    },
 */

/*
    <script type="importmap">
        {
          "imports": {
            "@google/generative-ai": "https://esm.run/@google/generative-ai"
          }
        }
    </script>
    <script type="module">
        import { GoogleGenerativeAI } from "@google/generative-ai";

        // Fetch your API_KEY
        const API_KEY = ''

        // Access your API key (see "Set up your API key" above)
        const genAI = new GoogleGenerativeAI(API_KEY);
        async function generateContent() {
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const prompt = "write a small blog about 'learn vue js 101'"

            const result = await model.generateContent(prompt);
            console.log(result);
            const response = await result.response;
            const text = response.text();
            console.log(text);
        }
        // generateContent()
    </script>
*/