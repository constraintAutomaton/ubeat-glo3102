<template>
  <div class="mainContainer container">
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
                    { artistName: "The Jelly Jam", genre : "Rock", artistImage: "https://img.discogs.com/7z0aS65XsMHo9otn8wHnAevXCHQ=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-113965-1330518379.jpeg.jpg" },
                    //{ artistName: "Timberlake" , genre : "Pop", artistImage: "https://img.discogs.com/URDL1jhUNB_4DmTV5vJlCiGzTy8=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-235513-1310035764.jpeg.jpg" },
                    { artistName: "Helene Segara", genre : "French Pop", artistImage: "https://img.discogs.com/IxLuWezmCpqcaMsb_TchJF-dnSQ=/277x261/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-1726706-1478510872-8932.jpeg.jpg" },
                    { artistName: "Bob Dylan", genre : "Rock", artistImage: "https://img.discogs.com/LIBB7FAvEkji0W658_ETe5UMlQE=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-482143-1501973076-3537.jpeg.jpg" },
                    //{ artistName: "Beastie Boys", genre : "Hip-Hop/Rap", artistImage: "https://img.discogs.com/jR0e9VlZJK0i6EaE52ws7lVZ3Ic=/300x300/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-10783-1449311945-7861.jpeg.jpg" },

                ];}
            },
            title:{
                type:String,
                default:"Artists"
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
