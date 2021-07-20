import './styles/style.scss';
import VueEllipseProgress from 'vue-ellipse-progress';

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import gsap from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";

gsap.registerPlugin(ExpoScaleEase);

Vue.config.productionTip = false
Vue.use(VueEllipseProgress);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')