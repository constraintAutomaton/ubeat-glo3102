<template>
  <div class="mainContainer">
    <h2 class="listTitle">
      <router-link v-if="link !== undefined" :to="link">{{ title }}</router-link>
      <span v-else>{{ title }}</span>
    </h2>

    <Pagination ref="paginationTop" v-if="pagination" :pageCount="pageCount" @pageChange="pageChange"/>
    <ul v-if="userList.length !== 0 ">
        <UserItem
        v-for="user in displayedList"
        :key="user.id"
        :user="user"
      ></UserItem>
    </ul>
    <p v-else>No users found</p>
    <Pagination ref="paginationBottom" v-if="pagination" :pageCount="pageCount" @pageChange="pageChange" />

  </div>
</template>

<script>
import UserItem from "./UserItem";
import Pagination from "../Pagination";
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
    },
    pagination: {
      type: Boolean,
      default: false
    },
    itemPerPage: {
      type: Number,
      default: 6
    }
  },
  components: {
    UserItem,
    Pagination
  },
  data() {
    return {
      currentPage: 0
    }
  },
  computed: {
    displayedList() {
      if(!this.pagination)
        return this.userList;
      
      const begin = this.currentPage * this.itemPerPage;
      let end = begin + this.itemPerPage;

      if(end > this.userList.length)
        end = this.userList.length;

      return this.userList.slice(begin, end);
    },
    pageCount() {
      if(this.userList.length % this.itemPerPage == 0)
        return this.userList.length / this.itemPerPage;
      
      return Math.floor(this.userList.length / this.itemPerPage) + 1;
    }
  },
  methods: {
    pageChange(pageNumber) {
      this.currentPage = pageNumber - 1;

      this.$refs.paginationBottom.setCurrentPage(pageNumber);
      this.$refs.paginationTop.setCurrentPage(pageNumber);
    }
  }
}

</script>

<style scoped>
.listTitle span:hover {
  cursor: default;
  color: var(--darkGrey);
}
</style>
