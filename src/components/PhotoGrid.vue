<script>
import Photoswipe from 'vue-pswipe';
import Vue from 'vue';
const options = {
            bgOpacity: 0.8,
            captionEl: false,
            tapToClose: true,
            shareEl: false,
            fullscreenEl: false,
            preload: [0,1],
        };
Vue.use(Photoswipe, options);

export default {
    name: 'PhotoGrid',
    props: {
        photos: {
            type: Array,
            required: true,
            default: () => [],
        },
        template: {
            type: String,
            required: false,
            default: 'photoswipe-gallery',
        },
    },
    data() {
        return {
            activeFilter: '',
            sortedPhotoArray: this.photos,
        }
    },
    methods: {
        filterPhotos() {
            if (this.activeFilter === '') {
                this.activeFilter = 'place';
                this.sortedPhotoArray = this.photos.filter(photo => photo.type === this.activeFilter);
            } else {
                this.activeFilter = '';
                this.sortedPhotoArray = this.photos;
            }
        }
    }
}
</script>

<template>
    <div>
        <button v-on:click="filterPhotos">Filter</button>
        <Photoswipe v-bind:class="template" name="cell" is="transition-group">
            <div class="cell photoswipe-image"
                v-for="photo in sortedPhotoArray"
                v-bind:key="photo.id"
                v-bind:style="photo.style">
                <img
                    v-bind:data-pswp-src="photo.url"
                    v-bind:src="photo.url"
                />
            </div>
        </Photoswipe>
    </div>
</template>