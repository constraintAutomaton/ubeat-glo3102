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
      type: Array,
      default: () => {
        return [
          {
            artistId: 201743487,
            artistName: "The Jelly Jam",
            genre: "Rock",
            artistImage:
              "https://img.discogs.com/uoVr2ZYuq6AuK7INsgq6mGalC7c=/600x420/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-571447-1201427443.jpeg.jpg"
          },
          {
            artistId: 14784710,
            artistName: "Helene Segara",
            genre: "French Pop",
            artistImage:
              "https://img.discogs.com/stLUW1vf4LDDf4sWIInWzRFGMfA=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-534290-1485012309-9804.jpeg.jpg"
          },
          {
            artistId: 462006,
            artistName: "Bob Dylan",
            genre: "Rock",
            artistImage:
              "https://img.discogs.com/O0FYREyRzNxpM28-o06v4goTZn8=/567x577/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-59792-1319381469.jpeg.jpg"
          },
          {
            artistId: 3996865,
            artistName: "Metallica",
            genre: "Metal",
            artistImage:
              "https://img.discogs.com/bM6UIFFR7TYuPUsZjgitgaKVpds=/600x435/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-18839-1555854164-2387.jpeg.jpg"
          },
          {
            artistId: 78950408,
            artistName: "La Compagnie Créole",
            genre: "World",
            artistImage:
              "https://img.discogs.com/_DKfwBpwbuk-MEcdayjYYZSkopQ=/598x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-528609-1538032320-7712.jpeg.jpg"
          },
          { artistId: 116851,
            artistName: "Blink 182",
            genre: "Rock",
            artistImage: "https://img.discogs.com/dY0QIjmA1OfnHTZt23klOT-XkFI=/600x440/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-80395-1427403437-4479.jpeg.jpg"
          }
        ];
      }
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