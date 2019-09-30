<template>
  <div id="albumPage" class="container">
    <section class="flexContent">
      <div class="albumImage">
        <img
          class="responsiveImage"
          src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg"
          alt="Album Image"
        />
      </div>
      <div class="infoAlbum">
        <h1>Camelot</h1>
        <p class=""><span>Artist:</span> NLE Choppa</p>
        <p class=""><span>Genre:</span> Hip-Hop/Rap</p>
        <p class=""><span>Release:</span> 2019</p>
        <p class=""><span>Number of tracks:</span> 4</p>
        <div class="badgeContainer">
          <a
            href="https://geo.music.apple.com/ca/album/camelot-single/1478620794?mt=1&app=music"
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
    <section class="tracks">
      <h2 class="listTitle"><a>Tracks</a></h2>
      <ul>
        <li class="trackInfo">
          <font-awesome-icon
            class="playTrackIcon"
            :icon="['fas', 'play-circle']"
          />
          <span class="trackNumber">1.</span>
          <span class="songTitle">Track Name</span>
          <span class="trackDuration">2:28</span>
        </li>
        <li class="trackInfo">
          <font-awesome-icon
            class="playTrackIcon"
            :icon="['fas', 'play-circle']"
          />
          <span class="trackNumber">2.</span>
          <span class="songTitle">Track Name</span>
          <span class="trackDuration">5:12</span>
        </li>
        <li class="trackInfo">
          <font-awesome-icon
            class="playTrackIcon"
            :icon="['fas', 'play-circle']"
          />
          <span class="trackNumber">3.</span>
          <span class="songTitle">Track Name</span>
          <span class="trackDuration">3:20</span>
        </li>
        <li class="trackInfo">
          <font-awesome-icon
            class="playTrackIcon"
            :icon="['fas', 'play-circle']"
          />
          <span class="trackNumber">4.</span>
          <span class="songTitle">Track Name</span>
          <span class="trackDuration">3:45</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.albumImage {
  width: 35%;
  margin-right: 2rem;
}

.albumImage img {
  max-width: 275px;
}

@media screen and (max-width: 500px) {
  .albumImage,
  .infoAlbum {
    width: 100%;
    margin: 0 0 2rem 0;
    text-align: center;
  }
}
.infoAlbum p {
  margin-bottom: 0.5rem;
}

.infoAlbum span {
  color: var(--primaryAccentColor);
  font-weight: 600;
}

.infoAlbum {
  margin-bottom: 1.5rem;
}

.trackInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primaryAccentColor);
  position: relative;
  height: 40px;
  color: #fff;
  margin-bottom: 0;
  border-bottom: solid var(--darkerAccentColor) 1px;
  padding: 5px 10px;
}

.trackInfo:last-child {
  border-bottom: none;
}

.trackInfo:hover {
  cursor: pointer;
  background-color: var(--darkerAccentColor);
  color: var(--darkGrey);
}

.trackInfo .songTitle {
  flex-grow: 2;
  white-space: nowrap;
  max-width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.playTrackIcon {
  font-size: 1.3rem;
}

.playTrackIcon,
.trackNumber,
.songTitle {
  margin-right: 10px;
}
</style>
