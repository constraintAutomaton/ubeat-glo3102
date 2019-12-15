<template>
  <li>
    <router-link :to="{ name: 'User', params: { id: user.id }}">
      {{ user.name }}
    </router-link>

  </li>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    user: {}
  }
};
</script>
