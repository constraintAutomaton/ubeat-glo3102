<template>
  <div>
    <h1 class="album-name">Camelot</h1>
    <section class="first-haft">
      <section class="head">
        
        <img
          class="image-album"
          src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg" />
      </section>

      <section class="tracks">
        <ol>
          <li>
            <font-awesome-icon class="playIcon playButton" :icon="['fas', 'play-circle']" />
            <input type="range" min="0" max="100" value="0" class="mp3-slider" />
            <span>track name</span>
          </li>
          <li>
            <font-awesome-icon class="playIcon playButton" :icon="['fas', 'play-circle']" />
            <input type="range" min="0" max="100" value="20" class="mp3-slider" />
            <span>track name</span>
          </li>
          <li>
            <font-awesome-icon class="playIcon playButton" :icon="['fas', 'play-circle']" />
            <input type="range" min="0" max="100" value="70" class="mp3-slider" />
            <span>track name</span>
          </li>
          <li>
            <font-awesome-icon class="playIcon playButton" :icon="['fas', 'play-circle']" />
            <input type="range" min="0" max="100" value="100" class="mp3-slider" />
            <span>track name</span>
          </li>
        </ol>
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
    </section>

  </div>
</template>

<style>
:root {
  --album-width:45vw;
}
.mp3-slider {
  height: 5px;
  margin-bottom: 0;
  margin-top: 0;
  width: 100px;
}
.first-haft{
  display: flex;
}
.album-name{
  text-align: center;
  margin-top:0px;
  margin-bottom: 0px;
}
.image-album{
  width: var(--album-width);
  height: auto;
}
.tracks{
  width: 100%;
}
.album-info{
  display: flex;
  justify-content: center;
}
.album-info >ul{
  width: 100%;
}
</style>
