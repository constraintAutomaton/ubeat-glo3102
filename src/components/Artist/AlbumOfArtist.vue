<template>
  <div>
    <h2 class="listTitle">
      <a>{{title}}</a>
    </h2>

    <ul class="listAlbum flexContent row">
      <AlbumsItem
        v-for="album in albumList"
        v-bind:key="album.albumTitle"
        v-bind:albumTitle="album.albumTitle"
        v-bind:albumYear="album.albumYear"
        v-bind:albumImage="album.albumImage"
      ></AlbumsItem>
    </ul>
  </div>
</template>

<script>
    import AlbumsItem from "./AlbumsItem.vue";
    export default {
        props: {
            albumList: {
                type: Array,
                default: ()=>{return [
                    { albumTitle: "Pieces of a man", albumYear : 2018, albumImage: "https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg" },
                    { albumTitle: "Or More The Anxious" , albumYear: 2017, albumImage: "https://i1.sndcdn.com/artworks-3e86379b-ae93-443b-887a-52b0a8b05a93-0-t500x500.jpg" },
                    { albumTitle: "The Healing Component", albumYear: 2016, albumImage: "https://i1.sndcdn.com/artworks-000127868569-v269fn-t500x500.jpg" },
                    { albumTitle: "Wave[s]", albumYear: 2015, albumImage: "https://i1.sndcdn.com/artworks-c65a3566-53c4-4cd1-9b24-2a14c90efed4-0-t500x500.jpg" },
                    { albumTitle: "The Water(s)", albumYear: 2014, albumImage: "https://i1.sndcdn.com/artworks-c65a3566-53c4-4cd1-9b24-2a14c90efed4-0-t500x500.jpg" },

                ];}
            },
            title:{
                type:String,
                default:"Albums"
            }
        },
        components: {
            AlbumsItem
        }

    };
</script>


