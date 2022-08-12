import Vue from "vue";
import App from "./App.vue";
import router from "./router";
require("@/assets/sass/mystyles.scss");

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
