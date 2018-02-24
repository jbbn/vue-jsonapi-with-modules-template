<script>
import UsersListPage from '../UsersListPage'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'demonstration-page',

  components: { UsersListPage },

  created () { this.getUsers() },

  computed: {
    ...mapState([ 'users' ]),
    menuItems () {
      return this.$router.options.routes.map(({ path }) => ({ path }))
    }
  },

  methods: mapActions([ 'getUsers' ])
}
</script>


<template>
  <div>
    <h1>Demonstration</h1>
    <ul>
      <li
        v-for="{ path } of menuItems"
        :key="path"
      >
        <a
          is="router-link"
          :to="path"
        >{{ path }}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
