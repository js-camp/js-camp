<template>
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
            <li class="nav-item">
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
            </li>
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
                        <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                             aria-controls="collapseOne">
                          <div class="images-box">
                            <img class="img-fluid" src="../assets/img/speaker/speakers-1.jpg" alt="">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at
                            commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure
                            libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa
                            magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet
                            blanditiis?</p>
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
                        <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false"
                             aria-controls="collapseTwo2">
                          <div class="images-box">
                            <img class="img-fluid" src="../assets/img/speaker/speakers-2.jpg" alt="">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne1" data-parent="#accordion2">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at
                            commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure
                            libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa
                            magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet
                            blanditiis?</p>
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
                        <div class="collapsed card-header" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false"
                             aria-controls="collapseOne1">
                          <div class="images-box">
                            <img class="img-fluid" src="../assets/img/speaker/speakers-1.jpg" alt="">
                          </div>
                          <h4>Web Design Principles and Best Practices</h4>
                          <h5 class="name">David Warner</h5>
                        </div>
                      </div>
                      <div id="collapseTwo2" class="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                        <div class="card-body">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minima dolores rerum maiores qui at
                            commodi quas, reprehenderit eius consectetur quae magni molestias veniam, provident illum facere iure
                            libero asperiores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam earum nihil ex ipsa
                            magni eligendi fugiat assumenda suscipit, accusantium, necessitatibus reiciendis odit sed, vero amet
                            blanditiis?</p>
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
</template>
<script>
export default {
  name: 'event-schedule'
}
</script>
