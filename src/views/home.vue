<template>
  <!--The starting div-->
  <div id="app" class="blk fp global-host ys rltv">
    <!-- Header Area wrapper SECTION Starts -->

    <header-wrap :year="year" :past-event="pastEvent"/>

    <!-- Header Area wrapper End -->

    <!-- Time left Count Bar SECTION Start -->
    <count-down-clock :date="events.years[year].date" v-if="!pastEvent" />
    <!-- Time left Count Bar End -->

    <!-- About SECTION Start -->
    <section id="about" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div class="img-thumb">
              <img class="img-fluid" src="../assets/img/about/abt-bg.png" alt="">
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-xs-12">
            <div class="about-content">
              <div>
                <div class="about-text">
                  <h2>About JS Camp</h2>
                  <p>JS Camp is the largest gathering of JavaScript developers in Ghana.
                    It's a one day single track event where people, from seasoned experts to beginners,
                    meet to share knowledge and grow the web development community.</p>
                </div>
                <ul class="stylish-list mb-3">
                  <li><i class="lni-check-mark-circle"></i>Networking Sessions</li>
                  <li><i class="lni-check-mark-circle"></i>Meet New Professional Faces</li>
                  <li><i class="lni-check-mark-circle"></i>Get Inspired by Amazing Speakers</li>
                  <li><i class="lni-check-mark-circle"></i>Panel Discussion</li>
                  <li><i class="lni-check-mark-circle"></i>Dev Swag</li>
                </ul>
                <!--                <a class="btn btn-common" href="#">Learn More</a>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section End -->

    <!-- Video Section Start -->
    <!--    <event-preview-video/>-->
    <!-- Video Section End -->

    <!-- Information Bar SECTION Start -->
    <section id="information-bar">
      <div class="container">
        <div class="row inforation-wrapper">
          <div class="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i class="lni-map-marker"></i>
              </li>
              <li>
                <span><b>Location</b>
                  {{events.years[year].address.venue}} <br>
                  {{events.years[year].address.location}}</span></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i class="lni-calendar"></i>
              </li>
              <li><span><b>Date & Time</b>
                {{events.years[year].startTime}} - {{events.years[year].endTime}}<br>
              {{events.years[year].date}}
              </span></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i class="lni-mic"></i>
              </li>
              <li><span><b>Speakers</b> {{events.years[year].speakers.length}}+ Professionals</span></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i class="lni-user"></i>
              </li>
              <li><span><b>Seats</b> {{events.years[year].seats}}+ People</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Information Bar End -->

    <!-- intro (Why you should Attend) SECTION Start -->
    <section id="intro" class="intro section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Why You Should Attend?</h2>
              <!--              <p class="wow fadeInDown" data-wow-delay="0.2s"></p>-->
            </div>
          </div>
        </div>
        <div class="row intro-wrapper">
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-microphone"></i>
              <h3>Great Speakers</h3>
              <p>
                Get to learn from a wonderful line up of people with lots of experience in web development.
              </p>
              <span class="count-number">01</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text">
              <i class="lni-users"></i>
              <h3 class="ts-title">New People</h3>
              <p>
                Know more people. Make new friends you can share ideas and work on projects with.
              </p>
              <span class="count-number">02</span>
            </div>
            <div class="border-shap left"></div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-bullhorn"></i>
              <h3>Global Event</h3>
              <p>
                Meet Speakers and people converged from different cultures and backgrounds.
              </p>
              <span class="count-number">03</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-heart"></i>
              <h3>Get Inspired</h3>
              <p>
                Get inspired by the amazing experiences and opportunities people have to share.
              </p>
              <span class="count-number">04</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-cup"></i>
              <h3>Networking Session</h3>
              <p>
                Get to interact with developers and other professionals with interest in software development.
              </p>
              <span class="count-number">05</span>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="single-intro-text mb-70">
              <i class="lni-clipboard"></i>
              <h3>Job Board</h3>
              <p>
                See listings of diverse and lucrative developer job vacancies.
              </p>
              <span class="count-number">06</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- intro Section End -->

    <!-- Counter SECTION Start-->
    <section class="counter-section section-padding">
      <div class="container">
        <div class="row">
          <!-- Counter Item -->
          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-mic"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">{{events.years[year].speakers.length}}</div>
                <p>Spekers</p>
              </div>
            </div>
          </div>
          <!-- Counter Item -->
          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-bulb"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">{{events.years[year].seats}}</div>
                <p>Seats</p>
              </div>
            </div>
          </div>
          <!-- Counter Item -->
          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-briefcase"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">{{events.years[year].sponsors.length}}</div>
                <p>Sponsors</p>
              </div>
            </div>
          </div>
          <!-- Counter Item -->
          <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
            <div class="counter">
              <div class="icon">
                <i class="lni-coffee-cup"></i>
              </div>
              <div class="counter-content">
                <div class="counterUp">
                  {{events.years[year].presentations.length
                  + events.years[year].lighteningTalks.length
                  + events.years[year].panelDiscussions.length }}
                </div>
                <p>Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Counter Area End-->

    <!-- Schedule SECTION Start -->
