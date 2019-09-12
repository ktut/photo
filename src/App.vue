<script>
require('@/assets/styles/reset.css');
require('@/assets/styles/main.css');

import Vue from 'vue';
import Router from 'vue-router';
// import LazyLoad from "vanilla-lazyload";
 
Vue.use(Router);

export default {
  name: 'app',
  data() {
    return {
      filter: '',
      transitionName: '',
    }
  },
  computed: {
  },
  mounted() {
    // const lazyLoadInstance = new LazyLoad({
    //     elements_selector: ".lazy"
    // });
    // lazyLoadInstance.update();
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.meta.page > from.meta.page ? "next" : "prev";
    }
  },
}
</script>

<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
    </nav>
    <main>
      <transition v-bind:name="transitionName">
        <router-view/>
      </transition>
    </main>
  </div>
</template>
