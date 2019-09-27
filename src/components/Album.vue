<template>
  <div>
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
              <span>track name</span>
              <font-awesome-icon class="custom-play-button" :icon="['fas', 'play-circle']" />
            </li>
            <li>
              <span>track name</span>
              <font-awesome-icon class="" :icon="['fas', 'play-circle']" />

            </li>
            <li>
              <span>track name</span>
              <font-awesome-icon class="" :icon="['fas', 'play-circle']" />

            </li>
            <li id="last-track">
              <span>track name</span>
              <font-awesome-icon class="" :icon="['fas', 'play-circle']" />
            </li>
          </ul>
        </section>

        <section class="album-info">
          <ul>
            <li>
              <span>Title</span>
              <span class="title-album">Value</span>
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
:root {
  --album-width: 34vw;
}

.first-haft {
  display: flex;
}
.album-name {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 0px;
}
.image-album {
  width: var(--album-width);
  height: auto;
}
.tracks {
  width: 100%;
}
.album-info {
  display: flex;
  justify-content: center;
}
.album-info > ul {
  width: 100%;
}
.first-haft > div {
  width: 100%;
}
.tracks {
  overflow-y: scroll;
}
.tracks > ul li {
  display: flex;
  justify-content: space-between;
  align-items:center;
  list-style-position: inside;
  border-top: solid black;
  font-size: 2.0em;
}
.tracks > ul {
  margin-top: 0px;
  padding-left: 0px;
}

#last-track {
  margin-bottom: 0px;
  border-bottom: solid black;
}
.custom-play-button{
  height: 9000;
  width: auto;
}
</style>
