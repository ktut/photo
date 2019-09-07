<script>
require('@/assets/styles/reset.css');
require('@/assets/styles/main.css');

import photos from './data/photos';
import PhotoGrid from './components/PhotoGrid';
// import LazyLoad from "vanilla-lazyload";

export default {
  name: 'app',
  data() {
    return {
      photos: photos.sort(() => Math.random() - 0.5),
      filter: '',
    }
  },
  components: {
    PhotoGrid
  },
  mounted() {
    // const lazyLoadInstance = new LazyLoad({
    //     elements_selector: ".lazy"
    // });
    // lazyLoadInstance.update();
  }
}
</script>

<template>
  <div id="app">
    <button v-on:click="filter = ''">All</button>
    <button v-on:click="filter = 'people'">People</button>
    <button v-on:click="filter = 'places'">Places</button>
    {{ filter }}
    <PhotoGrid 
      v-bind:photos="photos" 
      v-bind:filter="filter"
    ></PhotoGrid>
  </div>
</template>
