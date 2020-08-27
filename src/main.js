// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { exitLogin } from "@/utils";
// import store from "@/store"; // 引入组件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "babel-polyfill";
// import "@/icons"; // icon
// import "@/permission";
import "@/assets/css/index.scss";
import uploadURL from "./base";
Vue.config.productionTip = false;
Vue.prototype.$exitLogin = exitLogin;
Vue.prototype.uploadURL = uploadURL;
Vue.use(ElementUI);
/* eslint-disable no-new */
// Vue.use(store);
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
