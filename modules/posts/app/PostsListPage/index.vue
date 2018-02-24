<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'posts-list-page-posts-module',

  props: {

    /** @prop {Array} posts Posts array */
    posts: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapState({ postsStore: 'posts' }),

    postsToRender () {
      return this.posts.length > 0 ? this.posts : this.postsStore
    }
  },

  methods: mapActions([ 'getPosts' ]),

  mounted () {
    if (this.posts.length === 0) this.getPosts()
  }
}
</script>

<template>
  <div>
    <table>

      <thead>
        <tr>
          <th>#</th>
          <th>Título</th>
          <th>Postagem</th>
          <th>Usuário (#)</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="{ id, title, body, userId } of postsToRender"
          :key="id"
        >
          <td>{{ id }}</td>
          <td>{{ title }}</td>
          <td>{{ body }}</td>
          <td>{{ userId }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  min-width: 50%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table tr:nth-child(even) { background-color: #f2f2f2 }

table tr:hover { background-color: #ddd }

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
