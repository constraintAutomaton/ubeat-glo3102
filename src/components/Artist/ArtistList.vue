<template>
  <div class="mainContainer">
    <h2 class="listTitle">
      <router-link v-if="link !== undefined" :to="link">{{
        title
      }}</router-link>
      <span v-else>{{ title }}</span>
    </h2>

    <Pagination
      ref="paginationTop"
      v-if="pagination"
      :pageCount="pageCount"
      @pageChange="pageChange"
    />
    <ul
      class="listAlbum flexContent row"
      v-if="displayedList !== undefined && displayedList.length !== 0"
    >
      <ArtistItem
        v-for="artist in displayedList"
        :key="artist.artistId"
        :artistId="artist.artistId"
        :artistName="artist.artistName"
        :genre="artist.genre"
        :artistImage="artist.artistImage"
      ></ArtistItem>
    </ul>
    <p v-else>No artists found</p>
    <Pagination
      ref="paginationBottom"
      v-if="pagination"
      :pageCount="pageCount"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import ArtistItem from "../Artist/ArtistItem";
import Pagination from "../Pagination";
import _ from "lodash";

export default {
  props: {
    artistList: {
      type: Array
    },
    title: {
      type: String,
      default: "Artists"
    },
    pagination: {
      type: Boolean,
      default: false
    },
    itemPerPage: {
      type: Number,
      default: 6
    },
    link: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      currentPage: 0
    };
  },
  computed: {
    displayedList() {
      if (!this.pagination) return this.artistList;

      const begin = this.currentPage * this.itemPerPage;
      let end = begin + this.itemPerPage;

      if (end > this.artistList.length) end = this.artistList.length;

      return this.artistList.slice(begin, end);
    },
    pageCount() {
      if (this.artistList.length % this.itemPerPage == 0)
        return this.artistList.length / this.itemPerPage;

      return Math.floor(this.artistList.length / this.itemPerPage) + 1;
    }
  },
  methods: {
    pageChange(pageNumber) {
      this.currentPage = pageNumber - 1;

      this.$refs.paginationBottom.setCurrentPage(pageNumber);
      this.$refs.paginationTop.setCurrentPage(pageNumber);
    }
  },
  components: {
    ArtistItem,
    Pagination
  },
  name: "ArtistList"
};
</script>

<style scoped>
.listTitle span:hover {
  cursor: default;
  color: var(--darkGrey);
}
</style>
