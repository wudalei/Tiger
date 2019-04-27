<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>源盛老虎机</h2>
    <div class="machine">
      <div class="title">ฅ'ω'ฅ我是一台没有感情的老虎机ฅ(๑*д*๑)ฅ </div>
      <div class="select-border"></div>
      <div class="machine-box">
        <div class="top-show show">
          <div :class="['top', isUp?'up':'']"></div>
        </div>
        <div class="roller-box">
          <roller :start="startRoller"
                  @start="start"></roller>
        </div>
        <div class="roller-box">
          <roller></roller>
        </div>
        <div class="roller-box">
          <roller></roller>
        </div>
        <div class="down-show show">
          <div :class="['down', isUp?'downMove':'']"></div>
        </div>
      </div>
      <div class="setBtn">
        <div class="left"></div>
        <button @click="startBtn">start</button>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to paly TigerMachine!',
      startRoller: false,
      isUp: false
    }
  },
  methods: {
    startBtn () {
      this.startRoller = true;
      this.isUp = true;
    },
    start (res) {
      this.startRoller = res;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.machine-box {
  position: relative;
  top: 25px;
  display: flex;
  height: 355px;
  width: 600px;
  height: 340;
  background: #f5f5f5;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 7px 2px 6px #000 inset;
}
.select-border {
  border: 2px solid;
  position: absolute;
  top: 400px;
  border-color: red;
  width: 80%;
  z-index: 999;
  left: 123px;
  height: 128px;
}
.machine {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: 2px solid;
  margin: auto;
  width: 700px;
  height: 700px;
  background-size: 100% 100%;
}
.setBtn {
  margin-top: 26px;
  border: 1px solid red;
  height: 43px;
}
.left {
  height: 0px;
  right: 10px;
  top: 20px;
  border: 1px solid red;
  width: 50px;
  position: relative;
  transform: rotate(125deg);
  -o-transform: rotate(125deg);
  -moz-transform: rotate(125deg);
  -webkit-transform: rotate(125deg);
}
.right {
  top: 18px;
  right: -11px;
  height: 0px;
  float: right;
  border: 1px solid red;
  width: 50px;
  position: relative;
  transform: rotate(55deg);
  -o-transform: rotate(55deg);
  -moz-transform: rotate(55deg);
  -webkit-transform: rotate(55deg);
}
.title {
  height: 40px;
  font-size: 33px;
  line-height: 40px;
}
.roller-box {
  width: 31%;
  margin: 0 1%;
}
.show {
  width: 100%;
  height: 32%;
  position: absolute;
  z-index: 99;
  overflow: hidden;
}
.UP {
  height: 33%;
  transition: all 10s;
  -moz-transition: all 10s; /* Firefox 4 */
  -webkit-transition: all 10s; /* Safari and Chrome */
  -o-transition: all 10s;
}
.top-show {
  transform: translateY(0px);
  -webkit-transition: 1s all ease;
  transition: 1s all ease;
}
.up {
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  filter: blur(5px);
  opacity: 0.8;
  -webkit-transition: 8s all ease;
  transition: 8s all ease;
}
.top {
  height: 100%;
  width: 100%;
  position: absolute;
  top: -100%;
  background: #000;
}
.down-show {
  top: 68%;
  overflow: hidden;
}
.down {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 100%;
  background: #000;
}
.downMove {
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
  filter: blur(5px);
  opacity: 0.8;
  -webkit-transition: 8s all ease;
  transition: 8s all ease;
}
</style>
