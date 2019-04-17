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
      <div class="row">
        <div v-for="image in galleryData.images" @click="showLightBox(image)" class="ccol-md-6 col-sm-6 col-lg-3">
          <div class="gallery-box">
            <div class="img-thumb">
              <img class="img-fluid" :src="'../../static/img/gallery/' + 'grp-ph-nc.jpg'" :alt="image.name">
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
          <div class="nivo-lightbox-image" style="line-height: 373px; height: 373px;">
            <img src="../assets/img/gallery/grp-ph-nc.jpg" class="nivo-lightbox-image-display" alt=""></div>
        </div>
        <div class="nivo-lightbox-title-wrap"></div>
      </div>
      <a href="#" class="nivo-lightbox-nav nivo-lightbox-prev" style="">Previous</a>
      <a href="#" class="nivo-lightbox-nav nivo-lightbox-next" style="">Next</a>
      <a href="#" @click="hideLightBox" class=" nivo-lightbox-close" title="Close" style="{width: 40px; height: 40px}">&times</a>
    </div>
  </section>
</template>
<script>
  export default {
    name  : 'Gallery',
    methods : {
      showLightBox(image){
        this.galleryData.selected = image.url;
      },
      hideLightBox(){
        this.galleryData.selected = null;
      }
    },
    props : {galleryData : {}},
    mounted() {
      console.log(this.galleryData.images);
    }
  }
</script>
