<template>
  <div class="mainContainer container">
    <ArtistList :title="'Featured Artists'" :artistList="defaultArtistList" />
    <AlbumOfArtist :title="'Featured Albums'" :albumList="defaultAlbumList" />
  </div>
</template>

<script>
import AlbumOfArtist from "./Artist/AlbumOfArtist";
import ArtistList from "./Artist/ArtistList";

export default {
  components: {
    ArtistList,
    AlbumOfArtist
  },
  props: {
    defaultArtistList: {
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
    defaultAlbumList: {
      type: Array,
      default: () => {
        return [
          {
            collectionId: 1146894931,
            collectionName: "The Healing Component",
            releaseDate: "2016-09-23T07:00:00Z",
            artworkUrl100:
              "https://is2-ssl.mzstatic.com/image/thumb/Music22/v4/62/79/62/62796240-fd44-4ec0-f412-8a7809d1540c/source/100x100bb.jpg"
          },
          {
            collectionId: 1022614929,
            collectionName: "Wave[s]",
            releaseDate: "2015-08-21T07:00:00Z",
            artworkUrl100:
              "https://is4-ssl.mzstatic.com/image/thumb/Music4/v4/93/19/aa/9319aaa6-07dd-3cbc-49e1-29cda106000e/source/100x100bb.jpg"
          },
          {
            collectionId: 1280662726,
            collectionName: "The Water(s)",
            releaseDate: "2014-08-12T07:00:00Z",
            artworkUrl100:
              "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/1f/2d/e9/1f2de934-c3a9-2ebd-6e1f-9acf35a0deda/source/100x100bb.jpg"
          },
          {
            collectionId: 1275600311,
            collectionName: "Master of Puppets",
            releaseDate: "1986-08-12T07:00:00Z",
            artworkUrl100:
              "https://img.discogs.com/WkAnKisssPawPsqj4qPob-um74k=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2450361-1474887817-3627.jpeg.jpg"
          },
          {
            collectionId: 449756908,
            collectionName: "Ça fait rire les oiseaux",
            releaseDate: "2011-08-12T07:00:00Z",
            artworkUrl100:
              "https://img.discogs.com/nwabWAdnMJb_Sb6TNMbgJCcGHeg=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1492692-1445863546-4893.jpeg.jpg"
          },
          {
            collectionId: 1445668706,
            collectionName: "Come On Over",
            releaseDate: "1997-08-12T07:00:00Z",
            artworkUrl100:
              "https://img.discogs.com/jWYcLZVv4hCrnQNrpj0s7nhQm-4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-6449572-1517745187-5914.jpeg.jpg"
          }
        ];
      }
    }
  }
};
</script>

<style scoped>
.albumList {
  align-items: flex-start;
}

.albumList li {
  padding: 8px;
  margin-bottom: 1rem;
}

.albumList img {
  max-width: 100%;
  height: auto;
}

.albumList img:hover {
  opacity: 0.8;
  cursor: pointer;
}

.albumGenre {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
}

p {
  font-size: 12px;
  margin: 0;
}

li .popularTrack {
  background-color: var(--primaryAccentColor);
  display: flex;
  align-items: center;
  height: 100px;
  color: #fff;
  margin-bottom: 1rem;
  position: relative;
}

li .popularTrack:hover {
  background-color: var(--darkerAccentColor);
  cursor: pointer;
}

.trackList {
  display: flex;
  flex-wrap: wrap;
}

.trackList img {
  width: auto;
  height: 100%;
  margin-right: 1rem;
}

.ranking {
  margin: 0 0 0.5rem;
}

.artistText {
  color: #fff;
  cursor: pointer;
}

.artistText:hover {
  color: rgb(204, 204, 204);
  cursor: pointer;
}

.trackNameText {
  font-style: italic;
}

.playButton {
  margin: 0px;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.329);
  opacity: 0;
}

li .popularTrack:hover .playButton {
  opacity: 1;
}
</style>
