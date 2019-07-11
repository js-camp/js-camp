<template>
  <div id="app">
    <ext-page-layout :active="'Code of Conduct'" :options="extPageOptions">
      <h1 class="page-title" slot="page-title">Conference Code of Conduct</h1>

      <section id="cta" class="section-padding" slot="main-content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9 col-md-12 col-xs-12 wow fadeInDown animated animated" data-wow-delay="0.3s"
                 style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
              <div class="cta-text">
                <h3 class="post-title  text-center">Please Take this code of conduct seriously</h3>
                <p>All attendees, speakers, sponsors and volunteers at our conference are required to
                  agree with the following code of conduct. Organisers will enforce this code throughout
                  the event. We expect cooperation from all participants to help ensure a safe environment
                  for everybody. Need Help?
                  <router-link to="#">You have our contact details in the emails we've sent.</router-link></p>
                <br>
                <p>Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation,
                  disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces,
                  deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other
                  events, inappropriate physical contact, and unwelcome sexual attention.</p>
                <br>
                <p>Participants asked to stop any harassing behavior are expected to comply immediately.
                  Sponsors are also subject to the anti-harassment policy.
                  In particular, sponsors should not use sexualised images, activities, or other material.
                  Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes,
                  or otherwise create a sexualised environment.</p>
                <br>
                <p>If a participant engages in harassing behavior, the conference organisers may take any action
                  they deem appropriate, including warning the offender or expulsion from the conference with no refund
                  (where applicable).
                  If you are being harassed, notice that someone else is being harassed, or have any other concerns,
                  please contact a member of conference staff immediately. Conference staff can be identified
                  as they'll be wearing branded clothing and/or badges.</p>
                <br>
                <p>Conference staff will be happy to help participants contact hotel/venue security or local law enforcement,
                  provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the
                  conference. We value your attendance.</p>

                <p>We expect participants to follow these rules at conference and workshop venues and conference-related
                  social events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="post-content">

      </div>
    </ext-page-layout>
  </div>
</template>

<script>
import ExtPageLayout  from '../layouts/ExtPageLayout'
// import HeaderWrap     from './HeaderWrap'
// import Speakers       from '../components/speakers'
import { mapGetters } from 'vuex'

export default {
  name      : 'CodeOfConduct',
  components: { 'ext-page-layout': ExtPageLayout },
  props     : [],
  data () {
    return {
      extPageOptions : {
      }
    }
  },
  methods   : {},
  computed  : {
    year () {
      return this.$route.year || new Date().getFullYear()
    },
    ...mapGetters(['community', 'events'])
  },
}
</script>

<style lang="scss" scoped>
  .post-title {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 15px;
    line-height: 30px;
  }
</style>
