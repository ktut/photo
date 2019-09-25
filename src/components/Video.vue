<script>
import LazyLoad from "vanilla-lazyload";
import videos from '../data/videos';

export default {
    name: 'Video',
    data() {
    return {
      videos: videos,
    }
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
    <div class="container" style="max-width: 900px;">
      <div class="embed-container"
            v-for="video in videos"
            v-bind:key="video.id">
        <iframe 
          width="722" 
          height="406" 
          v-bind:src="video.url" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen class="video">
        </iframe>

      </div>
    </div>
</template>