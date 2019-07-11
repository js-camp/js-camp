<template>
  <div id="app">
    <ext-page-layout :active="'Call for Sponsorship'" :options="extPageOptions">
      <div slot="page-title">
        <h1 class="page-title">JS Camp 2019 Sponsorship</h1>
        <p class="mt-lg-5 sponsorship-nav">
          <a href="" v-scroll-to="`#packages`" class="mr-l-5 mr-sm-2 mr-md-4">Packages</a>
          <a href="" v-scroll-to="`#workshops`" class="mr-l-5 mr-sm-2 mr-md-4">Workshops</a>
          <a href="" v-scroll-to="`#reach`" class="mr-l-5 mr-sm-2 mr-md-4">Our Reach</a></p>
      </div>

      <section id="cta" class="section-padding" slot="main-content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9 col-md-12 col-xs-12 wow fadeInDown animated animated" data-wow-delay="0.3s"
                 style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
              <div class="cta-text">
                <h2 class="section-title wow fadeInUp animated" v-scroll-reveal.reset="{delay : 200}">So Far So Good</h2>
                <h3 class="post-title text-center">We're growing steadily</h3>
                <div class="row intro-wrapper">
                  <div class="col-lg-4 col-md-6 col-xs-12">
                    <div class="single-intro-text mb-70">
                      <i class="lni-microphone"></i>
                      <h3 class="font-weight-light">8</h3>
                      <p class="font-weight-bold">Great Speakers</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-xs-12">
                    <div class="single-intro-text mb-70">
                      <i class="lni-users"></i>
                      <h3 class="font-weight-light ">70<span>+</span></h3>
                      <p class="font-weight-bold">Attendees</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-xs-12">
                    <div class="single-intro-text mb-70">
                      <i class="lni-flag"></i>
                      <h3 class="font-weight-light">6</h3>
                      <p class="font-weight-bold">Countries</p>
                    </div>
                  </div>
                </div>
                <h3 class="post-title  text-center">Top Countries</h3>
                <div class="row align-content-center d-block">
                  <p class="mt-lg-5 text-center">
                    <a href="" v-scroll-to="`#packages`" class="mr-l-5 mr-sm-2 mr-md-4">Ghana</a>
                    <a href="" v-scroll-to="`#perks`" class="mr-l-5 mr-sm-2 mr-md-4">Nigeria</a>
                    <a href="" v-scroll-to="`#workshops`" class="mr-l-5 mr-sm-2 mr-md-4">Ivory Coast</a>
                    <a href="" v-scroll-to="`#reach`" class="mr-l-5 mr-sm-2 mr-md-4">Kenya</a>
                    <a href="" v-scroll-to="`#reach`" class="mr-l-5 mr-sm-2 mr-md-4">Jamaica</a>
                    <a href="" v-scroll-to="`#reach`" class="mr-l-5 mr-sm-2 mr-md-4">United States</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center" id="packages">
            <div class="col-lg-9 col-md-12 col-xs-12 wow fadeInDown animated animated" data-wow-delay="0.3s"
                 style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
              <div class="cta-text">
                <h2 class="section-title wow fadeInUp animated" v-scroll-reveal.reset="{delay : 200}">Packages</h2>
                <h3 class="post-title text-center">Help us make this event a better experience for our attendees</h3>
                <div class="packages-module">
                  <table>
                    <thead>
                      <tr>
                        <th>&nbsp;</th>
                        <th class="font-weight-bold">Gold <br> <span class="price font-weight-light">$ 1000</span></th>
                        <th class="font-weight-bold">Platinum <br> <span class="price font-weight-light">$ 3000</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="" style="max-width: 200px">Branding & logo on site, between sessions, on videos</td>
                        <td>Yes</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Add a slide to the reel between sessions</td>
                        <td>No</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Booth at the exhibition area</td>
                        <td>3sqm</td>
                        <td>9sqm</td>
                      </tr>
                      <tr>
                        <td>HR package</td>
                        <td>No</td>
                        <td>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center scholarship">
            <div class="col-lg-9 col-md-12 col-xs-12">
              <div class="cta-text" v-scroll-reveal.reset="{delay : 200}">
                <h3 class="text-center font-weight-lighter">10 % to Scholarships</h3>
                <div class="">
                  <p>
                    From every package we put 10% directly to our Scholarship Fund - this fund will be used to sponsor individuals or students from underrepresented groups in tech, to travel and attend the conference.
                    A portion of it is also used to secure <strong>tools</strong> and <strong>digital skills training courses</strong> for some attendee.
                  </p>
                  <p>Your support can really make a difference!</p>
                </div>
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
      extPageOptions: {
        headerHeight: 350
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
  @import "../assets/css/colors";

  .post-title {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 15px;
    line-height: 30px;
  }
  .sponsorship-nav{
    a{
      color: #fff;
      font-weight: 600;
      &:hover{
        color: $accent-color;
      }
    }
  }
  .single-intro-text {
    text-align: center;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    i {
      margin-bottom: 20px;
      position: relative;
      top: unset;
      left: unset;
      color: #000;
    }

    h3 {
      font-size: 64px;
      margin-bottom: 20px;
      margin-top: 30px;

      span {
        font-size: 34px;
      }
    }
  }
  .packages-module{
    table{
      width: 80%;
      margin: 0 auto;
      thead{
        text-align: center;
        th{
          /*font-size: 20px;*/
        }
        .price{
          font-size: 24px;
        }
      }
      tr{
        height: 50px;
        td, th{
          &:nth-child(2), &:nth-child(3){
            background-color: $accent-color-light;
            text-align: center;
            min-width: 170px;
            font-weight: 600;
          }
          &:nth-child(3){
            background-color: $accent-color;
          }
        }
      }

      th, td{
        padding: 10px 5px;
      }
    }
  }
  .scholarship{
    margin: 20px auto;
    padding: 30px 5px;
    max-width: 70%;
    background-image: $accent-gradient;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    h3{

    }
  }
</style>
