<script>
import Photoswipe from 'vue-pswipe';
import Vue from 'vue';
const options = {
            bgOpacity: 0.8,
            captionEl: false,
            tapToClose: true,
            shareEl: false,
            fullscreenEl: false,
            preload: [1,2],
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
        filter: {
            type: String,
            required: false,
            default: '',
        },
    },
    computed: {
        sortedPhotoArray() {
            if (this.filter === '') {
                return this.photos;
            } else {
                return this.photos.filter(photo => photo.type === this.filter);
            }
        }
    },
}
</script>

<template>
    <div>
        <Photoswipe class="photoswipe-gallery" name="cell" is="transition-group" style="overflow-y: hidden;">
            <div v-bind:class="`${photo.class} cell photoswipe-image lazy`"
                v-for="photo in sortedPhotoArray"
                v-bind:key="photo.id"
                v-bind:data-pswp-src="photo.url"
                v-bind:style="`${photo.style}; background-image: url('${photo.url}');`">
                <!-- <img
                    v-bind:data-pswp-src="photo.url"
                    v-bind:src="photo.url"
                /> -->
            </div>
        </Photoswipe>
    </div>
</template>

<style scoped>
/* temporary style override to hide all images in grid */
/* .photoswipe-image {
    background-image: none !important;
    background-color: #333;
}

.photoswipe-image:nth-of-type(2n) {
    background-color: #555;
}

.photoswipe-image:nth-of-type(3n) {
    background-color: #777;
}

.photoswipe-image:nth-of-type(5n) {
    background-color: #999;
} */
</style>