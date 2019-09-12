<script>
import PhotoGrid from './PhotoGrid';
// import LazyLoad from "vanilla-lazyload";

import people from '../data/people';
import places from '../data/places';

export default {
    name: 'Home',
    data() {
    return {
      filter: '',
    }
  },
  components: {
    PhotoGrid
  },
  computed: {
    photos() {
      return people.concat(places);
      // use .sort(() => Math.random() - 0.5); to shuffle array if you want
    }
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
    <div>
        <nav>
            <button 
                v-bind:class="{ active: filter === '' }"
                v-on:click="filter = ''">
                All
            </button>
            <button 
                v-bind:class="{ active: filter === 'people' }"
                v-on:click="filter = 'people'">
                People
            </button>
            <button 
                v-bind:class="{ active: filter === 'places' }"
                v-on:click="filter = 'places'">
                Places
            </button>
        </nav>
        <PhotoGrid 
        v-bind:photos="photos" 
        v-bind:filter="filter"
        ></PhotoGrid>
    </div>
</template>