<script>
import PostsListPage from '../PostsListPage'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'demonstration-page',

  components: { PostsListPage },

  created () { this.getPosts() },

  computed: {
    ...mapState([ 'posts' ]),
    menuItems () {
      return this.$router.options.routes.map(({ path }) => ({ path }))
    }
  },

  methods: mapActions([ 'getPosts' ])
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
