import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from '@/pages/dashboard/store'

Vue.use(Vuex)

const stores = {
    state: {

    },
    modules: {
        dashboard
    }
}

const store = new Vuex.Store(stores)

export default store