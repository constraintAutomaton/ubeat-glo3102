import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Default from "./layouts/Default.vue";

import "materialize-css";
import "materialize-css/dist/css/materialize.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRandom,
  faSync,
  faPlayCircle,
  faBackward,
  faForward,
  faPencilAlt,
  faAngleRight,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faRandom, faSync, faPlayCircle, faBackward, faForward, faPencilAlt, faAngleRight, faAngleDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("default-layout", Default);

Vue.config.productionTip = false;
Vue.prototype.$songEvent = new Vue(); // Global event bus
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
