<template>
  <div id="app">
    <router-view />
    <mt-tabbar v-model="selected">
      <mt-tab-item id="page1" @click.native="fnJump()">
        状态
      </mt-tab-item>
      <mt-tab-item id="page2" @click.native="fnJump()">
        预约
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: this.$router.history.current.matched[0].name
    }
  },
  mounted () {
  },
  methods: {
    // 底部按钮跳转  组件bug。正常绑定点击事件不触发 ，@click.native触发两次。待解决
    fnJump: function () {
      // console.log(this.selected + '---' + this.$router.history.current.matched[0].name)
      // 如果页面的连接一级name和this.selected值不同
      if (this.selected !== this.$router.history.current.matched[0].name) {
        switch (this.selected) {
          case 'page1':
            this.$router.replace({
              path: '/page1'
            })
            break
          case 'page2':
            this.$router.replace({
              path: '/page2'
            })
            break
        }
      }
    }

  },
  watch: {
    // 监听路由变化 to从哪   form跳哪
    $route (to, from) {
      // console.log(to.matched[0].name, from.matched[0].name)
      this.selected = to.matched[0].name
    },
    selected (newval) {
      // 慎用 用底部此方法跳转页面各种bug 放弃，改用点击事件触发，然后监听路由变化改变样式值
      // switch (newval) {
      //   case 'page1':
      //     this.$router.replace({
      //       path: '/page1'
      //     })
      //     break
      //   case 'page2':
      //     this.$router.replace({
      //       path: '/page2'
      //     })
      //     break
      // }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
