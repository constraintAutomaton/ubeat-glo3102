<template>
  <div>
    <h2 class="listTitle">
      <a>{{ title }}</a>
    </h2>

    <ul class="listAlbum flexContent row">
      <AlbumsItem
        v-for="album in albumList"
        :key="album.collectionId"
        :albumTitle="album.collectionName"
        :albumYear="album.releaseDate"
        :albumImage="album.artworkUrl100"
        :albumId="album.collectionId"
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
    },
    title: {
      type: String,
      default: "Albums"
    }
  },
  components: {
    AlbumsItem
  }
};
</script>
