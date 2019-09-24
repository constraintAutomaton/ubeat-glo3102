<template>
  <div class="mainContainer container">
    <h2 class="listTitle"><a>Top 50</a></h2>
    <ul class="albumList row row-no-padding">
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre"><a>All music genres</a></h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000407556927-308w8o-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre"><a>Rock</a></h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000515405376-5tpu2f-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre"><a>R&B</a></h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000424060938-h6emj1-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre"><a>Blues</a></h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000087867383-j4snt5-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre"><a>Jazz</a></h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000003026332-oqfy71-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre"><a>Country</a></h3>
        <p>Top 50</p>
      </li>
    </ul>

    <h2 class="listTitle"><a>Most Popular Tracks</a></h2>
    <ul class="trackList row">
      <li class="col s12 m6">
        <div class="popularTrack">
          <img
            src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg"
            alt="Album Image"
            class="left"
          />
          <img
            src="https://www.ccfinc.ca/wp-content/uploads/play-button.png"
            class="playButton"
          />
          <div class="trackDesc">
            <h4 class="ranking">#1</h4>
            <p>
              <a class="artistText">Artist</a> -
              <span class="trackNameText">TrackName</span>
            </p>
          </div>
        </div>
      </li>
      <li class="col s12 m6">
        <div class="popularTrack">
          <img
            src="https://i1.sndcdn.com/artworks-000407556927-308w8o-t500x500.jpg"
            alt="Album Image"
            class="left"
          />
          <img
            src="https://www.ccfinc.ca/wp-content/uploads/play-button.png"
            class="playButton"
          />
          <div class="trackDesc">
            <h4 class="ranking">#2</h4>
            <p>
              <a class="artistText">Artist</a> -
              <span class="trackNameText">TrackName</span>
            </p>
          </div>
        </div>
      </li>
      <li class="col s12 m6">
        <div class="popularTrack">
          <img
            src="https://i1.sndcdn.com/artworks-000515405376-5tpu2f-t500x500.jpg"
            alt="Album Image"
            class="left"
          />
          <img
            src="https://www.ccfinc.ca/wp-content/uploads/play-button.png"
            class="playButton"
          />
          <div class="trackDesc">
            <h4 class="ranking">#3</h4>
            <p>
              <a class="artistText">Artist</a> -
              <span class="trackNameText">TrackName</span>
            </p>
          </div>
        </div>
      </li>

      <li class="col s12 m6">
        <div class="popularTrack">
          <img
            src="https://i1.sndcdn.com/artworks-000424060938-h6emj1-t500x500.jpg"
            alt="Album Image"
            class="left"
          />
          <img
            src="https://www.ccfinc.ca/wp-content/uploads/play-button.png"
            class="playButton"
          />
          <div class="trackDesc">
            <h4 class="ranking">#4</h4>
            <p>
              <a class="artistText">Artist</a> -
              <span class="trackNameText">TrackName</span>
            </p>
          </div>
        </div>
      </li>
      <li class="col s12 m6">
        <div class="popularTrack">
          <img
            src="https://i1.sndcdn.com/artworks-000087867383-j4snt5-t500x500.jpg"
            alt="Album Image"
            class="left"
          />
          <img
            src="https://www.ccfinc.ca/wp-content/uploads/play-button.png"
            class="playButton"
          />
          <div class="trackDesc">
            <h4 class="ranking">#5</h4>
            <p>
              <a class="artistText">Artist</a> -
              <span class="trackNameText">TrackName</span>
            </p>
          </div>
        </div>
      </li>
      <li class="col s12 m6">
        <div class="popularTrack">
          <img
            src="https://i1.sndcdn.com/artworks-000003026332-oqfy71-t500x500.jpg"
            alt="Album Image"
            class="left"
          />
          <img
            src="https://www.ccfinc.ca/wp-content/uploads/play-button.png"
            class="playButton"
          />
          <div class="trackDesc">
            <h4 class="ranking">#6</h4>
            <p>
              <a class="artistText">Artist</a> -
              <span class="trackNameText">TrackName</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .listTitle {
    font-size: 22px;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid;
  }

  .listTitle a {
    color: black;
  }

  .listTitle a:hover {
    color: var(--blackLinkHoverColor);
    cursor: pointer;
  }

  .albumList {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
  }

  .albumList::-webkit-scrollbar {
    display: none;
  }

  .albumList li {
    padding: 8px;
    margin-bottom: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 100px;
    min-height: 130px;
    max-width: 260px;
    max-height: 300px;
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

  .albumGenre a {
    color: black;
  }

  .albumGenre a:hover {
    color: var(--blackLinkHoverColor);
    cursor: pointer;
  }

  p {
    font-size: 12px;
    margin: 0;
  }

  li .popularTrack {
    background-color: #4F868C;
    display: flex;
    align-items: center;
    /* padding: 0 8px; */
    height: 100px;
    color: #fff;
    margin-bottom: 1rem;
    position: relative;
  }

  li .popularTrack:nth-child(even) {
    background-color: #4F868C;
  }

  .trackList {
    display: flex;
    /*flex-direction: column;*/
    flex-wrap: wrap;
  }

  .trackList img {
    width: auto;
    height: 100%;
    margin-right: 1rem
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
    background-color:rgba(255, 255, 255, 0.329);
    opacity: 0;
  }

  .playButton:hover {
    opacity: 1;
    cursor: pointer;
  }
</style>
