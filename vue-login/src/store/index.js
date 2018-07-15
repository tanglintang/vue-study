import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    token: null,
    activeName: 'first',
    username: ''
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})