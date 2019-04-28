<template>
  <div class="main">
    <div class="monster">
      <div class="monsterInfo1">
        <p>变异的蘑菇怪人出现了----》</p><br>
        <p>血量：100%</p>
        <p>等级：3</p>
      </div>
      <div class="monsterImg"
           :style="{backgroundImage: 'url(' + monsterImgs+ ')'}"></div>
    </div>
    <div class="my">
      <div class="myImg"
           :style="{backgroundImage: 'url(' + myImgs+ ')'}"></div>
      <div class="Roulette">
        <button>攻击</button>
        <button>逃跑</button>
        <button>道具</button>
        <button>求援</button>
        <button>充值</button>
        <button>什么都不做</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      monsterImgs: "../static/img/1.jpg",
      myImgs: "../static/img/3.jpg"
    }
  },
}
</script>

<style scoped>
@import "../css/csshake.css";
button {
  color: white;
  background-color: black;
  float: left;
  margin-top: 50px;
  margin-left: 5px;
}
.Roulette {
  text-align: left;
}
p {
  height: 20px;
  text-align: right;
}
.monsterInfo1 {
  line-height: 120px;
  color: white;
  height: 49%;
  width: 69%;
  float: left;
}
.monsterInfo2 {
  color: white;
  height: 49%;
  width: 69%;
  float: left;
}
.main {
  background-color: black;
}
.monster {
  width: 100%;
  height: 400px;
}
.monsterImg {
  height: 99%;
  width: 30%;
  float: right;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  /* 抖动↓ */
  -webkit-animation-name: shake-hard;
  -ms-animation-name: shake-hard;
  animation-name: shake-hard;
  -webkit-animation-duration: 100ms;
  -ms-animation-duration: 100ms;
  animation-duration: 100ms;
  -webkit-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -ms-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-delay: 0s;
  -ms-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation-play-state: running;
  -ms-animation-play-state: running;
  animation-play-state: running;
}
.my {
  width: 100%;
  display: flex;
  height: 400px;
}
.myImg {
  width: 30%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.Roulette {
  width: 70%;
  height: 100%;
}
</style>
