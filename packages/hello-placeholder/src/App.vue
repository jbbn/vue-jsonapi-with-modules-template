<script>
import HelloWorld from '@vue-jsonapi-with-modules/hello-world/HelloWorld.vue'

export default {
  components: { HelloWorld },

  computed: {
    menuItems () {
      return this.$router.options.routes.map(({ path }) => ({ path }))
    }
  }
}
</script>

<template>
  <div>
    <h1>App</h1>

    <hello-world></hello-world>

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
