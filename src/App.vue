<script>
require('@/assets/styles/reset.css');
require('@/assets/styles/main.css');

import Vue from 'vue';
import Router from 'vue-router';
 
Vue.use(Router);

export default {
  name: 'app',
  data() {
    return {
      filter: '',
      transitionName: '',
    }
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
    <nav style="padding-top: 20px; padding-bottom: 15px; justify-content: space-between;">
      <div class="title-link">
        <h1 class="title">
          RKDVISUALS
        </h1>
      </div>
      <div style="display: flex;">
        <router-link :to="{name: 'Photo'}" style="text-decoration: none !important;" class="nav-button photo">
          Photo
        </router-link>
        <router-link :to="{name: 'Video'}" style="text-decoration: none !important;" class="nav-button video">
          Video
        </router-link>
        <router-link :to="{name: 'Contact'}" class="nav-button info">
          Contact
        </router-link>
      </div>
    </nav>
    <main>
      <transition v-bind:name="transitionName">
        <router-view/>
      </transition>
    </main>
  </div>
</template>
