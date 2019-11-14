<template>
  <li class="col s6 m4 l2">
    <router-link :to="'/artist/' + artistName">
      <img v-bind:src="artistImage" />
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
