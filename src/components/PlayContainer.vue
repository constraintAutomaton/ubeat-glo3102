<template>
  <div id="playContainer">
    <div class="playOptions">
      <font-awesome-icon class="playIcon" :icon="['fas', 'sync']" />
      <font-awesome-icon class="playIcon" :icon="['fas', 'backward']" />
      <font-awesome-icon
        class="playIcon playButton"
        :icon="['fas', 'play-circle']"
      />
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
};
</script>

<style scoped>
#playContainer {
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #2d2d2d;
  color: #fff;
  position: fixed;
  bottom: 0;
  justify-content: flex-end;
  flex-direction: row-reverse;
  padding: 16px 32px;
}

.playOptions {
  min-width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 500px) {
  .playOptions {
    width: 100%;
  }
}

.playInformation {
  min-width: 33%;
  color: #8fd1d9;
}

@media screen and (max-width: 500px) {
  .playInformation {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

.playInformation p {
  margin: 0;
  line-height: 1.6;
  font-size: 0.9rem;
}
@media screen and (max-width: 500px) {
  .playInformation p:last-child{
    margin-left: 5px;
  }
  .playInformation p:last-child:before {
    content: " – ";
  }
}

.playIcon {
  margin: 0 10px;
}

.playButton {
  font-size: 2.5rem;
}

@media screen and (max-width: 500px) {
  .playButton {
    font-size: 1.5rem;
  }
}
</style>
