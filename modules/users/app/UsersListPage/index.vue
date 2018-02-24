<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'users-list-page-users-module',

  props: {

    /** @prop {Array} users Users array */
    users: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    ...mapState({ usersStore: 'users' }),

    usersToRender () {
      return this.users.length > 0 ? this.users : this.usersStore
    }
  },

  methods: mapActions([ 'getUsers' ]),

  mounted () {
    if (this.users.length === 0) this.getUsers()
  }
}
</script>

<template>
  <div>
    <table>

      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Cidade</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="{ id, name, address: { city } } of usersToRender"
          :key="id"
        >
          <td>{{ id }}</td>
          <td>{{ name }}</td>
          <td>{{ city }}</td>
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
