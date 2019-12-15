<template>
  <section class="tracks">
    <h2 class="listTitle" v-if="title !== undefined" >
      <router-link v-if="link !== undefined" :to="link">{{ title }}</router-link>
      <span v-else>{{ title }}</span>
    </h2>

    <Pagination ref="paginationTop" v-if="pagination" :pageCount="pageCount" @pageChange="pageChange"/>
    <ul v-if="trackList.length !== 0">
      <single-track
        v-for="track in displayedList"
        :key="track.id"
        :track="track"
      ></single-track>
    </ul>
    <p v-else>No tracks found</p>
    <Pagination ref="paginationBottom" v-if="pagination" :pageCount="pageCount" @pageChange="pageChange" />

  </section>
</template>
<script>
import SingleTrack from "../Playlist/SingleTrack";
import Pagination from "../Pagination";
export default {
  props: {
    trackList: {
      type: Array
    },
    link: {
      type: String,
      default: undefined
    },
    title: {
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
    SingleTrack,
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
        return this.trackList;
      
      const begin = this.currentPage * this.itemPerPage;
      let end = begin + this.itemPerPage;

      if(end > this.trackList.length)
        end = this.trackList.length;

      return this.trackList.slice(begin, end);
    },
    pageCount() {
      if(this.trackList.length % this.itemPerPage == 0)
        return this.trackList.length / this.itemPerPage;
      
      return Math.floor(this.trackList.length / this.itemPerPage) + 1;
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
