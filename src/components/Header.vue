<template>
  <nav class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <i class="lni-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto w-100 justify-content-end">
          <li class="nav-item active">
            <a class="nav-link" href="#header-wrap">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#schedules">
              schedules
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#speaker">
              Speakers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">
              Gallery
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#sponsors">
              Sponsors
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#google-map-area">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name : "NavBar"
  }
</script>

<style scoped lang="scss">
  .search-inp-li
  {
    position: relative;
    z-index: 1;
    label
    {
      height: 20px;
      width: 30px;
      background: transparent;
      /*pointer-events: none;*/

      position: absolute;
      top: -4px;
      left: -8px;
      cursor: pointer;
      z-index: 5;

      &:hover
      {
        /*transform: scale(1.1);*/
      }
      &:focus::before
      {
        top: 75%;
        left: 95%;
      }

    }


    input.search-inp
    {
      background-image: url("../../static/img/musica-searcher.svg");
      background-size: 11px;
      background-position-y: 51%;
      transition: all .3s ease;
      width: 5px;
      height: 5px;
      padding: 5px;
      border: 2px solid yellow;
      z-index: 3;
      &:hover
      {
        /*transform: scale(1.05);*/
      }



      &:focus
      {
        border-color: yellow !important;
        padding-left: 25px;
        padding-right: 15px;
        & + label::before
        {
          /*top: 150px;*/
          /*left: 300px;*/
          display: none;
        }
      }

      &:hover+label
      {
        &::after
        {
          transform: scale(1.5);
        }
      }
      & + label
      {
        position: relative;
        z-index: 1;
        display: block;
        top: -18px;
        &::after
        {
          content: '';
          display: block;
          width: 26px;
          height: 26px;
          -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;
          background-color: rgba(17, 15, 17, 0.13);
          position: absolute;
          left: 2px;
          top: -4px;
          transform: scale(0);
          z-index: 1;
          transition: all .3s ease-in-out;
        }


        &::before
        {
          content: "";
          height: 2px;
          width: 10px;
          background: yellow;
          display: block;
          transform: rotate(45deg);
          position: absolute;
          z-index: 2;
          /*top: 100%;*/
          /*left: 75%;*/
          top: 17px;
          left: 18px;
          transition: all .3s ease-in-out;
        }
      }

      &:focus
      {
        height: 28px;
        width: 200px;
        &+label
        {
          &::after
          {
            display: none;
          }
        }
      }
    }
  }

</style>
