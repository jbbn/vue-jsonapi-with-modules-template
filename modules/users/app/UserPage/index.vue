<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'user-page-users-module',

  props: {

    /** @prop {String} id Id of the user data */
    id: {
      type: String,
      default: () => {}
    },

    /** @prop {Object} user User data */
    user: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    ...mapState({ userStore: 'user' }),

    userToRender () {
      return this.user ? this.user : this.userStore
    }
  },

  methods: mapActions([ 'getUserById' ]),

  mounted () {
    if (!this.user && this.id) this.getUserById(this.id)
  }
}
</script>

<template>
  <div :class="{ fetching: Object.keys(userToRender).length === 0 }">
    <pre>user: {{ userToRender }}</pre>
  </div>
</template>

<style scoped>
/* FUTURE improve fetching state */
.fetching { background: red }
</style>
