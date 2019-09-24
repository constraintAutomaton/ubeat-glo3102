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
  :root
  {
    /*Constante à utiliser pour tous les lien noir sur le hover*/
    --blackLinkHoverColor: #5f5f5f;
  }

  .main-layout {
    color: #2d2d2d;
    background-color: #f9f9f9;
  }

  .main-content{
    padding-bottom: 100px;
  }

</style>
