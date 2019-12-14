<template>
  <div>
    <h2 class="listTitle">
      <a>{{ title }}</a>
    </h2>

    <ul class="listAlbum flexContent row">
      <AlbumsItem
        v-for="album in albumList"
        :key="album.collectionId"
        :albumTitle="album.collectionName"
        :albumYear="album.releaseDate"
        :albumImage="album.artworkUrl100"
        :albumId="album.collectionId"
      ></AlbumsItem>
    </ul>
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
      default: "Artists"
    }
  },
  components: {
    AlbumsItem
  }
};
</script>

<style scoped>
  .listTitle a:hover {
    cursor: default;
    color: var(--darkGrey);
  }
</style>