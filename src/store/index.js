import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        socialIcons: {
            github: {
                classIcon: "fa fa-github first-section__social-icon",
                classLink: "first-section__social-link _github",
                name: "github",
                href: "https://github.com/MishaGrygoriv",
            },
            linkedin: {
                classIcon: "fa fa-linkedin first-section__social-icon",
                classLink: "first-section__social-link _linkedin",
                name: "linkedin",
                href: "https://www.linkedin.com/in/michael-grygoriv-682599141",
            },
            instagram: {
                classIcon: "fa fa-instagram first-section__social-icon",
                classLink: "first-section__social-link _instagram",
                name: "instagram",
                href: "https://www.instagram.com/grygoriv_misha",
            },
            resume: {
                classIcon: "fa fa-file first-section__social-icon",
                classLink: "first-section__social-link _resume",
                name: "resume",
                href: "https://github.com/MishaGrygoriv",
            },
        },
    },
    mutations: {},
    actions: {},
    modules: {}
})