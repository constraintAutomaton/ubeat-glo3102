<template>
  <div id="playContainer">
    <div class="playOptions">
      <font-awesome-icon class="playIcon" :icon="['fas', 'sync']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'backward']" />
      <font-awesome-icon class="playIcon playButton" :icon="['fas', 'play-circle']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'forward']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'random']" />
    </div>
    <div class="playInformation">
    <p>Name of the song</p>
      <p>Artist</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PlayContainer.vue"
    }
</script>

<style scoped>

  #playContainer {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    background-color: #2d2d2d;
    color: #fff;
    position: fixed;
    bottom: 0;
    justify-content: flex-end;
    flex-direction: row-reverse;
    padding: 16px 32px;
  }

  .playOptions{
    min-width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .playInformation{
    min-width: 33%;
    color: #8FD1D9;
    font-size: 0.9rem;
  }

  .playInformation p {
    margin: 0;
    line-height: 1.6;
  }

  .playIcon{
    margin: 0 10px;
  }

  .playButton{
    font-size: 2.5rem;
  }


</style>
