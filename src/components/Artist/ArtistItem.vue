<template>
  <li class="col s6 m4 l2">
    <router-link :to="'/artist/' + artistId">
      <img :src="artistImage" />
      <h3 class="albumTitle">
        <a>{{artistName}}</a>
      </h3>
      <p>{{genre}}</p>
    </router-link>
  </li>
</template>

<script>
    export default {
        props: {
            artistId: {
              type: Number,
              default : 0
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
    }
</script>

<style scoped>

</style>
