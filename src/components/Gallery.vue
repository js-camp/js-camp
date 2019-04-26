<template>
  <section id="gallery" class="section-padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp animated" v-scroll-reveal.reset="{delay : 150}">Event
              Gallery</h2>
            <p class="wow fadeInDown animated" v-scroll-reveal.reset="{delay : 200}">Last Year
              was fun. This year promises to be more exciting</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center" >
        <div v-for="(image, index) in galleryData.images" v-scroll-reveal.reset="{delay : 200 + (index * 150)}" @click="setSelcetedImage(image)" :key="image.url" class="col-md-6 col-sm-6 col-lg-3">
          <div class="gallery-box">
            <div class="img-thumb">
              <div class="img-fluid" :style="`background-image: url('/img/gallery/${image.url}')`"></div>
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
    <div v-if="galleryData.selected !== null" @click.capture="hideLightBox"
         class="nivo-lightbox-overlay nivo-lightbox-theme-default nivo-lightbox-effect-fadeScale nivo-lightbox-open">
      <div class="nivo-lightbox-wrap">
        <div class="nivo-lightbox-content">
          <div class="nivo-lightbox-image" style="line-height: 373px; height: 100%;">
            <img :src="`/img/gallery/${galleryData.selected.url}`" class="nivo-lightbox-image-display" alt="">
</div>
        </div>
        <div class="nivo-lightbox-title-wrap"></div>
      </div>
      <div class="nivo-lightbox-nav nivo-lightbox-prev" @click="previous" style="font-size: 35px">
        <i class="lni-arrow-left"></i></div>
      <div class="nivo-lightbox-nav nivo-lightbox-next" @click="next" style="font-size: 35px">
        <i class="lni-arrow-right"></i></div>
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
      publicPath: process.env.BASE_URL,
      maxIndex  : this.galleryData.images.length - 1
    }
  },
  computed : {
    currentImageIndex : function () {
      return this.galleryData.selected !== null ? this.galleryData.images.indexOf(this.galleryData.selected) : -1;
    }
  },
  methods : {
    next () {
      console.log('called');
      this.galleryData.selected = this.galleryData.images[this.currentImageIndex < this.maxIndex ? this.currentImageIndex + 1 : 0];
    },
    previous () {
      this.galleryData.selected = this.galleryData.images[this.currentImageIndex > 0 ? this.currentImageIndex - 1 : this.maxIndex];
    },
    setSelcetedImage (image) {
      this.galleryData.selected = image;
    },
    hideLightBox () {
      this.galleryData.selected = null;
    }
  },
  props : { galleryData : {} },
  mounted () {
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
    padding: 10px 0;
    font-size: 25px;
    text-align: center;
    width: 35px;
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
  /*!
 * Nivo Lightbox v1.3.1
 * http://dev7studios.com/nivo-lightbox
 *
 * Copyright 2013, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

  .nivo-lightbox-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
    width: 100%;
    height: 100%;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.8);
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .nivo-lightbox-overlay.nivo-lightbox-open {
    visibility: visible;
    opacity: 1;
  }
  .nivo-lightbox-wrap  {
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
  }
  .nivo-lightbox-content {
    width: 100%;
    height: 100%;
  }
  .nivo-lightbox-title-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99999;
    text-align: center;
  }
  .nivo-lightbox-nav {
    /*display: none; */
    cursor: pointer;
    color: $accent-color;
    &:hover{
      color: $accent-color-light;
    }
  }
  .nivo-lightbox-prev {
    position: absolute;
    top: 50%;
    left: 0;
  }
  .nivo-lightbox-next {
    position: absolute;
    top: 50%;
    right: 0;
  }
  .nivo-lightbox-close {
    position: absolute;
    top: 2%;
    right: 2%;
  }

  .nivo-lightbox-image { text-align: center; }
  .nivo-lightbox-image img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    vertical-align: middle;
  }
  .nivo-lightbox-content iframe {
    width: 100%;
    height: 100%;
  }
  .nivo-lightbox-inline,
  .nivo-lightbox-ajax {
    max-height: 100%;
    overflow: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    /* https://bugzilla.mozilla.org/show_bug.cgi?id=308801 */
  }
  .nivo-lightbox-error {
    display: table;
    text-align: center;
    width: 100%;
    height: 100%;
    color: #fff;
    text-shadow: 0 1px 1px #000;
  }
  .nivo-lightbox-error p {
    display: table-cell;
    vertical-align: middle;
  }

  /* Effects
   **********************************************/
  .nivo-lightbox-notouch .nivo-lightbox-effect-fade,
  .nivo-lightbox-notouch .nivo-lightbox-effect-fadeScale,
  .nivo-lightbox-notouch .nivo-lightbox-effect-slideLeft,
  .nivo-lightbox-notouch .nivo-lightbox-effect-slideRight,
  .nivo-lightbox-notouch .nivo-lightbox-effect-slideUp,
  .nivo-lightbox-notouch .nivo-lightbox-effect-slideDown,
  .nivo-lightbox-notouch .nivo-lightbox-effect-fall {
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  /* fadeScale */
  .nivo-lightbox-effect-fadeScale .nivo-lightbox-wrap {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
  }
  .nivo-lightbox-effect-fadeScale.nivo-lightbox-open .nivo-lightbox-wrap {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  /* slideLeft / slideRight / slideUp / slideDown */
  .nivo-lightbox-effect-slideLeft .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideRight .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideUp .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideDown .nivo-lightbox-wrap {
    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    -moz-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    -ms-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    -o-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }
  .nivo-lightbox-effect-slideLeft .nivo-lightbox-wrap {
    -webkit-transform: translateX(-10%);
    -moz-transform: translateX(-10%);
    -ms-transform: translateX(-10%);
    transform: translateX(-10%);
  }
  .nivo-lightbox-effect-slideRight .nivo-lightbox-wrap {
    -webkit-transform: translateX(10%);
    -moz-transform: translateX(10%);
    -ms-transform: translateX(10%);
    transform: translateX(10%);
  }
  .nivo-lightbox-effect-slideLeft.nivo-lightbox-open .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideRight.nivo-lightbox-open .nivo-lightbox-wrap {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  .nivo-lightbox-effect-slideDown .nivo-lightbox-wrap {
    -webkit-transform: translateY(-10%);
    -moz-transform: translateY(-10%);
    -ms-transform: translateY(-10%);
    transform: translateY(-10%);
  }
  .nivo-lightbox-effect-slideUp .nivo-lightbox-wrap {
    -webkit-transform: translateY(10%);
    -moz-transform: translateY(10%);
    -ms-transform: translateY(10%);
    transform: translateY(10%);
  }
  .nivo-lightbox-effect-slideUp.nivo-lightbox-open .nivo-lightbox-wrap,
  .nivo-lightbox-effect-slideDown.nivo-lightbox-open .nivo-lightbox-wrap {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  /* fall */
  .nivo-lightbox-body-effect-fall .nivo-lightbox-effect-fall {
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
  }
  .nivo-lightbox-effect-fall .nivo-lightbox-wrap {
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    -webkit-transform: translateZ(300px);
    -moz-transform: translateZ(300px);
    -ms-transform: translateZ(300px);
    transform: translateZ(300px);
  }
  .nivo-lightbox-effect-fall.nivo-lightbox-open .nivo-lightbox-wrap {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .icon-close{
    font-size: 24px;
  }

</style>
<!--
 TODO Add previous and next buttons to the light box
  Slide right if the NEXT button is pressed
  Slide left if the previous button is pressed
-->
