<template>
  <div class="container">
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="userInfo">
      <div class="userInfos">
        <p>
            {{userInfo.name}}
        </p>
        <p>
            {{userInfo.email}}
        </p>
        <a class="waves-effect waves-light btn"><i class="material-icons right">person_add</i>Follow</a>
      </div>   
      <div class="userPlaylists">
        <h2 class="listTitle">Playlists</h2>
      </div>
      <div class="userFriends">
        <h2 class="listTitle">Friends</h2>
      </div>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div> 
</template>

<script>
import { getUserById } from "../lib/util/utilUser";

export default {
  data() {
    return {
      userInfo: null,
      loading: true,
      error: null
    };
  },
  watch: {
    $route: "loadUser"
  },
  mounted() {
    this.loadUser();
  },
  methods: {
    async loadUser() {
      this.error = this.userInfo = null;
      this.loading = true;

      try {
        const user = await getUserById(this.$route.params.id);
        this.userInfo = user;
        this.loading = false;
        this.error = false;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    }
  },
};
</script>

<style scoped>
</style>
