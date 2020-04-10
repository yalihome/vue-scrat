import Vue from "vue";
import VueRouter from "vue-router";
import style from "./index.less";
import routes from "../route.js";

Vue.use(VueRouter);
const router = new VueRouter(routes);

//rem 的基础
document.body.style.fontSize = window.innerWidth*28/640 +"px";

// const app = 
new Vue({router,components: {
    page: ()=>import("../pages/page.vue")
}}).$mount("#app");