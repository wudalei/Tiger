<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>源盛老虎机</h2>
    <div>欢迎启动源盛老虎机</div>
    <div class="machine-box"></div>
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
  height: 400px;
  width: 400px;
  background: #f5f5f5;
  margin: auto;
  margin-top: 10px;
}
</style>
