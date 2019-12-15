<template>
  <div>
    <h2 class="listTitle">
      <router-link v-if="link !== undefined" :to="link">{{ title }}</router-link>
      <span v-else>{{ title }}</span>
    </h2>

    <ul class="listAlbum flexContent row" v-if="albumList !== undefined && albumList.length !== 0">
      <AlbumsItem
        v-for="album in albumList"
        :key="album.collectionId"
        :albumTitle="album.collectionName"
        :albumYear="album.releaseDate"
        :albumImage="album.artworkUrl100"
        :albumId="album.collectionId"
      ></AlbumsItem>
    </ul>
    <p v-else>No albums found</p>

  </div>
</template>

<script>
import AlbumsItem from "./AlbumsItem.vue";
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
    }
  },
  components: {
    AlbumsItem
  }
};
</script>

<style scoped>
.listTitle span:hover {
  cursor: default;
  color: var(--darkGrey);
}
</style>
