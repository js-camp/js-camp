<template>
  <section id="speaker" class="section-padding text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title-header text-center">
            <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Speakers</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <!-- Speakers ITEM Starts -->
        <div v-for="speaker in events.years[year].speakers" :key="speaker.name" class="col-lg-3 col-md-6 col-xs-12">
          <div class="speaker-item wow fadeInUp" data-wow-delay="0.2s">
            <div class="speaker-img">
              <img class="img-fluid" :src="`/img/speakers/${speaker.picture}`" :alt="speaker.name + '\'s picture not found'">
              <div class="speaker-overlay">
                <div class="overlay-social-icon text-center">
                  <ul class="social-icons">
                    <li><a href="#"><i class="lni-twitter-filled" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="lni-facebook-filled" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="info-text">
              <h3><a href="#">{{speaker.name}}</a></h3>
              <p>{{speaker.jobTitle}}</p>
            </div>
          </div>
        </div>
        <!-- Speakers ITEM Ends -->
      </div>
      <a href="#" class="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">Meet all speakers</a>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name : 'Speakers',
  data () {
    return {
      // speakers : this.$store.getters('eve')
    }
  },
  computed   : {
    ...mapGetters(['events'])
  },
  props : ['year'],
  mounted () {
  }
}
</script>
