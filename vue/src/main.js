import { createApp, markRaw } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import router from './router/index'
import selectVue from './components/Select.vue'
import sideBarVue from './components/sidebar.vue'
import Layout from './components/Layout.vue'
import Test from './views/Test.vue'
import createPersistedState from 'pinia-plugin-persistedstate'
import axios from 'axios'

//window.axios = axios


//axios.defaults.baseURL = 'https://127.0.0.1:8000'
//axios.defaults.withCredentials = true;
// window.axios.defaults.headers.common['Accept'] = 'application/json'
// window.axios.defaults.headers.post['Content-Type'] = 'application/json';
// window.axios.defaults.headers.common['Cache-Control'] = 'no-cache'
// //window.axios.defaults.headers.common['content-type'] = 'application/json'
// window.axios.defaults.headers.common['X-Request-Width'] = 'XMLHttpRequest'


const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router);
})

pinia.use(createPersistedState)

const Vue = createApp(App)
Vue.use(pinia)
    .component('select-vue', selectVue)
    .component('layout-vue', Layout)
    .component('sidebar-vue', sideBarVue)
    .component('test-vue', Test)
    .use(router)
    .mount('#app')
