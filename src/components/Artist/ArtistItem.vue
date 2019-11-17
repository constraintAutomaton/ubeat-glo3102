<template>
  <li class="col s6 m4 l2">
    <router-link :to="'/artist/' + artistId">
      <div class="imgContainer">
        <img :src="artistImage" class="featureArtistImg" />
      </div>
      <h3 class="albumTitle">
        <a>{{ artistName }}</a>
      </h3>
      <p class="musicGenre">{{ genre }}</p>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    artistId: {
      type: Number,
      default: 0
    },
    artistName: {
      type: String,
      default: "abc"
    },
    genre: {
      type: String,
      default: " "
    },
    artistImage: {
      type: String,
      default: "./"
    }
  },
  name: "ArtistItem"
};
</script>

<style scoped>
.imgContainer {
  position: relative;
  width: 100%;
  padding-top: 100%;
  margin-bottom: 0.5rem;
}
.featureArtistImg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
