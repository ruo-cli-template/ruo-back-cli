import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'
import store from './store'
import '@/assets/css/index.scss'

Vue.use(ElementUI);


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})