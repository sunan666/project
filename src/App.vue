<template>
  <div id="app">
    <router-view v-on:page1rams="fnPage1rams" :page1Params="page1Params"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // 储存page1Params变量
      page1Params: {}
    }
  },
  methods: {
    fnPage1rams: function (val) {
      // 从子组件page1接收参数 储存起来，同时传值回去
      this.page1Params = val
    }
  }
  // watch: {
  //   // 监听路由变化 to从哪   form跳哪 放在footer子组件里不管用
  //   $route (to, from) {
  //     // console.log(to.matched[0].name, from.matched[0].name)
  //     // 回到page1时从新请求接口
  //     if (to.matched[0].name === 'page1') {
  //       console.log(JSON.stringify(this.page1Params))
  //     }
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60PX;
}
</style>
