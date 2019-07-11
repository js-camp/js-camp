<template>
  <section id="gallery" class="section-padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp animated" v-scroll-reveal.reset="{delay : 200}">Event
              Gallery</h2>
            <p class="wow fadeInDown animated" v-scroll-reveal.reset="{delay : 200}"
               style="visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;">Last Year
              was fun. This year promises to be more exciting</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div v-for="(image, index) in galleryData.images" :key="image.url"
             v-scroll-reveal.reset="{delay : 200 + (index * 150)}"
             @click="setSelectedImage(image)" class="ccol-md-6 col-sm-6 col-lg-3">
          <div class="gallery-box">
            <div class="img-thumb">
              <div class="img-fluid" :style="`background-image: url('/img/gallery/${image.url}')`"></div>
              <!--              <img :src="`/img/gallery/${image.url}`" :alt="image.name">-->
            </div>
            <div class="overlay-box text-center">
              <a class="lightbox">
                <i class="lni-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-xs-12">
          <a href="#" class="btn btn-common">Browse All</a>
        </div>
      </div>
    </div>
    <light-box v-if="selectedImage" :gallery-data="galleryData"
               :selected-image="selectedImage" v-on:setSelected="setSelectedImage($event)"/>
  </section>
</template>
<script>
import LightBox from './LightBox'

export default {
  name    : 'Gallery',
  components: { LightBox },
  data ()
  {
    return {
      publicPath   : process.env.BASE_URL,
      galleryData  : {
        images: [
          { name: 'Group Photo', url: 'reception-team.jpg' },
          { name: 'Group Photo', url: 'participants-assembling.jpg' },
          { name: 'Group Photo', url: 'setting-the-ball-rolling.jpg' },
          { name: 'Group Photo', url: 'snack-break.jpg' },
          { name: 'Group Photo', url: 'snack-break-2.jpg' },
          { name: 'Group Photo', url: 'swag-paraph.jpg' },
          { name: 'Group Photo', url: 'grp-ph-nc.jpg' }]
      },
      selectedImage: null
    }
  },
  computed: {
    maxIndex         : function () {
      return this.galleryData.images.length - 1
    },
    currentImageIndex: function () {
      return this.galleryData.selected !== null ? this.galleryData.images.indexOf(this.selectedImage) : -1
    }
  },
  methods : {
    setSelectedImage (image) {
      this.selectedImage = image
    },
  },
  props   : {}
}
</script>
<style scoped lang="scss">
  @import "../assets/css/colors";

  .img-thumb {
    .img-fluid {
      min-height: 250px;
      background-position: center;
      background-size: cover;
    }
  }

  .overlay-box {
    .lni-plus {
      cursor: pointer;
    }
  }

</style>