<!--    <event-schedule/>-->
    <!-- Schedule Section End -->

    <!-- Speakers SECTION Start -->
    <Speakers v-bind:year="year"/>
    <!-- Speakers Section End -->

    <!-- Gallery SECTION Start -->
    <Gallery />
    <!-- Gallery Section End -->

    <!-- Event Slides SECTION Start -->
    <section id="event-up" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Who Can Attend</h2>
              <p class="wow fadeInDown" data-wow-delay="0.2s">JS Camp is basically for everyone. From the skilled to the curious</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2 col-md-6 col-xs-12"
               v-for="(attendeeType, index) in attendeeTypes"
               :key="attendeeType.name"
               v-scroll-reveal.reset="{delay : 200 + (index * 150)}">
            <div class="event-item">
              <img class="img-fluid" :src="`/img/event/${'img1.jpg'}`" alt="">
              <div class="overlay-text">
                <div class="content">
                  <h3>{{attendeeType.name}}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Event Slides Section End -->
    <!--call for Sponsorship and pricing SECTION-->
    <sponsors-and-ticket-section  v-if="!pastEvent"/>
    <!-- Sponsorship and pricing SECTION End -->

    <!-- Sponsors Section Start -->
    <sponsors :year="year"/>
    <!-- Sponsors Section End -->

    <!-- Contact Us SECTION -->
    <!--    <contact-us/>-->
    <!-- Contact Us Section End -->

    <!-- Map SECTION Start -->
<!-- FIXME set the right url for the    -->
    <section id="google-map-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <object style="border:0; height: 450px; width: 100%;" data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1403.963542442263!2d-0.22358266736137394!3d5.565746290338953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bd5cfbe06cb%3A0x4bd95b00aacc9581!2sGhana+Tech+Lab!5e0!3m2!1sen!2sgh!4v1555851842833!5m2!1sen!2sgh"></object>
          </div>
        </div>
      </div>
    </section>
    <!-- Map Section End -->

    <!-- Contact text Start -->
    <section id="contact-text">
      <div class="container">
        <div class="row contact-wrapper">
          <div class="col-lg-4 col-md-5 col-xs-12">
            <ul>
              <li>
                <i class="lni-home"></i>
              </li>
              <li><span>{{community.address.location}}</span></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-3 col-xs-12">
            <ul>
              <li>
                <i class="lni-phone"></i>
              </li>
              <li><span>{{community.address.phone}}</span></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-3 col-xs-12">
            <ul>
              <li>
                <i class="lni-envelope"></i>
              </li>
              <li><span>{{community.address.email}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact text End -->

    <footer-section></footer-section>

    <!-- Go to Top Link -->
    <a href="#" v-scroll-to="" class="back-to-top">
      <i class="lni-chevron-up"></i>
    </a>

    <!--FIXME Preloader is hidden-->
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
import { mapGetters }           from 'vuex'
// import BJumbotron      from 'bootstrap-vue/es/components/jumbotron/jumbotron'
// @ is an alias to /src
import Speakers                 from '@/components/speakers'
import Gallery                  from '../components/Gallery'
import SponsorsAndTicketSection from '../components/SponsorsAndTicketSection'
import Sponsors                 from '../components/Sponsors'
import HeaderWrap               from './HeaderWrap'
import CountDownClock           from './CountDownClock'
// import Wow from '../assets/js/wow'
// import EventSchedule   from './EventSchedule'
// import EventPreviewVideo from './EventPreviewVideo'
// import ContactUs       from '../components/ContactUs'

// import VueAgile from 'vue-agile';

export default {
  name      : 'home',
  components: { CountDownClock, HeaderWrap, Sponsors, SponsorsAndTicketSection, Gallery, Speakers },
  props     : [],
  data () {
    return {
      title       : 'Kobina George Koomson, Welcome',
      // year       : '2019',
      attendeeTypes : [
        { name : 'Frontend Developers', image : 'img1.jpg' },
        { name : 'Backend Developers', image : 'img1.jpg' },
        { name : 'Mobile Developer', image : 'img1.jpg' },
        { name : 'Dev OPs', image : 'img1.jpg' },
        { name : 'UI/UX Designers', image : 'img1.jpg' },
        { name : 'Hiring Managers', image : 'img1.jpg' },
      ]
      // year  : new Date().getFullYear()
    }
  },
  computed  : {
    year () {
      return this.$route.params.year || new Date().getFullYear();
    },
    pastEvent : function () {
      return this.$route.params.year ?  parseInt(this.$route.params.year, 10) < parseInt(new Date().getFullYear(), 10)  : false;
    },
    ...mapGetters(['community', 'events'])
  },
  methods   : {},
  mounted () {
    // this.eventClockTimer();
    // new Wow().init();
  }
}
</script>
