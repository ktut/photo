<script>
import PhotoGrid from './PhotoGrid';
import LazyLoad from "vanilla-lazyload";

import people from '../data/people';
import places from '../data/places';

export default {
    name: 'Photo',
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
      return (people.concat(places)).sort(() => Math.random() - 0.5);
      // use .sort(() => Math.random() - 0.5); to shuffle array if you want
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
    <div>
        <nav class="photonav" style="padding-bottom: 15px; justify-content: flex-end;">
            <a
              class="nav-button" 
              v-bind:class="{ active: filter === '' }"
              v-on:click="filter = ''">
              All
            </a>
            <a
              class="nav-button" 
              v-bind:class="{ active: filter === 'people' }"
              v-on:click="filter = 'people'">
              People
            </a>
            <a
              class="nav-button" 
              v-bind:class="{ active: filter === 'places' }"
              v-on:click="filter = 'places'">
              Places
            </a>
        </nav>
        <PhotoGrid 
        v-bind:photos="photos" 
        v-bind:filter="filter"
        ></PhotoGrid>
    </div>
</template>