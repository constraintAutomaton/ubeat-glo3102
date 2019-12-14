<template>
  <div class="mainContainer">
    <h2 class="listTitle">
      <a>Utilisateurs</a>
    </h2>

    <ul>
        <UserItem
        v-for="user in userList"
        :key="user.id"
        :user="user"
      ></UserItem>
    </ul>
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
