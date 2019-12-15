<template>
  <div class="mainContainer">
    <h2 class="listTitle">
      <a>Users</a>
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
    }
  },
  components: {
    UserItem
  }
}

</script>

<style scoped>

</style>
