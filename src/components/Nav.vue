<template>
    <nav class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar" :class="{ 'top-nav-collapse' : topNavCollapse}">
    <div class="container">
      <a href="/" class="navbar-brand">
        <div :style="`background-image: url(/img/logos/${ !topNavCollapse ?  logos.whiteBased : logos.accentBased})`"></div>
      </a>
      <!-- Brand and toggle get grouped for better mobile display -->

      <div class="navbar-toggler" :class="{'show' : mobNavShow}"
              @click="handleMobNav" type="button"
              data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
<!--        <i class="lni-menu"></i>-->
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>
      <transition name="collapsing">
        <div class="collapse navbar-collapse" :class="{'show' : mobNavShow}" id="navbarCollapse">
          <ul class="navbar-nav mr-auto w-100 justify-content-end">
            <!--List Items-->
            <li v-for="listItem in navList "
                :key="listItem.name" @click="setActiveNavItem(listItem.name)"
                class="nav-item" :class="{ active : activeNavItem ===  listItem.name }">
<!--              <a class="nav-link" :href="`/${listItem.link}`" ></a>-->
              <router-link tag="a" class="nav-link" :to="`/${year}${listItem.link}`" v-scroll-to="listItem.link">{{listItem.name}}</router-link>
            </li>

            <li @click="setActiveNavItem('coc')" class="nav-item" :class="{ active : activeNavItem ===  'coc' }">
              <router-link tag="a" class="nav-link" :to="'/code-of-conduct'">Code of Conduct</router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
