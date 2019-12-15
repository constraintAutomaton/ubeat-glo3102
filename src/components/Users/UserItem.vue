<template>
  <li class="liUser">
      <router-link :to="{ name: 'User', params: { id: user.id }}">
        <span class="username">{{ user.name }}</span>
      </router-link>
      <label v-if="token && !user.isCurrUser">
        <input ref="followCheckbox" type="checkbox" v-model="user.currentFollowing" @click="follow"/>
        <span>Follow</span>
      </label>
  </li>
</template>

<script>
import { followFriend, deleteFriend } from "../../lib/util/utilUser";
export default {
  name: "UserItem",
  props: {
    user: {},
    token: undefined
  },
  created() {
    this.token = this.$cookie.get("token");
    if(this.$cookie.get("id") != this.user.id) {
        this.user.isCurrUser = false;
    }
    else{
        this.user.isCurrUser = true;
    }
  },
  methods: {
    async follow() {
      if(this.user.currentFollowing) {
        await deleteFriend(this.user.id, this.$cookie.get("token"));
        this.user.currentFollowing = false;
      }
      else {
        await followFriend(this.user.id, this.$cookie.get("token"));
        this.user.currentFollowing = true;
      }
    }
  }
};
</script>

<style src="./../../css/Track.css"></style>
<style scoped>
.username {
  color: var(--extraLightColor);
}

.username:hover
{
  text-decoration: underline;
}

.liUser {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primaryAccentColor);
  position: relative;
  min-height: 2.5rem;
  color: #fff;
  margin-bottom: 0;
  margin-right: 0;
  border-bottom: solid var(--darkerAccentColor) 1px;
  padding: 5px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.liUser:last-child {
  border-bottom: none;
}

@media screen and (max-width: 499px) {
  .liUser {
    width: 100%;
  }
}

@media screen and (min-width: 500px) {
  .liUser {
    flex-grow: 2;
  }
}
</style>