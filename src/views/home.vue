<template>
  <!--The starting div-->
  <div id="app" class="blk fp global-host ys rltv">
    <!-- Header Area wrapper SECTION Starts -->
    <header id="header-wrap">
      <!-- Navbar Start -->
      <nav-bar></nav-bar>
      <!-- Navbar End -->

      <!-- Hero Area Start -->
      <div id="hero-area" class="hero-area-bg">
        <div class="overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-9 col-sm-12">
              <div class="contents text-center">
                <div class="icon">
                  <i class="lni-mic"></i>
                </div>
                <h2 class="head-title">{{community.name}} {{year}}</h2>
                <div class="banner-btn">
                  <a href="#" class="btn btn-common">Get Ticket</a>
                  <a href="#" class="btn btn-common">Apply As Speaker</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Hero Area End -->

    </header>
    <!-- Header Area wrapper End -->

    <!-- Time left Count Bar SECTION Start -->
    <section id="count">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="count-wrapper text-center">
              <div class="time-countdown wow fadeInUp" data-wow-delay="0.2s">
                <div id="clock" class="time-count">
                  <div class="time-entry days"><span>{{clock.days}}</span> <b>:</b> Days</div>
                  <div class="time-entry hours"><span>{{clock.hours}}</span> <b>:</b> Hours</div>
                  <div class="time-entry minutes"><span>{{clock.minutes}}</span> <b>:</b> Minutes</div>
                  <div class="time-entry seconds"><span>{{clock.seconds}}</span> Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                  <p>JS Camp is the largest gathering of JavaScript developers in Ghana sharing knowledge and growing the web development community.</p>
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
    <!--<div class="ready-to-play">
      <video id="bgvid" class="stop" loop>
        <source src="../assets/video/event.webm" type="video/mp4">
      </video>
      <div id="polina" class="video-text">
        <div class="tb-t">
          <div class="tb-c">
            <div class="polina"><button><i class='lni-play'></i></button></div>
          </div>
        </div>
      </div>
    </div>-->
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
              <li><span><b>Location</b> {{events.years[year].address.location}}</span></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i class="lni-calendar"></i>
              </li>
              <li><span><b>Date & Time</b>{{events.years[year].startTime}} - {{events.years[year].endTime}}, 31, Aug</span></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i class="lni-mic"></i>
              </li>
              <li><span><b>Speakers</b> {{events.years[year].speakers.length}} Professionals</span></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i class="lni-user"></i>
              </li>
              <li><span><b>Seats</b> {{events.years[year].seats.length}} People</span></li>
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
    <section id="schedules" class="schedule section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Event Schedules</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <!--<li class="nav-item">
                <a class="nav-link active" id="monday-tab" data-toggle="tab" href="#monday" role="tab" aria-controls="monday" aria-expanded="true">
                  <div class="item-text">
                    <h4>Day 01</h4>
                    <h5>14 February 2020</h5>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="tuesday-tab" data-toggle="tab" href="#tuesday" role="tab" aria-controls="tuesday">
                  <div class="item-text">
                    <h4>Day 02</h4>
                    <h5>15 February 2020</h5>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="wednesday-tab" data-toggle="tab" href="#wednesday" role="tab" aria-controls="wednesday">
                  <div class="item-text">
                    <h4>Day 03</h4>
                    <h5>16 February 2020</h5>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="thursday-tab" data-toggle="tab" href="#thursday" role="tab" aria-controls="thursday">
                  <div class="item-text">
                    <h4>Day 04</h4>
                    <h5>17 February 2020</h5>
                  </div>
                </a>
              </li>-->
            </ul>
          </div>
          <div class="col-12">
            <div class="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
              <div class="schedule-tab-content col-12 clearfix">
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                    <div id="accordio">
                      <div class="card">
                        <div id="headingOne">
                          <div class="schedule-slot-time">
                            <span> 9.30 - 10.30 AM</span>
                            Workshop
                          </div>
                          <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <div class="images-box">
                              <img class="img-fluid" src="../assets/img/speaker/speakers-1.jpg" alt="">
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 class="name">David Warner</h5>
                          </div>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                          <div class="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                            <div class="location">
                              <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                    <div id="accordion2">
                      <div class="card">
                        <div id="headingOne1">
                          <div class="schedule-slot-time">
                            <span> 1.30 - 2.30 AM</span>
                            Workshop
                          </div>
                          <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                            <div class="images-box">
                              <img class="img-fluid" src="../assets/img/speaker/speakers-2.jpg" alt="">
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 class="name">David Warner</h5>
                          </div>
                        </div>
                        <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne1" data-parent="#accordion2">
                          <div class="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                            <div class="location">
                              <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div id="headingTwo2">
                          <div class="schedule-slot-time">
                            <span> 9.30 - 10.30 AM</span>
                            Workshop
                          </div>
                          <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                            <div class="images-box">
                              <img class="img-fluid" src="../assets/img/speaker/speakers-1.jpg" alt="">
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 class="name">David Warner</h5>
                          </div>
                        </div>
                        <div id="collapseTwo2" class="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                          <div class="card-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet blanditiis?</p>
                            <div class="location">
                              <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Schedule Section End -->

    <!-- Speakers SECTION Start -->
    <Speakers v-bind:year="year" />
    <!-- Speakers Section End -->

    <!-- Gallery SECTION Start -->
    <Gallery :galleryData="galleryData"/>
    <!-- Gallery Section End -->

    <!-- Event Slides SECTION Start -->
    <section id="event-up" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Who Attend</h2>
              <p class="wow fadeInDown" data-wow-delay="0.2s">JS Camp is basically for everyyone. From the skilled to the curious</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-2 col-md-6 col-xs-12">
            <div class="event-item">
              <img class="img-fluid" src="../assets/img/event/img1.jpg" alt="">
              <div class="overlay-text">
                <div class="content">
                  <h3>Frontend Developers</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-xs-12">
            <div class="event-item">
              <img class="img-fluid" src="../assets/img/event/img2.jpg" alt="">
              <div class="overlay-text">
                <div class="content">
                  <h3>Backend Developers</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-xs-12">
            <div class="event-item">
              <img class="img-fluid" src="../assets/img/event/img3.jpg" alt="">
              <div class="overlay-text">
                <div class="content">
                  <h3>Mobile Developer</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-xs-12">
            <div class="event-item">
              <img class="img-fluid" src="../assets/img/event/img4.jpg" alt="">
              <div class="overlay-text">
                <div class="content">
                  <h3>Dev OPs</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-xs-12">
            <div class="event-item">
              <img class="img-fluid" src="../assets/img/event/img3.jpg" alt="">
              <div class="overlay-text">
                <div class="content">
                  <h3>UI/UX Designers</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-xs-12">
            <div class="event-item">
              <img class="img-fluid" src="../assets/img/event/img4.jpg" alt="">
              <div class="overlay-text">
                <div class="content">
                  <h3>Hiring Managers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <a href="#" class="btn btn-common">More Event</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Event Slides Section End -->

    <!-- Ticket Pricing Area Start -->
    <!--<section id="pricing" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Ticket Pricing</h2>
              <p class="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an <br> cule dicta iriure at phaedrum.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xa-12 mb-3">
            <div class="price-block-wrapper wow fadeInLeft" data-wow-delay="0.2s">
              <div class="colmun-title">
                <h5>Basic Pass</h5>
              </div>
              <div class="price">
                <h2>$29</h2>
                <span>Per Day</span>
              </div>
              <div class="pricing-list">
                <ul>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Entrance</span></li>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Coffee Break</span></li>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Lunch on all days</span></li>
                  <li><i class="lni-close"></i><span class="text">Access to all areas</span></li>
                  <li><i class="lni-close"></i><span class="text">Certificate</span></li>
                </ul>
              </div>
              <a href="#" class="btn btn-common">Buy Ticket</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xa-12 mb-3">
            <div class="price-block-wrapper active wow fadeInUp" data-wow-delay="0.3s">
              <div class="colmun-title">
                <h5>Standard Pass</h5>
              </div>
              <div class="price">
                <h2>$40</h2>
                <span>Per Day</span>
              </div>
              <div class="pricing-list">
                <ul>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Entrance</span></li>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Coffee Break</span></li>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Lunch on all days</span></li>
                  <li><i class="lni-close"></i><span class="text">Access to all areas</span></li>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Certificate</span></li>
                </ul>
              </div>
              <a href="#" class="btn btn-common">Buy Ticket</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xa-12 mb-3">
            <div class="price-block-wrapper wow fadeInRight" data-wow-delay="0.4s">
              <div class="colmun-title">
                <h5>Premium Pass</h5>
              </div>
              <div class="price">
                <h2>$68</h2>
                <span>Per Day</span>
              </div>
              <div class="pricing-list">
                <ul>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Entrance</span></li>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Coffee Break</span></li>
                  <li><i class="lni-close"></i><span class="text">Lunch on all days</span></li>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Access to all areas</span></li>
                  <li><i class="lni-check-mark-circle"></i><span class="text">Certificate</span></li>
                </ul>
              </div>
              <a href="#" class="btn btn-common">Buy Ticket</a>
            </div>
          </div>
        </div>
      </div>
    </section>-->
    <!-- Ticket Pricing Area End -->

    <!-- Blog SECTION Start -->
    <!--<section id="blog" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Latest News</h2>
              <p class="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an <br> cule dicta iriure at phaedrum.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="blog-item">
              <div class="blog-image">
                <a href="#">
                  <img class="img-fluid" src="../assets/img/blog/img-1.jpg" alt="">
                </a>
              </div>
              <div class="descr">
                <div class="icon">
                  <i class="lni-image"></i>
                </div>
                <h3 class="title">
                  <a href="#">
                    Learn Something New
                  </a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipsing elit, sed do eiusmodincididunt ut labore et dolore</p>
              </div>
              <div class="meta-tags">
                <span class="date"><i class="lni-calendar"></i> Jan 20, 2020</span>
                <span class="comments"><i class="lni-comment-alt"></i> <a href="#"> 0 Comment</a></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="blog-item">
              <div class="blog-image">
                <a href="#">
                  <img class="img-fluid" src="../assets/img/blog/img-2.jpg" alt="">
                </a>
              </div>
              <div class="descr">
                <div class="icon">
                  <i class="lni-arrow-right"></i>
                </div>
                <h3 class="title">
                  <a href="#">
                    Call for sponsors
                  </a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipsing elit, sed do eiusmodincididunt ut labore et dolore</p>
              </div>
              <div class="meta-tags">
                <span class="date"><i class="lni-calendar"></i> Jan 20, 2020</span>
                <span class="comments"><i class="lni-comment-alt"></i> <a href="#"> 0 Comment</a></span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12">
            <div class="blog-item">
              <div class="blog-image">
                <a href="#">
                  <img class="img-fluid" src="../assets/img/blog/img-3.jpg" alt="">
                </a>
              </div>
              <div class="descr">
                <div class="icon">
                  <i class="lni-camera"></i>
                </div>
                <h3 class="title">
                  <a href="#">
                    Elon Musk joining the event
                  </a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipsing elit, sed do eiusmodincididunt ut labore et dolore</p>
              </div>
              <div class="meta-tags">
                <span class="date"><i class="lni-calendar"></i> Jan 20, 2020</span>
                <span class="comments"><i class="lni-comment-alt"></i> <a href="#"> 0 Comment</a></span>
              </div>
            </div>
          </div>
          <div class="col-12 text-center">
            <a href="#" class="btn btn-common">View all Blog</a>
          </div>
        </div>
      </div>
    </section>-->
    <!-- Blog Section End -->

    <!--call for Sponsorship and pricing SECTION-->
    <Sponsors/>
    <!-- Sponsorship and pricing SECTION End -->

    <!-- Sponsors Section Start -->
    <section id="sponsors" class="section-padding">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Sponsors</h2>
              <p class="wow fadeInDown" data-wow-delay="0.2s">JS Camp Appreciates sponsorship from the following partners. They make it possible</p>
            </div>
          </div>
        </div>
        <div class="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
          <div class="col-lg-12">
            <div class="sponsors-logo text-center">
              <a v-for="sponsor in events.years[year].sponsors" href="">
                <img :src="'../assets/img/sponsors/' + sponsor.logo" :alt="sponsor.name">
              </a>
            </div><!-- sponsors logo end-->
          </div>
        </div>
      </div>
    </section>
    <!-- Sponsors Section End -->

    <!-- Contact Us SECTION -->
    <section id="contact-map" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h2 class="section-title wow fadeInUp" data-wow-delay="0.2s">Contact Us</h2>
              <p class="wow fadeInDown" data-wow-delay="0.2s">Need help with anything JS Camp? Let's here it..</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-12 col-xs-12">
            <div class="container-form wow fadeInLeft" data-wow-delay="0.2s">
              <div class="form-wrapper">
                <form role="form" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                  <div class="row">
                    <div class="col-md-6 form-line">
                      <div class="form-group">
                        <input type="text" class="form-control" id="name" name="email" placeholder="First Name" required data-error="Please enter your name">
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-6 form-line">
                      <div class="form-group">
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your Email">
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12 form-line">
                      <div class="form-group">
                        <input type="tel" class="form-control" id="msg_subject" name="subject" placeholder="Subject" required data-error="Please enter your message subject">
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea class="form-control" rows="4" id="message" name="message" required data-error="Write your message"></textarea>
                      </div>
                      <div class="form-submit">
                        <button type="submit" class="btn btn-common" id="form-submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>  Send Message</button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Us Section End -->

    <!-- Map SECTION Start -->
    <section id="google-map-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!--FIXME Set Image to Real Google Maps Image to ADC-->
            <!--<object style="border:0; height: 450px; width: 100%;" data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.15480778837!2d-77.44908382752939!3d38.953293865566366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6775cb22a9fa1341!2sThe+Firkin+%26+Fox!5e0!3m2!1sen!2sbd!4v1543773685573"></object>-->
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

    <footer-section ></footer-section>

    <!-- Go to Top Link -->
    <a href="#" class="back-to-top">
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

  import { mapGetters } from 'vuex';
  import Speakers       from "../components/speakers";
  import NavBar         from "../components/Header";
  import Gallery        from "../components/Gallery";
  import Sponsors       from "../components/Sponsors";

  export default {
    name : "home",
    components : { Sponsors, Gallery, NavBar, Speakers   },
    props      : [],
    data()
    {
      return {
        title : 'Kobina George Koomson, Welcome',
        year : '2019',
        galleryData : {
          images : [{ name : 'Group Photo', url : 'grp-ph-nc.jpg'}],
          selected : null
        },
        clock : {
          days : 0,
          hours : 0,
          minutes : 0,
          seconds : 0
        },
        //year  : new Date().getFullYear()
      }
    },
    methods    : {
      eventClockTimer() {

        let timerDifference = (new Date('2019-08-31')).getTime() - (new Date()).getTime(),
            floor = Math.floor;

        let seconds = floor(timerDifference / 1000);
        let minutes = floor(seconds / 60);
        let hours = floor(minutes / 60);

        this.$data.clock = {
          days : floor(hours / 24),
          hours : hours % 24,
          minutes : minutes % 60,
          seconds : floor(seconds) % 60
        };

        seconds = minutes = hours = null;

        setTimeout(this.eventClockTimer, 1000);
      }
    },
    computed   : {
      ...mapGetters(['community', 'events'])
    },
    mounted() {
      console.log('mounted');
      this.eventClockTimer();
    }
  }
</script>

