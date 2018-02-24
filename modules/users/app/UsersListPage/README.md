# Users list page

```./UsersListPage```

## How to use

```html
<users-list-page :users="users"></users-list-page>
```

```javascript
export default {
  // ...
  data () {
    return {
      users: [
        { id: '1', name: 'José', address: { city: 'São Paulo' } },
        { id: '2', name: 'Jaiminho', address: { city: 'São Paulo' } },
        { id: '3', name: 'Raphael', address: { city: 'São Paulo' } }
      ]
    }
  }
  // ...
}
```
