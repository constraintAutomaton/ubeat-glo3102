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
        <div v-if="isNotUser">
            <p>
              <label>
                <input ref="followCheckbox" type="checkbox" v-model="isFriend" @click="followFriend"/>
                <span>Follow</span>
              </label>
            </p>
        </div> 
      </div>
      <h2 class="listTitle">Playlists</h2>
      <div class="userPlaylists">
        <li v-for="playlist in listePlaylists" :key="playlist.id">{{ playlist.name }}</li>
      </div>
      <h2 class="listTitle">Friends</h2>
      <div class="userFriends flexContent">
        <li v-for="friend in friends" :key="friend.id">
          <router-link class="sidenav-close col s6 m4 l2" :to="{ path: friend.id }">
            <a class="waves-effect waves-light btn"><i class="material-icons left">person</i>{{ friend.name }}</a>
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
import { getUserById, followFriend, deleteFriend } from "../lib/util/utilUser";
import { getPlaylistsByUserId } from "../lib/util/utilPlaylist";

export default {
  data() {
    return {
      userInfo: null,
      listePlaylists: null,
      loading: true,
      error: null,
      isNotUser : false,
      isFriend : false
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
      this.i = 0;
      this.isFriend = false;

      try {
        const user = await getUserById(this.$route.params.id);
        const userLogon = await getUserById(this.$cookie.get("id"));
        const playlist = await getPlaylistsByUserId(this.$route.params.id);
        this.userInfo = user;
        this.userLogon = userLogon;
        this.listePlaylists = playlist;
        this.friends = user.following;
        this.logonFriends = userLogon.following;
        if(this.$cookie.get("id") != user.id) {
            this.isNotUser = true;
        }
        if(this.$cookie.get("id") == user.id) {
            this.isNotUser = false;
        }
        for (this.i; this.i < this.logonFriends.length; this.i++) {
            if(this.logonFriends[this.i].id == this.userInfo.id) {
                this.isFriend = true;
            }
        }
        this.loading = false;
        this.error = false;
      } catch (error) {
        this.error = error;
        this.loading = false;
      }
    },
    async followFriend() {
        if(this.isFriend) {
          await deleteFriend(this.userInfo.id, this.$cookie.get("token"));  
          this.isFriend = false;
        }
        else {
          await followFriend(this.userInfo.id, this.$cookie.get("token"));  
          this.isFriend = true;
        } 
    },
  },
};
</script>

<style scoped>
  .userInfos label {
    background-color: var(--primaryAccentColor);
    padding: 10px;
    color: #fff;
  }
  .userPlaylists li, .userFriends li {
    list-style-type: none;
  }
  .userFriends li {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1024px) {
    .userFriends li {
      width: 50%;
    }
  }
  @media screen and (max-width: 500px) {
    .userFriends li {
      width: 100%;
    }
  }
  .userFriends .btn {
    background-color: var(--darkGrey);
    color: #fff;
  }
  .userFriends .btn:hover {
    background-color: var(--mediumGrey);
    color: #fff;
  }
</style>
