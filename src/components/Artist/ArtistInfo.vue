<template>
  <section class="flexContent">
    <div class="imgArtist">
      <img
        v-bind:src="imgArtist"
        class="responsiveImage"
      />
    </div>
    <div class="infoArtist">
      <h1>{{artistName}}</h1>
      <p class="musicStyle">Genre: {{genre}}</p>

      <div class="badgeContainer">
        <a
          v-bind:href="artistLink"
          target="_blank"
          rel="noopener"
        >
          <img
            class="itunesBadge"
            src="https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=&kind=artist&bubble=apple_music"
            alt="Listen on iTunes"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
    export default {

        props: {

            artistName: {
                type: String,
                default: "Mick Jenkins"
            },
            imgArtist: {
                type: String,
                default: "https://is5-ssl.mzstatic.com/image/thumb/Features128/v4/56/73/e8/5673e8e8-b81b-0548-0eb7-7c72c6756bda/mzl.isfkrmim.jpg/400x400bb.jpg"
            },
            artiste: {
                type: String,
                default: "foo"
            },
            genre: {
                type: String,
                default: "Hip-Hop/Rap"
            },
            artistLink: {
                type: String,
                default: "./"
            }
        }
    };
</script>

<style scoped>

</style>
