<template>
  <section id="blog" class="section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-3 ml-lg-2 mr-lg-2 col-md-6 col-sm-12 col-xs-12">
          <div class="blog-item">
            <div class="blog-image">
              <router-link to="/sponsorship">
                <img class="img-fluid" src="../assets/img/blog/img-2.jpg" alt="">
              </router-link>
            </div>
            <div class="descr">
              <router-link to="/sponsorship">
                <div class="icon">
                  <i class="lni-arrow-right"></i>
                </div>
              </router-link>
              <h3 class="title">
                <router-link to="/sponsorship">
                  Call for sponsors
                </router-link>
              </h3>
              <p>Click on here if you want to support this event</p>
            </div>
            <div class="meta-tags">
              <router-link to="/sponsorship" class="btn btn-common">Support Us</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-3 ml-lg-2 mr-lg-2 col-md-6 col-sm-12 col-xs-12">
          <div class="blog-item">
            <div class="blog-image">
              <a href="https://egotickets.com/events/js-camp-2019">
                <img class="img-fluid" src="../assets/img/blog/img-2.jpg" alt="">
              </a>
            </div>
            <div class="descr">
              <h3 class="title">
                <a href="https://egotickets.com/events/js-camp-2019" class="">
                  Want to speak at the event? Apply here
                </a>
              </h3>
            </div>
            <div class="meta-tags">
              <a href="https://bit.ly/jsc19-speak" class="btn btn-common">Apply As Speaker</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 ml-lg-2 mr-lg-2 col-md-6 col-sm-12 col-xs-12">
          <div class="blog-item">
            <div class="blog-image">
              <a href="https://egotickets.com/events/js-camp-2019">
                <img class="img-fluid" src="../assets/img/blog/img-2.jpg" alt="">
              </a>
            </div>
            <div class="descr">
              <h3 class="title">
                <a href="https://egotickets.com/events/js-camp-2019" class="">
                  This Event is FREE for everyone to attend
                </a>
              </h3>
            </div>
            <div class="meta-tags">
              <a href="https://egotickets.com/events/js-camp-2019" class="btn btn-common">Get Ticket</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name : 'call-for-sponsors'
}
</script>
