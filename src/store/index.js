import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    add(_state, item) {
      this.state.items = item
    }
  },
  actions: {},
  modules: {}
})
