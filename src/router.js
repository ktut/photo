import Vue from "vue";
import Router from "vue-router";

// Components must be different to trigger router transition
import Photo from "./components/Photo";
import Video from "./components/Video";
import Contact from "./components/Contact";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Photo",
      component: Photo,
      meta: {
        page: 1
      }
    },
    {
      path: "/Video",
      name: "Video",
      component: Video,
      meta: {
        page: 2
      }
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact,
      meta: {
        page: 3
      }
    },
  ]
});

export default router;
