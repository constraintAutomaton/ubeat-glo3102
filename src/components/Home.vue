<template>
  <div class="mainContainer container">
    <ArtistList :title="'Featured Artists'" />
    <AlbumOfArtist :title="'Featured Albums'" />
  </div>
</template>

<script>
import AlbumOfArtist from "./Artist/AlbumOfArtist";
import ArtistList from "./Artist/ArtistList";

export default {
  components: {
    ArtistList,
    AlbumOfArtist
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
