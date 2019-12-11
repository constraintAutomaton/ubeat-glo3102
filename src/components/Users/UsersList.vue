<template>
  <div class="mainContainer">
    <h2 class="listTitle">
      <a>Utilisateurs</a>
    </h2>

    <ul class="listAlbum flexContent row">
      <div
        v-for="user in userList"
        :key="user.id"
      >
        {{user.name}}

      </div>
    </ul>
  </div>
</template>

<script>
	export default {
		name: "UsersList",
	  props:{
		  userList:{
			  type: Array
		  }
	  }
	}

</script>

<style scoped>

</style>
