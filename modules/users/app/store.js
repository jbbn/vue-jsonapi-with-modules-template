import axios from 'axios'

export default ({ API_URL = '//localhost:3000' } = {}) => ({
  state: {
    users: [],
    user: {},
  },

  actions: {
    async getUsers ({ commit }) {
      try {
        const {
          data: {
            data: users
          } = {}
        } = await axios.get(`${API_URL}/users`)

        commit(
          'SET_USERS',
          users.map(({ id, attributes }) => ({ id, ...attributes }))
        )
      } catch (err) {
        console.error('users-module:store:getUsers:', id, err)
      }
    },

    async getUserById ({ commit }, id) {
      try {
        const {
          data: {
            data: {
              attributes: { ...attributes }
            }
          } = {}
        } = await axios.get(`${API_URL}/users/${id}`)

        commit(
          'SET_USER',
          { id, ...attributes }
        )
      } catch (err) {
        console.error('users-module:store:getUserById:', id, err)
      }
    }
  },

  mutations: {
    SET_USERS: (state, users) => state.users = users,
    SET_USER: (state, user) => state.user = user
  }
})
