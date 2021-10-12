import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modal: {
      isOpen: false,
      message: '',
      resolve: (bool) => bool,
      reject: (bool) => bool,
    },
  },
  mutations: {
    commitModalOpen(state, payload) {
      state.modal = payload
    },
    commitResetModalState(state) {
      state.modal = {
        type: '',
        text: '',
        resolve: (bool) => bool,
        reject: (bool) => bool,
      }
    },
  },
  actions: {
    actionModalOpen({ commit }, payload) {
      return new Promise((resolve, reject) => {
        const option = {
          resolve,
          reject,
          ...payload,
        }
        commit('commitModalOpen', option)
      })
    },
    actionModalResolve({ commit, state }) {
      state.modal.resolve(true) // ここはtrueでなくてもOK（ここの括弧に値を指定すると、呼び出し元のthenで受け取れます。）
      commit('commitResetModalState')
    },
    actionModalReject({ commit, state }) {
      state.modal.reject(false) // ここはfalseでなくてもOK（ここの括弧に値を指定すると、呼び出し元のcatchで受け取れます。）
      commit('commitResetModalState')
    },
  },
  modules: {},
})
