<script>
require('@/assets/styles/reset.css');
require('@/assets/styles/main.css');

import photos from './data/photos';
import PhotoGrid from './components/PhotoGrid';
import LazyLoad from "vanilla-lazyload";

export default {
  name: 'app',
  data() {
    return {
      photos: photos,
    }
  },
  components: {
    PhotoGrid
  },
  mounted() {
    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
    lazyLoadInstance.update();
  }
}
</script>

<template>
  <div id="app">
    <h1>test</h1>
    <PhotoGrid v-bind:photos="photos"></PhotoGrid>
  </div>
</template>
