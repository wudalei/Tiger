<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <button @click="jump"
              ref="btn"
              class="active">
        源盛老虎机进入
      </button>
      <li>
        <a href="http://localhost:8080/#/TigerMachine"
           target="_blank">
          源盛老虎机启动
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/"
           target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/"
           target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/"
           target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/"
           target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue"
           target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    jump () {
      this.$router.push({ path: '/TigerMachine' })
    },
    // avoid () {
    //   let that = this;
    // }
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
.active {
  width: 110px;
  height: 23px;
  transition: 3s;
}
ul .active:hover {
  -webkit-transform: translate(445px, 1em);
  transform: translate(445px, 10em);
  transform: translate(-445px, 10em);
}
</style>
