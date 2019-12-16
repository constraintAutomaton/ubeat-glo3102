<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import router from "./router/index.js";

const default_layout = "default";

export default {
  name: "app",
  components: {},
  computed: {
    layout() {
      return this.$route.meta.layout || default_layout + "-layout";
    }
  },
  created() {
    router.beforeEach((to, from, next) => {
      try {
        const loggedIn = this.$cookie.get("token");
        if (to.matched.some(record => record.meta.requiresAuth)) {
          if (!loggedIn) {
            next({ name: "Login" });
          } else {
            next();
          }
        } else {
          next();
        }
      } catch (ex){}
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Muli:300,400,400i,700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

#app {
  font-family: "Muli", sans-serif;
}
#app h1 {
  font-size: 2.3rem;
  font-weight: 600;
  line-height: 1.125;
  margin: 1rem 0;
}

#app .col {
  margin-left: initial;
  /*flex-basis: inherit;*/
}

#app .row {
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

h2 {
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 1rem 0;
}

h3 {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 1rem 0;
}

p {
  font-size: 1rem;
  line-height: 1.3;
  margin: 0 0 1rem;
}

p:last-child {
  margin: 0;
}

.flexContent {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.badgeContainer {
  width: 135px;
  height: 40px;
  margin-top: 1rem;
}
.itunesBadge {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
}

@media screen and (max-width: 500px) {
  .badgeContainer {
    margin: 0 auto;
  }
}
img.responsiveImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
