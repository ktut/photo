import Vue from "vue";
import Router from "vue-router";

// Components must be different to trigger router transition
import Home from "./components/Home";
import Contact from "./components/Contact";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        page: 1
      }
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
      meta: {
        page: 2
      }
    },
  ]
});

export default router;
