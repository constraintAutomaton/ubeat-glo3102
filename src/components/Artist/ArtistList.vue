<template>
  <div class="mainContainer">
    <h2 class="listTitle">
      <a>{{ title }}</a>
    </h2>

    <ul class="listAlbum flexContent row">
      <ArtistItem
        v-for="artist in artistList"
        :key="artist.artistId"
        :artistId="artist.artistId"
        :artistName="artist.artistName"
        :genre="artist.genre"
        :artistImage="artist.artistImage"
      ></ArtistItem>
    </ul>
  </div>
</template>

<script>
import ArtistItem from "../Artist/ArtistItem";
export default {
  props: {
    artistList: {
      type: Array
    },
    title: {
      type: String,
      default: "Artists"
    }
  },
  components: {
    ArtistItem
  },
  name: "ArtistList"
};
</script>

<style scoped>
.listTitle a:hover {
  cursor: default;
  color: var(--darkGrey);
}
</style>