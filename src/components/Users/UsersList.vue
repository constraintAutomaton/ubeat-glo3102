<template>
  <div class="mainContainer">
    <h2 class="listTitle">
      <router-link v-if="link !== undefined" :to="link">{{ title }}</router-link>
      <span v-else>{{ title }}</span>
    </h2>

    <ul v-if="userList.length !== 0 ">
        <UserItem
        v-for="user in userList"
        :key="user.id"
        :user="user"
      ></UserItem>
    </ul>

    <p v-else>No users found</p>
  </div>
</template>

<script>
import UserItem from "./UserItem";
export default {
  name: "UsersList",
  props:{
    userList:{
      type: Array
    },
    title: {
      type: String,
      default: "Users"
    },
    link: {
      type: String,
      default: undefined
    }
  },
  components: {
    UserItem
  }
}

</script>

<style scoped>
.listTitle span:hover {
  cursor: default;
  color: var(--darkGrey);
}
</style>
