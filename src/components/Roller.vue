<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(item, index) in sliders"
           :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
    </div>
    <!-- Add Pagination -->
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {

  props: {

  },
  data () {
    return {
      sliders: [{
        img: "../static/img/1.jpg"
      }, {
        img: "../static/img/2.jpg"
      }, {
        img: "../static/img/3.jpg"
      }, {
        img: "../static/img/4.jpg"
      }, {
        img: "../static/img/5.jpg"
      }]
    }
  },
  computed: {

  },
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,//无限循环
      autoplay: true,//自动循环
      direction: 'vertical',//纵向
      slidesPerView: 3,//最多存在几个面
      spaceBetween: 0,//间隔
      speed: 100,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 600,//1秒切换一次
      },
    });
  },
  methods: {

  }
}
</script>
<style scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 200px;
  height: 350px;
  border-radius: 5px;
}
.swiper-slide {
  text-align: center;
  font-size: 10px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.swiper-slide:not(.swiper-slide-active) {
  transform: scale(0.9);
}
</style>