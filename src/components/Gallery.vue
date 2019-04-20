<template>
  <section id="gallery" class="section-padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp animated" data-wow-delay="0.2s"
                style="visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;">Event
              Gallery</h2>
            <p class="wow fadeInDown animated" data-wow-delay="0.2s"
               style="visibility: visible;-webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;">Last Year
              was fun. This year promises to be more exciting</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center" >
        <div v-for="image in galleryData.images" @click="setSelcetedImage(image)" :key="image.url" class="ccol-md-6 col-sm-6 col-lg-3">
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
    <div v-show="galleryData.selected !== null"
         class="nivo-lightbox-overlay nivo-lightbox-theme-default nivo-lightbox-effect-fadeScale nivo-lightbox-open">
      <div class="nivo-lightbox-wrap">
        <div class="nivo-lightbox-content">
          <div class="nivo-lightbox-image" style="line-height: 373px; height: 100%;">
            <img :src="`/img/gallery/${galleryData.selected}`" class="nivo-lightbox-image-display" alt="">
</div>
        </div>
        <div class="nivo-lightbox-title-wrap"></div>
      </div>
      <a class="nivo-lightbox-nav nivo-lightbox-prev" style="">Previous</a>
      <a class="nivo-lightbox-nav nivo-lightbox-next" style="">Next</a>
      <a @click="hideLightBox" class=" nivo-lightbox-close" title="Close" style="{width: 40px; height: 40px}">&times;</a>
    </div>
  </section>
</template>
<script>
import '../assets/css/nivo-lightbox.css'
export default {
  name  : 'Gallery',
  data ()
  {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods : {
    next () {
    },
    previous () {
    },
    setSelcetedImage (image) {
      this.galleryData.selected = image.url;
    },
    hideLightBox () {
      this.galleryData.selected = null;
    }
  },
  props : { galleryData : {} },
  mounted () {
    console.log(this.galleryData.images);
  }
}
</script>
<style scoped lang="scss">
  @import "../assets/css/colors";
  .img-thumb{
    .img-fluid{
      min-height: 250px;
      background-position: center;
      background-size: cover;
    }
  }
  .nivo-lightbox-close{
    color: $accent-color !important;
    padding: 10px;
    font-size: 25px;
    height: 35px;
    line-height: .4;
    background: transparent;
    border: 2px solid $accent-color;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    &:hover{
      color: #fff !important;
      background: $accent-color;
    }
  }
  .overlay-box{
    .lni-plus{
      cursor: pointer;
    }
  }
</style>
