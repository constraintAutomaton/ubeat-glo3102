<template>
  <div id="userPage" class="container">
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="userInfo">
      <div class="userInfos">
        <h1>
            {{userInfo.name}}
        </h1>
        <p>
            {{userInfo.email}}
        </p>
        <a class="waves-effect waves-light btn"><i class="material-icons right">person_add</i>Follow</a>
      </div>   
      <div class="userPlaylists">
        <h2 class="listTitle">Playlists</h2>
        <li v-for="playlist in listePlaylists" :key="playlist.id">{{ playlist.name }}</li>
      </div>
      <div class="userFriends">
        <h2 class="listTitle">Friends</h2>
        <li v-for="friend in friends" :key="friend.id">
          <router-link class="sidenav-close" :to="{ path: friend.id }">
            {{ friend.name }}
          </router-link>
        </li>
      </div>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div> 
</template>

<script>
import { getUserById } from "../lib/util/utilUser";
import { getPlaylistsByUserId } from "../lib/util/utilPlaylist";

export default {
  data() {
    return {
      userInfo: null,
      listePlaylists: null,
      loading: true,
      error: null
    };
  },
  watch: {
    $route: "loadUser",
    $route: "loadPlaylists"
  },
  mounted() {
    this.loadUser();
    this.loadPlaylists();
  },
  methods: {
    async loadUser() {
      this.error = this.userInfo = null;
      this.loading = true;

      try {
        const user = await getUserById(this.$route.params.id);
        this.userInfo = user;
        this.friends = user.following;
        this.loading = false;
        this.error = false;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    },
    async loadPlaylists() {
      this.error = this.listePlaylists = null;
      this.loading = true;

      try {
        const playlist = await getPlaylistsByUserId(this.$route.params.id);      
        this.listePlaylists = playlist;
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
  .userPlaylists li {
      list-style-type: none;
  }
</style>
