<template>
  <div class="mainContainer">
      <h2 class="listTitle">Top 50</h2>
      <ul class="albumList row" >
        <li class="col">
          <img src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg" alt="Album Image" />
          <h3 class="albumGenre">All music genres</h3>
          <p>Top 50</p>
        </li>
        <li class="col">
          <img src="https://i1.sndcdn.com/artworks-000407556927-308w8o-t500x500.jpg" alt="Album Image" />
          <h3 class="albumGenre">Rock</h3>
          <p>Top 50</p>
        </li>
        <li class="col">
          <img src="https://i1.sndcdn.com/artworks-000515405376-5tpu2f-t500x500.jpg" alt="Album Image" />
          <h3 class="albumGenre">R&B</h3>
          <p>Top 50</p>
        </li>
        <li class="col fullScreenOnly">
          <img src="https://i1.sndcdn.com/artworks-000424060938-h6emj1-t500x500.jpg" alt="Album Image" />
          <h3 class="albumGenre">Blues</h3>
          <p>Top 50</p>
        </li>
        <li class="col fullScreenOnly">
          <img src="https://i1.sndcdn.com/artworks-000087867383-j4snt5-t500x500.jpg" alt="Album Image" />
          <h3 class="albumGenre">Jazz</h3>
          <p>Top 50</p>
        </li>
        <li class="col fullScreenOnly">
          <img src="https://i1.sndcdn.com/artworks-000003026332-oqfy71-t500x500.jpg" alt="Album Image" />
          <h3 class="albumGenre">Country</h3>
          <p>Top 50</p>
        </li>
      </ul>

      <h2 class="listTitle">Most Popular Tracks</h2>
      <ul class="trackList">
        <li>
          <img src="https://i1.sndcdn.com/artworks-000596445971-jh3py0-t500x500.jpg" alt="Album Image" class="left" />
          <p class="trackDesc left"><span class="artistText">Artist</span> - <span class="trackNameText">TrackName</span></p>
        </li>
        <li>
          <img src="https://i1.sndcdn.com/artworks-000407556927-308w8o-t500x500.jpg" alt="Album Image" class="left" />
          <p class="trackDesc"><span class="artistText">Artist</span> - <span class="trackNameText">TrackName</span></p>
        </li>
        <li>
          <img src="https://i1.sndcdn.com/artworks-000515405376-5tpu2f-t500x500.jpg" alt="Album Image" class="left" />
          <p class="trackDesc"><span class="artistText">Artist</span> - <span class="trackNameText">TrackName</span></p>
        </li>
        <li>
          <img src="https://i1.sndcdn.com/artworks-000424060938-h6emj1-t500x500.jpg" alt="Album Image" class="left" />
          <p class="trackDesc"><span class="artistText">Artist</span> - <span class="trackNameText">TrackName</span></p>
        </li>
        <li>
          <img src="https://i1.sndcdn.com/artworks-000087867383-j4snt5-t500x500.jpg" alt="Album Image" class="left" />
          <p class="trackDesc"><span class="artistText">Artist</span> - <span class="trackNameText">TrackName</span></p>
        </li>
        <li>
          <img src="https://i1.sndcdn.com/artworks-000003026332-oqfy71-t500x500.jpg" alt="Album Image" class="left" />
          <p class="trackDesc"><span class="artistText">Artist</span> - <span class="trackNameText">TrackName</span></p>
        </li>
      </ul>
  </div>
</template>

<style>
.listTitle
{
  font-size: 22px;
  margin: 15px;
}

.mainContainer
{
  min-width: 320px;
}

.albumList
{
  margin: 0;
  display: flex;
}

.albumList li
{
  margin: 5px;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 100px;
  min-height: 130px;
  max-width: 260px;
  max-height: 300px;
}

.albumList img
{
  max-width: 100%;
  height: auto;
}

.albumGenre
{
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
}

p
{
  font-size: 12px;
  margin: 0;
}

@media (max-width: 810px) {
  .fullScreenOnly
  {
    display: none;
  }
}

.trackList
{
  display: flex;
  flex-direction: column;
}

.trackList img
{
  width: 64px;
  height: 64px;
  
}

.trackDesc
{
  height: 100%;
}
</style>
