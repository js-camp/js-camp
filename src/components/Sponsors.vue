<template>
  <section id="sponsors" class="section-padding">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Sponsors</h2>
          </div>
        </div>
      </div>
      <div class="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
        <div class="col-lg-12">
          <div class="sponsors-logo text-center">
            <a v-for="sponsor in events.years[year].sponsors" :key="sponsor.name" href="#">
              <img :src="`/img/sponsors/${sponsor.logo}`" :alt="sponsor.name">
            </a>
          </div><!-- sponsors logo end-->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name : 'sponsors',
  props: {
    year: {}
  },
  computed  : {
    ...mapGetters(['community', 'events'])
  },
  created () {
    console.log('created');
  }
}
</script>
<style scoped lang="scss">
  #sponsors {
    .sponsors-logo {
      a {
        img {
          margin: 30px;
          max-height: 100px;
        }
      }
    }
  }
</style>
