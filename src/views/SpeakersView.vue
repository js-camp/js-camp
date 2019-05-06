<template>
  <div>
    <header-wrap style="max-height: 400px;" />
    <!-- Speakers SECTION Start -->
    <Speakers v-bind:year="year"/>
    <!-- Speakers Section End -->
    <section id="cta" class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 col-md-12 col-xs-12 wow fadeInDown animated animated" data-wow-delay="0.3s"
               style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
            <div class="cta-text text-center">
              <h3>Meet your next customer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto nam consequatur, dolorum quod placeat,
                ipsum. fugit velit voluptates laboriosam in perferendis cum sint? Temporibus.</p>
              <a href="#" class="btn btn-common">Get Partnership Desk</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer-section></footer-section>

    <a href="#" class="back-to-top" style="display: none;">
      <i class="lni-chevron-up"></i>
    </a>
    <div id="preloader" style="display: none;">
      <div class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderWrap      from './HeaderWrap';
import Speakers        from '../components/speakers';
import { mapGetters } from 'vuex'

export default {
  name: "SpeakersView",
  components : { HeaderWrap, Speakers },
  props : [],
  data () {
    return {}
  },
  methods : {},
  computed  : {
    year () {
      return this.$route.year || new Date().getFullYear();
    },
    ...mapGetters(['community', 'events'])
  },
}
</script>

<style lang="scss" scoped>

</style>
