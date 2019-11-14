<template>
  <div>
    <h2 class="listTitle">
      <a>{{title}}</a>
    </h2>

    <ul class="listAlbum flexContent row">
      <ArtistItem
        v-for="artist in artistList"
        v-bind:key="artist.artistName"
        v-bind:artistName="artist.artistName"
        v-bind:genre=artist.genre
        v-bind:artistImage="artist.artistImage"
      ></ArtistItem>
    </ul>
  </div>
</template>

<script>
  import ArtistItem from "../Artist/ArtistItem";
    export default {
        props: {
            artistList: {
                type: Array,
                default: ()=>{return [
                    { artistName: "celine Dion", genre : "ffff", artistImage: "https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg" },
                    { artistName: "Garou" , genre : "gggg", artistImage: "https://i1.sndcdn.com/artworks-3e86379b-ae93-443b-887a-52b0a8b05a93-0-t500x500.jpg" },
                    { artistName: "manu Dibango", genre : "jjjj", artistImage: "https://i1.sndcdn.com/artworks-000127868569-v269fn-t500x500.jpg" },
                    { artistName: "Helene segara", genre : "kkkk", artistImage: "https://i1.sndcdn.com/artworks-c65a3566-53c4-4cd1-9b24-2a14c90efed4-0-t500x500.jpg" },
                    { artistName: "America", genre : "oooo", artistImage: "https://i1.sndcdn.com/artworks-c65a3566-53c4-4cd1-9b24-2a14c90efed4-0-t500x500.jpg" },

                ];}
            },
            title:{
                type:String,
                default:"Artiste"
            }
        },
        components: {
            ArtistItem

        },
        name: "ArtistList"
    }
</script>

<style scoped>

</style>
