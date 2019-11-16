<template>
  <li class="col s6 m4 l2">
    <router-link :to="'/album/' + albumId">
      <img :src="albumImage" />

      <h3 class="albumTitle">
        <a>{{ albumTitle }}</a>
      </h3>
      <p>{{ releaseDate }}</p>
    </router-link>
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
      type: String,
      default: ""
    },
    albumImage: {
      type: String,
      default: "./"
    },
    albumId: {
      type: Number,
      default: undefined
    }
  },
  computed: {
    releaseDate() {
      return new Date(this.albumYear).getFullYear();
    }
  }
};
</script>
