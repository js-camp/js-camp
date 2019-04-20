<template>
  <div class="ready-to-play">
    <video id="bgvid" class="stop" loop>
      <source src="../assets/video/event.webm" type="video/mp4">
    </video>
    <div id="polina" class="video-text">
      <div class="tb-t">
        <div class="tb-c">
          <div class="polina">
            <button><i class='lni-play'></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'event-preview-video'
}
</script>
