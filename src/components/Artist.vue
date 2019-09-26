<template>
  <div class="container">
    <section class="infoArtist row">
      <div class="col s12 m6 l6 imgArtist">
        <img src="https://is5-ssl.mzstatic.com/image/thumb/Features128/v4/56/73/e8/5673e8e8-b81b-0548-0eb7-7c72c6756bda/mzl.isfkrmim.jpg/400x400bb.jpg" />
      </div>
      <div class="col s12 m6 l6">
        <h2>Mick Jenkins</h2>
        <h3>Genre: Hip-Hop/Rap</h3>
        <p><a href="https://www.apple.com/ca/itunes/link/"><img src="https://www.apple.com/ca/itunes/link/images/link-badge-music.png"></a></p>
      </div>
    </section>

    <section>
      <h3 class="listTitle">Latest Releases</h3>
      <div class="latestReleases row">
      </div>
    </section>

    <section>
      <h3 class="listTitle">Popular Tracks</h3>
      <ul class="popularTracks">
        <li class="row">
          <img src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg" alt="Album Image" class="trackImg" />
          <img src="https://www.ccfinc.ca/wp-content/uploads/play-button.png" class="playButton" />
          <div class="infoTrack">
            <p class="trackPosition">#1 - <span class="trackName">Track Name</span></p>
          </div>
        </li>
        <li class="row">
          <img src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg" alt="Album Image" class="trackImg" />
          <img src="https://www.ccfinc.ca/wp-content/uploads/play-button.png" class="playButton" />
          <div class="infoTrack">
            <p class="trackPosition">#2 - <span class="trackName">Track Name</span></p>
          </div>
        </li>
        <li class="row">
          <img src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg" alt="Album Image" class="trackImg" />
          <img src="https://www.ccfinc.ca/wp-content/uploads/play-button.png" class="playButton" />
          <div class="infoTrack">
            <p class="trackPosition">#3 - <span class="trackName">Track Name</span></p>
          </div>
        </li>
        <li class="row">
          <img src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg" alt="Album Image" class="trackImg" />
          <img src="https://www.ccfinc.ca/wp-content/uploads/play-button.png" class="playButton" />
          <div class="infoTrack">
            <p class="trackPosition">#4 - <span class="trackName">Track Name</span></p>
          </div>
        </li>
        <li class="row">
          <img src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg" alt="Album Image" class="trackImg" />
          <img src="https://www.ccfinc.ca/wp-content/uploads/play-button.png" class="playButton" />
          <div class="infoTrack">
            <p class="trackPosition">#5 - <span class="trackName">Track Name</span></p>
          </div>
        </li>
      </ul>
    </section>

    <section>
      <h3 class="listTitle">Albums</h3>
      <ul class="listAlbum row">
        <li class="col s6 m4 l2">
          <a>
            <img src="https://i1.sndcdn.com/artworks-000428467479-2thnsz-t500x500.jpg">
          </a>
          <h3 class="albumTitle">
            <a>Pieces of a Man</a>
          </h3>
          <p>2018</p>
        </li>
        <li class="col s6 m4 l2">
          <a>
            <img src="https://i1.sndcdn.com/artworks-3e86379b-ae93-443b-887a-52b0a8b05a93-0-t500x500.jpg">
          </a>
          <h3 class="albumTitle">
            <a>Or More The Anxious</a>
          </h3>
          <p>2017</p>
        </li>
        <li class="col s6 m4 l2">
          <a>
            <img src="https://i1.sndcdn.com/artworks-f12bb816-104e-4655-bc63-6c84c373a7a2-0-t500x500.jpg">
          </a>
          <h3 class="albumTitle">
            <a>The Healing Component</a>
          </h3>
          <p>2016</p>
        </li>
        <li class="col s6 m4 l2">
          <a>
            <img src="https://i1.sndcdn.com/artworks-000127868569-v269fn-t500x500.jpg">
          </a>
          <h3 class="albumTitle">
            <a>Wave[s]</a>
          </h3>
          <p>2015</p>
        </li>
        <li class="col s6 m4 l2">
          <a>
            <img src="https://i1.sndcdn.com/artworks-c65a3566-53c4-4cd1-9b24-2a14c90efed4-0-t500x500.jpg">
          </a>
          <h3 class="albumTitle">
            <a>The Water (S)</a>
          </h3>
          <p>2014</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<style>
  .infoArtist {
    margin-top: 2.37333rem;
  }

  .imgArtist {
    display: flex;
  }

  .imgArtist img {
    max-width: 340px;
    width: 100%;
    margin: auto;
  }

  .popularTracks li {
    background-color: #4F868C;
    display: flex;
    position: relative;
    align-items: center;
    height: 40px;
    color: #fff;
    margin-bottom: 0;
    border-bottom: solid rgba(0, 0, 0, 0.4) 1px;
  }

  .popularTracks li:hover {
    opacity: 0.8;
  }

  .trackImg {
    height: 100%;
  }

  .playButton {
    margin: 0px;
    height: 40px;
    position: absolute;
    background-color:rgba(255, 255, 255, 0.329);
    opacity: 0;
  }

  .playButton:hover {
    opacity: 1;
    cursor: pointer;
  }

  .infoTrack {
    margin-left: 1rem;
  }

  .listAlbum a {
    color: black;
  }

  .listAlbum a:hover {
    color: var(--blackLinkHoverColor);
    cursor: pointer;
  }

  .listAlbum img {
    max-width: 100%;
  }
  
  .listAlbum img:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  .albumTitle {
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
