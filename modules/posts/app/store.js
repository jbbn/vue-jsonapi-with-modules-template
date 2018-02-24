import axios from "axios"

export default ({ API_URL = '//localhost:3000' } = {}) => ({
  state: {
    posts: []
  },

  actions: {
    getPosts: function ({ commit }, new_todo) {
      axios
        .get(`${API_URL}/posts`)
        .then(({ data }) => {
          let posts = [
            ...data.data.map(({ id, attributes }) => ({ id, ...attributes }))
          ]

          commit("SET_POSTS", posts)
        })
    }
  },

  mutations: {
    SET_POSTS: (state, posts) => state.posts = posts
  }
})
