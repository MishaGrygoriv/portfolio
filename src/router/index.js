import { routesNames, routesPath } from "./routes";

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const About = () =>
    import ( /* webpackChunkName: "about" */ "../views/About.vue");
const Projects = () =>
    import ( /* webpackChunkName: "projects" */ "../views/Projects.vue");
const Interests = () =>
    import ( /* webpackChunkName: "interests" */ "../views/Interests.vue");
const Contact = () =>
    import ( /* webpackChunkName: "contact" */ "../views/Contact.vue");

Vue.use(VueRouter)

const routes = [{
        path: routesPath.home,
        name: routesNames.home,
        component: Home,
    },
    {
        path: routesPath.about,
        name: routesNames.about,
        component: About,
    },
    {
        path: routesPath.projects,
        name: routesNames.projects,
        component: Projects,
    },
    {
        path: routesPath.interests,
        name: routesNames.interests,
        component: Interests,
    },
    {
        path: routesPath.contact,
        name: routesNames.contact,
        component: Contact,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router