<template>
  <div class="root-of-component">
    <h1 class="album-name">Camelot</h1>
    <section class="first-haft">
      <section class="head">
        <img
          class="image-album"
          src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg"
        />
      </section>
      <div>
        <section class="tracks">
          <ul>
            <li id="first-track">
              <span>
                1. track name
                <span>duration: xx:xx</span>
              </span>
              <font-awesome-icon class="custom-play-button" :icon="['fas', 'play-circle']" />
            </li>
            <li>
              <span>
                2. track name
                <span>duration: xx:xx</span>
              </span>
              <font-awesome-icon class="custom-play-button" :icon="['fas', 'play-circle']" />
            </li>
            <li>
              <span>
                3. track name
                <span>duration: xx:xx</span>
              </span>
              <font-awesome-icon class="custom-play-button" :icon="['fas', 'play-circle']" />
            </li>
            <li id="last-track">
              <span>
                4. track name
                <span>duration: xx:xx</span>
              </span>
              <font-awesome-icon class="custom-play-button" :icon="['fas', 'play-circle']" />
            </li>
          </ul>
        </section>

        <a
          class="itune-link"
          href=" https://geo.music.apple.com/ca/artist/mick-jenkins/885270234?mt=1&app=music"
        >
          <img src="https://www.apple.com/ca/itunes/link/images/link-badge-itunes.png" />
        </a>
        <h1 class="line-under-title">Album info</h1>

        <section class="album-info">
          <ul>
            <li>
              <span>Title</span>
              <span class="title-album">Camelot</span>
            </li>
            <li>
              <span>release date</span>
              <span class="release-date-album">Value</span>
            </li>
            <li>
              <span>Number of track</span>
              <span class="number-track-album">Value</span>
            </li>
            <li>
              <span>Gender</span>
              <span class="gender-album">Value</span>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped>
.first-haft {
  display: flex;
}
.album-name {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}
.image-album {
  width: 33vw;
  height: auto;
  border: solid black;
  border-width: 1px;
}
.tracks {
  width: 100%;
}

.album-info > ul {
  width: 100%;
}
.first-haft > div {
  width: 100%;
}
.tracks {
  height: 170px;
  overflow-y: scroll;
}
.tracks > ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-position: inside;
  border-top: solid black;
  border-right: solid black;
  border-width: 1px;
  font-size: 1.7em;
  background-color: var(--primaryAccentColor);
}
.tracks > ul li:hover {
  background-color: transparent;
}
.tracks > ul {
  margin-top: 0px;
  padding-left: 0px;
  width: 100%;
  height: 100%;
}

#last-track {
  margin-bottom: 0px;
  border-bottom: solid black;
  border-width: 1px;
}
.custom-play-button {
  height: 9000;
  width: auto;
}
.album-info {
  font-size: 2em;
}
.album-info > ul li {
  display: flex;
  justify-content: space-between;
}
.album-info > ul {
  margin-top: 0px;
}
.tracks span span {
  font-size: 0.5em;
}
.itune-link {
  display: flex;
  justify-content: center;
}
.line-under-title {
  border-bottom: black solid;
  border-width: 1px;
  margin-bottom: 0px;
}

@media (max-width: 961px) {
  .first-haft {
    flex-direction: column;
    align-items: center;
  }
  .root-of-component {
    margin-right: 1.5vh;
    margin-left: 1.5vh;
  }
}
</style>
