<template>
  <div class="main-layout">
    <nav-menu></nav-menu>
    <div class="main-content">
      <slot></slot>
    </div>
    <play-container></play-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import PlayContainer from "../components/PlayContainer";

export default {
  name: "default-layout",
  components: {
    "nav-menu": Navigation,
    "play-container": PlayContainer
  }
};
</script>

<style>
:root {
  /** Theme Colors variables **/
  --primaryAccentColor: #4f868c;
  --darkerAccentColor: #3b686f;
  --lighterAccentColor: #8fd1d9;
  --mediumGrey: #383842;
  --darkGrey: #27272e;
  --extraLightColor: #f9f9f9;

  /*Constante à utiliser pour tous les lien noir sur le hover*/
  --blackLinkHoverColor: #5f5f5f;
}

.main-layout {
  color: var(--darkGrey);
  background-color: var(--extraLightColor);
}

.main-content {
  padding-bottom: 100px;
}

.main-content a{
  color: var(--darkGrey);
}

.main-content a:hover{
  color: var(--blackLinkHoverColor);
  cursor: pointer;
}

p.musicStyle {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primaryAccentColor);
}

.listTitle {
  font-size: 1.6rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;
}
</style>
