<template>
  <header id="home">
    <!-- Navbar Start -->
    <nav-bar></nav-bar>
    <!-- Navbar End -->

    <!-- Hero Area Start -->
    <div id="hero-area" class="hero-area-bg  container-full-bg">
      <!--        <div class="overlay"></div>-->
      <div class="container flex-row flex">
        <div class="row justify-content-center main-actions">
          <div class=" col-lg-9 col-sm-12">
            <div class="contents page-header-inner text-center" v-if="!pastEvent">
              <div class="banner-btn">
                <a href="https://egotickets.com/events/js-camp-2019" class="btn btn-common">Get Ticket</a>
                <a href="http://bit.ly/jsc19-speak" class="btn btn-common">Apply As Speaker</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero Area End -->

  </header>
</template>
<script>
import NavBar from '../components/Nav'

export default {
  name      : 'header-wrap',
  components: { NavBar },
  props : ['year', 'pastEvent'],
  computed : {}
}
</script>
<style scoped lang="scss">
  @import "../assets/css/colors";
  /* ==========================================================================
3. Hero SECTIONS
========================================================================== */
  .hero-area-bg {
    background: url('../assets/img/background/js-camp-19-b.png') no-repeat;

    background-attachment: fixed;
    background-size: cover;
    background-position: center center;
  }

  #hero-area {
    color: #fff;
    overflow: hidden;
    position: relative;
    min-height: 690px;

    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0);
    }

    .contents {
      /*padding: 160px 20px 180px;*/

      /*.icon {
        margin-bottom: 30px;

        i {
          background-image: $accent-gradient;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 50px;
        }
      }
      .banner-info {
        font-size: 18px;
        font-style: italic;
        margin-bottom: 22px;
        line-height: 24px;
        color: #fff;
      }

      .head-title {
        color: #fff;
        font-size: 48px;
        line-height: 48px;

        text-transform: uppercase;
        font-weight: 700;
        margin: 85px 0;
      }

      .banner-desc {
        font-size: 17px;
        font-weight: 400;
        color: #fff;
        line-height: 30px;
        margin-bottom: 30px;
        padding: 0 70px;
      }*/

      .btn {
        margin: 0 10px 0;
        font-size: 16px;
        padding: 12px 40px;
        text-transform: uppercase;
      }
    }

  }
  .main-actions{
    margin-top: 45%;
  }
  .container-full-bg {
    display: flex;

  }
</style>
