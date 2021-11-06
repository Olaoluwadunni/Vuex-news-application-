import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsItems: [],
    allSources: [],
    allCategories: [],
  },
  getters: {
    getNewsItems: (state) => state.newsItems,
    getAllSources: (state) => state.allSources,
    getAllCategory: (state) => state.allCategories,
  },
  mutations: {
    setNewsItems: (state, payload) => { state.newsItems = payload; },
    setAllSources: (state, payload) => { state.allSources = payload; },
    setAllCategories: (state, payload) => { state.allCategories = payload; },
  },
  actions: {
    fetchNewsItems: ({commit}) => {
      const apiKey = process.env.VUE_APP_NEWS_KEY;
      console.log(apiKey);
      try {
        axios.get( `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${apiKey}`)
        .then((res) => {
          console.log(res.data.articles);
          commit('setNewsItems', res.data.articles);
        })
      }catch (e) {
        console.log(e);
      }
    },
    fetchAllCategories: ({commit}, payload) => {
      const apiKey = process.env.VUE_APP_NEWS_KEY;
      console.log(apiKey);
      try {
        axios.get( `https://newsapi.org/v2/top-headlines?country=ng&category=${payload}&apiKey=${apiKey}`)
        .then((res) => {
          console.log(res.data.articles);
          commit('setAllCategories', res.data.articles);
        })
      }catch (e) {
        console.log(e);
      }
    }
  },
  modules: {
  }
})
