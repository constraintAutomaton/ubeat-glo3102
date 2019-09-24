<template>
  <div id="app">
    <component :is="layout">
<!--      <nav-menu></nav-menu>-->
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
    import Navigation from "@/components/Navigation";

    const default_layout = "default";

    export default {
        name: "app",
        components: {
            // "nav-menu": Navigation
        },
        computed: {
            layout() {
                return (this.$route.meta.layout || default_layout + "-layout");
            }
        }
    }
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Muli:300,400,400i,700&display=swap');

  #app{
    font-family: 'Muli', sans-serif;
  }

</style>
