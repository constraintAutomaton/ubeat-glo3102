<template>
  <section class="tracks">
    <h2 class="listTitle">
      <a>Tracks</a>
    </h2>
    <ul>
      <li class="trackInfo">
        <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
        <span class="trackNumber">1.</span>
        <span class="songTitle">Track Name</span>
        <span class="trackDuration">2:28</span>
      </li>
      <li class="trackInfo">
        <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
        <span class="trackNumber">2.</span>
        <span class="songTitle">Track Name</span>
        <span class="trackDuration">5:12</span>
      </li>
      <li class="trackInfo">
        <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
        <span class="trackNumber">3.</span>
        <span class="songTitle">Track Name</span>
        <span class="trackDuration">3:20</span>
      </li>
      <li class="trackInfo">
        <font-awesome-icon class="playTrackIcon" :icon="['fas', 'play-circle']" />
        <span class="trackNumber">4.</span>
        <span class="songTitle">Track Name</span>
        <span class="trackDuration">3:45</span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
};
</script>