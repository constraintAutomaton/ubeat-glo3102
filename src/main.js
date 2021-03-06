import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Default from "./layouts/Default.vue";

import VuejsDialog from "vuejs-dialog";

import Toasted from "vue-toasted";
import _ from "lodash";
import * as vueCookie from "vue-cookie";

import AudioVisual from "vue-audio-visual";

import Vuelidate from "vuelidate";
// include the default style
import "vuejs-dialog/dist/vuejs-dialog.min.css";

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
  faAngleDown,
  faMinusCircle,
  faPauseCircle,
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faRandom,
  faSync,
  faPlayCircle,
  faBackward,
  faForward,
  faPencilAlt,
  faAngleRight,
  faAngleDown,
  faMinusCircle,
  faPauseCircle,
  faPlusCircle,
  faCheckCircle,
  faTimesCircle,
  faTrashAlt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("default-layout", Default);

Vue.use(VuejsDialog);
Vue.use(Toasted);
Vue.use(_);
Vue.use(vueCookie);
Vue.use(AudioVisual);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
Vue.prototype.$songEvent = new Vue(); // Global event bus
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
