<template>
  <div>
    <h2 class="listTitle">
      <router-link v-if="link !== undefined" :to="link">{{ title }}</router-link>
      <span v-else>{{ title }}</span>
    </h2>

    <Pagination ref="paginationTop" v-if="pagination" :pageCount="pageCount" @pageChange="pageChange"/>
    <ul class="listAlbum flexContent row" v-if="albumList !== undefined && albumList.length !== 0">
      <AlbumsItem
        v-for="album in displayedList"
        :key="album.collectionId"
        :albumTitle="album.collectionName"
        :albumYear="album.releaseDate"
        :albumImage="album.artworkUrl100"
        :albumId="album.collectionId"
      ></AlbumsItem>
    </ul>
    <p v-else>No albums found</p>
    <Pagination ref="paginationBottom" v-if="pagination" :pageCount="pageCount" @pageChange="pageChange" />

  </div>
</template>

<script>
import AlbumsItem from "./AlbumsItem.vue";
import Pagination from "../Pagination";
export default {

  props: {
    albumList: {
      type: Array
    },
    title: {
      type: String,
      default: "Albums"
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
    AlbumsItem,
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
        return this.albumList;
      
      const begin = this.currentPage * this.itemPerPage;
      let end = begin + this.itemPerPage;

      if(end > this.albumList.length)
        end = this.albumList.length;

      return this.albumList.slice(begin, end);
    },
    pageCount() {
      if(this.albumList.length % this.itemPerPage == 0)
        return this.albumList.length / this.itemPerPage;
      
      return Math.floor(this.albumList.length / this.itemPerPage) + 1;
    }
  },
  methods: {
    pageChange(pageNumber) {
      this.currentPage = pageNumber - 1;

      this.$refs.paginationBottom.setCurrentPage(pageNumber);
      this.$refs.paginationTop.setCurrentPage(pageNumber);
    }
  }
};
</script>

<style scoped>
.listTitle span:hover {
  cursor: default;
  color: var(--darkGrey);
}
</style>
