import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        socialIcons: {
            github: {
                classIcon: "fa fa-github social-icons__icon",
                classIconFooter: "fa fa-github",
                classLink: "social-icons__link _github",
                name: "github",
                href: "https://github.com/MishaGrygoriv",
            },
            linkedin: {
                classIcon: "fa fa-linkedin social-icons__icon",
                classIconFooter: "fa fa-linkedin",
                classLink: "social-icons__link _linkedin _facebook",
                name: "linkedin",
                href: "https://www.linkedin.com/in/michael-grygoriv-682599141",
            },
            instagram: {
                classIcon: "fa fa-instagram social-icons__icon",
                classIconFooter: "fa fa-instagram",
                classLink: "social-icons__link _instagram",
                name: "instagram",
                href: "https://www.instagram.com/grygoriv_misha",
            },
            resume: {
                classIcon: "fa fa-file social-icons__icon",
                classIconFooter: "fa fa-file",
                classLink: "social-icons__link _resume _youtube",
                name: "resume",
                href: "https://github.com/MishaGrygoriv",
            },
        },
        videoSocialIcons: {
            youtube: {
                classIcon: "fa fa-youtube-play social-icons__icon",
                classLink: "social-icons__link _youtube",
                name: "youtube",
                href: "https://github.com/MishaGrygoriv",
            },
            instagram: {
                classIcon: "fa fa-instagram social-icons__icon",
                classLink: "social-icons__link _instagram",
                name: "instagram",
                href: "https://www.instagram.com/grygoriv_misha",
            },
            facebook: {
                classIcon: "fa fa-facebook social-icons__icon",
                classLink: "social-icons__link _facebook",
                name: "facebook",
                href: "https://github.com/MishaGrygoriv",
            },
        },
        videoLinks: {
            justGo: {
                src: "https://www.youtube.com/embed/WhZIWZcfeGA"
            },
            just: {
                src: "https://www.youtube.com/embed/iIgN1JQFruU"
            },
        },
        footerList: [{
                id: 0,
                title: "Vue JS",
                src: require('../assets/icons/vue_js.svg'),
            },
            {
                id: 1,
                title: "Ant Design",
                src: require('../assets/icons/ant_design.svg'),
            },
            {
                id: 2,
                title: "RAWG",
                // url: require('../assets/icons/ant_design.svg'),
            },
            {
                id: 3,
                title: "Firebase",
                src: require('../assets/icons/firebase.svg'),
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {}
})