export default {
  name : "NavBar",
  data () {
    return {
      activeNavItem : 'Home',
      navList : this.navListSet || [
        { name : 'Home', link : '#' },
        { name : 'About', link : '#about' },
        // { name : 'Schedules', link : '#schedules' },
        { name : 'Speakers', link : '#speaker' },
        { name : 'Gallery', link : '#gallery' },
        { name : 'Sponsors', link : '#sponsors' },
        // { name : 'Contact', link : '#contact' }
      ],
      topNavCollapse : false,
      mobNavShow : false,
      logos : {
        whiteBased : 'js-camp-19-c-150.png',
        accentBased : 'js-camp-19-cy.png'
      }
    }
  },
  props : ['navListSet'],
  computed : {
    year () {
      return this.$route.year || new Date().getFullYear();
    },
  },
  methods : {
    setActiveNavItem (name) {
      this.activeNavItem = name;
    },
    handleMobNav () {
      this.mobNavShow = !this.mobNavShow;
    },
    handleScroll (e) {
      this.topNavCollapse = window.scrollY > 60;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/colors";
  $transition-all-02-eio: all 0.3s ease-in-out;

  .navbar-brand {
    position: relative;
    padding: 0;
    div {
      min-width: 100px;
      min-height: 100px;
      -webkit-background-size: contain;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      transition: all 400ms ease-in-out;
    }
  }

  .navbar-toggler{
    background: $accent-color !important;
    position: relative;
    width: 40px;
    padding: 10px;
    height: 40px;
    .layer{
      display: block;
      height: 3px;
      width: calc(100% - 15px);
      background-color: #fff;
      pointer-events: none;
      -webkit-border-radius: 1px;
      -moz-border-radius: 1px;
      border-radius: 1px;
      margin-bottom: 5px;
      transition: .4s ease-in-out;
      position: absolute;

      &:nth-child(1) {
        top: 10px;
      }

      &:nth-child(2) {
        top: 18px;
      }

      &:nth-child(3) {
        top: 26px;
      }
      left: 8px;
    }

    &.show {
      .layer {
        /*left: 10px;*/
        top: 18px;
        &:nth-child(1) {
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
          /*left: 0;*/
          /*top: 16px;*/
        }

      }
    }
  }

  .top-nav-collapse {
    z-index: 98;
    top: 0 !important;
    min-height: 50px;
    box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    background: #fff !important;

    .navbar-brand {
      div {
        max-width: 45px;
        min-height: 45px;
      }
    }
    .navbar-brand {
      top: 0;
    }

    .navbar-nav {
      .nav-link {
        color: #212121 !important;
        &:hover {
          color: $accent-color !important;
        }
      }

      li.active a.nav-link {
        color: $accent-color !important;
      }
    }
  }
  .navbar-expand-lg .navbar-toggler {
    background: $accent-gradient;
    border: 1px solid $accent-color;
    /*background-image: #fff;*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    border-radius: 4px;
    cursor: pointer;
  }

  .indigo {
    background: transparent;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    color: #fff;
    font-size: 14px;
    padding: 0 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 40px;
    text-transform: uppercase;
    background: transparent;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .navbar-expand-lg .navbar-nav li > a:before {
    content: '';
    position: absolute;
    top: 19px;
    left: 5%;
    margin-left: -10px;
    width: 15px;
    height: 2px;
    background: $accent-color;
    -webkit-transform: scale3d(0, 1, 1);
    -moz-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
    -webkit-transition: -webkit-transform 0.1s;
    -moz-transition: -webkit-transform 0.1s;
    transition: transform 0.1s;
  }

  .navbar-expand-lg .navbar-nav .active a:before {
    -webkit-transform: scale3d(1, 1, 1);
    -moz-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -moz-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }

  .navbar-expand-lg .navbar-nav li a:hover,
  .navbar-expand-lg .navbar-nav li .active > a,
  .navbar-expand-lg .navbar-nav li a:focus {
    background-image: $accent-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    outline: none;
  }

  .navbar-expand-lg .navbar-nav .nav-link:focus,
  .navbar-expand-lg .navbar-nav .nav-link:hover {
    background-image: $accent-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text !important;
  }

  .navbar {
    padding: 0;
  }

  .navbar li.active a.nav-link {
    background-image: $accent-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text !important;
  }

  .dropdown-toggle::after {
    display: none;
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    display: none;
    position: absolute;
    z-index: 99;
    min-width: 210px;
    background-color: #fff;
    white-space: nowrap;
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    animation: fadeIn 0.4s;
    -webkit-animation: fadeIn 0.4s;
    -moz-animation: fadeIn 0.4s;
    -o-animation: fadeIn 0.4s;
    //-ms-animation: fadeIn 0.4s;
  }

  .dropdown-menu:before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 100%;
    left: 20%;
    margin-left: -5px;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #f5f5f5;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
    position: absolute;
    text-align: left;
    top: 100%;
    border: none;
    animation: fadeIn 0.4s;
    -webkit-animation: fadeIn 0.4s;
    -moz-animation: fadeIn 0.4s;
    -o-animation: fadeIn 0.4s;
    //-ms-animation: fadeIn 0.4s;
    background: #f5f5f5;
  }

  .dropdown .dropdown-menu .dropdown-item {
    width: 100%;
    padding: 12px 20px;
    font-size: 14px;
    color: #212121;
    border-bottom: 1px solid #f1f1f1;
    text-decoration: none;
    display: inline-block;
    float: left;
    clear: both;
    position: relative;
    outline: 0;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    //-ms-transition: all 0.3s ease-in-out;
  }

  .dropdown .dropdown-menu .dropdown-item:last-child {
    border-bottom: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .dropdown .dropdown-menu .dropdown-item:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .dropdown .dropdown-item:focus,
  .dropdown .dropdown-item:hover,
  .dropdown .dropdown-item.active {
    color: $accent-color;
  }

  .dropdown-item.active, .dropdown-item:active {
    background: transparent;
  }

  .fadeInUpMenu {
    -webkit-animation-name: fadeInUpMenu;
    animation-name: fadeInUpMenu;
  }

  /* only small tablets */
  @media (min-width: 768px) and (max-width: 991px) {
    .bg-inverse {
      background: #fff !important;
      box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
    }
    .navbar-brand {
      div {
        background-image: url("/img/logos/js-camp-19-cy.png") !important;
      }
    }
    .navbar-expand-lg .navbar-brand, .navbar-expand-lg .navbar-toggler {
      margin: 0 15px;
    }
    .navbar-nav {
      padding: 5px 15px;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      margin-top: 0;
      margin-bottom: 0;
      padding: 0 40px;
      color: #212121;
    }
  }

  @media (max-width: 991px) {
    .bg-inverse {
      background: #fff !important;
      box-shadow: 0 3px 6px 3px rgba(0, 0, 0, 0.06);
    }
    .navbar-expand-lg .navbar-brand, .navbar-expand-lg .navbar-toggler {
      margin: 0 15px;
    }
    .navbar-nav {
      padding: 5px 15px;
    }
    .navbar-brand {
      div {
        background-image: url("/img/logos/js-camp-19-cy.png") !important;
      }
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      margin-top: 0;
      margin-bottom: 0;
      padding: 0 40px;
      color: #212121;
    }
  }
</style>
