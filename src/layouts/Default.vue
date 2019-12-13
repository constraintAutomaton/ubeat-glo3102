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

  --mainFont: "Muli", sans-serif;
}

.main-layout {
  color: var(--darkGrey);
  background-color: var(--extraLightColor);
  min-height: 100vh;
}

.main-content {
  padding-top: 1rem;
  padding-bottom: calc(140px + 2rem);
}

.main-content a {
  color: var(--darkGrey);
}

.main-content a:hover {
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

.ubeatDelete,
.ubeatWarning {
  font-family: var(--mainFont);
}

.ubeatDelete .dg-btn,
.ubeatWarning .dg-btn {
  font-size: 1rem;
  letter-spacing: 0.03em;
  font-weight: 500;
}

.ubeatDelete .dg-btn--cancel {
  color: #fff;
  background-color: var(--mediumGrey);
}

.ubeatWarning .dg-btn--cancel {
  display: none;
}

.ubeatDelete .dg-btn--ok,
.ubeatWarning .dg-btn--ok {
  color: var(--primaryAccentColor);
  background-color: #fefefe;
  border-color: var(--primaryAccentColor);
}

.ubeatDelete .dg-btn--ok:focus {
  color: #fff;
  background-color: var(--primaryAccentColor);
}

.waves-effect {
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.newPlaylist{
  margin-top: 1rem;
}

.newPlaylist .btn {
  color: #fff;
  background-color: var(--darkGrey);
}
.newPlaylist .btn:hover {
  background-color: var(--darkerAccentColor);
  color: #fff;
}
</style>
