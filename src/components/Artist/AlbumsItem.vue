<template>
  <li class="col s6 m4 l2">
    <router-link :to="'/album/' + albumTitle">
      <img v-bind:src="albumImage" />
    </router-link>
    <h3 class="albumTitle">
      <a>{{albumTitle}}</a>
    </h3>
    <p>{{albumYear}}</p>
  </li>
</template>

<script>
    export default {
        props: {
            albumTitle: {
                type: String,
                default: "abc"
            },
            albumYear: {
                type: Number,
                default: 2019
            },
            albumImage: {
                type: String,
                default: "./"
            },

        }
    };
</script>

<style lang="css" scoped>

</style>
