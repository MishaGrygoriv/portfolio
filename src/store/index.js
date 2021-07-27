import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        socialIcons: {
            github: {
                classIcon: "fa fa-github social-icons__icon",
                classLink: "social-icons__link _github",
                name: "github",
                href: "https://github.com/MishaGrygoriv",
            },
            linkedin: {
                classIcon: "fa fa-linkedin social-icons__icon",
                classLink: "social-icons__link _linkedin _facebook",
                name: "linkedin",
                href: "https://www.linkedin.com/in/michael-grygoriv-682599141",
            },
            instagram: {
                classIcon: "fa fa-instagram social-icons__icon",
                classLink: "social-icons__link _instagram",
                name: "instagram",
                href: "https://www.instagram.com/grygoriv_misha",
            },
            resume: {
                classIcon: "fa fa-file social-icons__icon",
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
            // just: {
            //     src: "https://youtu.be/iIgN1JQFruU"
            // },
        },
        test: {
            firstPart: {
                class1: "play-backdrop",
                class2: "play-button",
                class3: "play-circles",
                class4: "play-circle-01",
                class5: "play-circle-02",
                class6: "play-perspective",
                class7: "play-close",
                class8: "play-triangle",
                class9: "play-video",
                src: "https://www.youtube.com/embed/WhZIWZcfeGA"
            },
            secondPart: {
                class1: "class1",
                class2: "class2",
                class3: "class3",
                class4: "class4",
                class5: "class5",
                class6: "class6",
                class7: "class7",
                class8: "class8",
                class9: "class9",
                src: "https://www.youtube.com/embed/iIgN1JQFruU"
            }
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})