<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>源盛老虎机</h2>
    <div class="machine">
      <div class="title">ฅ'ω'ฅ我是一台没有感情的老虎机ฅ(๑*д*๑)ฅ </div>
      <div class="select-border"></div>
      <div class="machine-box">
        <roller></roller>
        <roller></roller>
        <roller></roller>
      </div>
      <div class="setBtn">
        <div class="left"></div>
        <button @click="start">start</button>
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
      msg: 'Welcome to paly TigerMachine!'
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
  padding: 5px;
  width: 600px;
  height: 340;
  background: #f5f5f5;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
}
.select-border {
  border: 2px solid;
  position: absolute;
  top: 403px;
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
</style>
