import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    urls: []
  },
  getters: {
    all_urls: state => state.urls
  },
  mutations: {
    set_urls(state, urls) {
      state.urls = urls
    }
  },
  actions: {
    get_urls: ({ commit }) => {
      axios.get("http://localhost:3000/api/urls").then((result) => {
        commit('set_urls', result.data.urls)
      });
    },
    post_url({ commit }, url_full) {
      axios
        .post("http://localhost:3000/api/urls", {
          myurl: url_full,
        })
        .then((result) => {
          console.log(result);
          this.dispatch('get_urls')
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    delete_url: ({ commit },  id) => {
      axios
        .delete("http://localhost:3000/api/urls/" + id)
        .then((res) => {
          console.log(res);
          store.dispatch("get_urls");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, modules: {

  }
})

export default store
