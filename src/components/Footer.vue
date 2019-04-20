<template>
  <footer class="ctr blk fdg-h">
    <div class="footer-above  pdlr50 pdt20">
      <div class="container m0a">
        <div class="row fp ctr">
          <div class="footer-col col-4">
            <span class="ti-location-pin blk icon-large tz-icon-color mb10"></span>
            <h3 class=""> Location</h3>
            <p>{{address.location}}</p>
          </div>
          <div class="footer-col col-4">
            <span class="ti-mobile blk icon-large tz-icon-color mb10"></span>
            <h3>Call Me!</h3>
            <p>(M) {{address.phone}}</p>
          </div>
          <div class="footer-col col-4">
            <span class="ti-email blk icon-large tz-icon-color mb10"></span>
            <h3>Email</h3>
            <p>{{address.email}}</p>
          </div>
          <div class="footer-col col-4">
            <span class="ti-time blk icon-large tz-icon-color mb10"></span>
            <h3>Working hours</h3>
            <p>Mon to Fri - {{address.workingHours.weekdays}}</p>
            <p>Sat to Sun - {{address.workingHours.weekends}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fph h80 pd25 xud clearfix">
      <div class="container fph">
        <div class="fph7 fl pdlr10">
          <h1 class="alt-font bld6 fts16 iblk tz-text pdb5 mr10 xs-width-100">Subscribe to my newsletter</h1>
          <div class="fpv fph6 iblk subscribe">
            <form action="javascript:void(0)" method="post" class="rltv fp">
              <input class="medium-input tt-n fph m0 pd10" data-email="required" placeholder="Your email address" id="email"
                     name="email" type="text">
              <a class="default-submit title-small text-bitter-sweet" href="#">
                <i class="fa fa-long-arrow-right tz-icon-color"></i>
              </a>
            </form>
          </div>
        </div>
        <div class="fph3 pdt10 iblk icon-extra-small ctr social pdt5">
          <a class="m4p" href="https://github.com/archX3" target="_blank"><i
            class="text-white fa fa-github tz-icon-color"></i></a>
          <a class="m4p" href="https://www.linkedin.com/in/kobina-koomson/" target="_blank"><i
            class="text-white fa fa-linkedin tz-icon-color"></i></a>
          <a class="m4p" href="https://www.behance.net/georgeranc8053" target="_blank"><i
            class="text-white fa fa-behance tz-icon-color"></i></a>

          <a class="m4p" href="https://twitter.com/georgeranch" target="_blank"><i
            class="text-white fa fa-twitter tz-icon-color"></i></a>
          <!--<a class="m4p" href="https://plus.google.com/102834295247716950853"><i class="text-white fa fa-google-plus tz-icon-color"></i></a>-->
          <a class="m4p" href="https://www.facebook.com/koomson.george" target="_blank"><i
            class="text-white fa fa-facebook tz-icon-color"></i></a>

          <a class="m4p" href="https://www.instagram.com/archx3/" target="_blank"><i
            class="text-white fa fa-instagram tz-icon-color"></i></a>
        </div>

      </div>
    </div>
    <div class="footer-below  pdlr50 pdb20">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            Copyright © Kobina G. Koomson. {{year}}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
   export default {
      name : "Footer",
     data(){
       return {
       }
     },
     computed : {
       ...mapGetters(['address'])
     },
     props : ['year']
   }
</script>

