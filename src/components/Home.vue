<template>
  <div class="mainContainer container">
    <h2 class="listTitle">Top 50</h2>
    <ul class="albumList row row-no-padding">
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre">All music genres</h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000407556927-308w8o-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre">Rock</h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000515405376-5tpu2f-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre">R&B</h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000424060938-h6emj1-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre">Blues</h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000087867383-j4snt5-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre">Jazz</h3>
        <p>Top 50</p>
      </li>
      <li class="col s6 m4 l2">
        <img
          src="https://i1.sndcdn.com/artworks-000003026332-oqfy71-t500x500.jpg"
          alt="Album Image"
        />
        <h3 class="albumGenre">Country</h3>
        <p>Top 50</p>
      </li>
    </ul>

    <h2 class="listTitle">Most Popular Tracks</h2>
    <ul class="trackList row">
      <li class="col s12 m6">
        <div class="popularTrack">
          <img
            src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg"
            alt="Album Image"
            class="left"
          />
          <div class="trackDesc">
            <h4 class="ranking">#1</h4>
            <p>
              <span class="artistText">Artist</span> -
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
          <div class="trackDesc">
            <h4 class="ranking">#2</h4>
            <p>
              <span class="artistText">Artist</span> -
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
          <div class="trackDesc">
            <h4 class="ranking">#3</h4>
            <p>
              <span class="artistText">Artist</span> -
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
          <div class="trackDesc">
            <h4 class="ranking">#4</h4>
            <p>
              <span class="artistText">Artist</span> -
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
          <div class="trackDesc">
            <h4 class="ranking">#5</h4>
            <p>
              <span class="artistText">Artist</span> -
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
          <div class="trackDesc">
            <h4 class="ranking">#6</h4>
            <p>
              <span class="artistText">Artist</span> -
              <span class="trackNameText">TrackName</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
  .listTitle {
    font-size: 22px;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid;
  }

  .mainContainer {
    /*min-width: 320px;*/
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

  .albumGenre {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    font-size: 12px;
    margin: 0;
  }

  @media (max-width: 810px) {
    .fullScreenOnly {
      display: none;
    }
  }

  li .popularTrack {
    background-color: #4F868C;
    display: flex;
    align-items: center;
    /* padding: 0 8px; */
    height: 100px;
    color: #fff;
    margin-bottom: 1rem;
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

  .trackDesc {
    /*height: 100%;*/
  }

  .ranking{
    margin: 0 0 0.5rem;
  }
</style>
