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
              "https://img.discogs.com/7z0aS65XsMHo9otn8wHnAevXCHQ=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-113965-1330518379.jpeg.jpg"
          },
          {
            artistId: 14784710,
            artistName: "Helene Segara",
            genre: "French Pop",
            artistImage:
              "https://img.discogs.com/IxLuWezmCpqcaMsb_TchJF-dnSQ=/277x261/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-1726706-1478510872-8932.jpeg.jpg"
          },
          {
            artistId: 462006,
            artistName: "Bob Dylan",
            genre: "Rock",
            artistImage:
              "https://img.discogs.com/LIBB7FAvEkji0W658_ETe5UMlQE=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-482143-1501973076-3537.jpeg.jpg"
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
