<template>
  <footer>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-12 col-xs-12">
          <div class="subscribe-inner wow fadeInDown" data-wow-delay="0.3s">
            <h2 class="subscribe-title">Get Fresh Updates</h2>
            <form class="text-center form-inline">
              <input class="mb-20 form-control" title="" name="email" placeholder="Enter Your Email Here">
              <button type="submit" class="btn btn-common sub-btn" data-style="zoom-in" data-spinner-size="30" name="submit"
                      id="submit">
                <span class="ladda-label"><i class="lni-check-box"></i> Subscribe</span>
              </button>
            </form>
          </div>
          <div class="social-icons-footer">
            <ul>
              <li class="facebook"><a target="_blank" href="3"><i class="lni-facebook-filled"></i></a></li>
              <li class="twitter"><a target="_blank" href="3"><i class="lni-twitter-filled"></i></a></li>
            </ul>
          </div>
          <div class="site-info">
            <p>Copyright © {{community.name}}. {{year}}&mdash;</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name : 'footer-section',
  data () {
    return {
      year  : new Date().getFullYear(),
      ...mapState(['events'])
    }
  },
  computed : {
    ...mapGetters(['community'])
  }
}
</script>
