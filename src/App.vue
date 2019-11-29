<template>
  <div id="app">
    <router-view />
    <mt-tabbar v-model="selected">
      <mt-tab-item id="page1">
        状态
      </mt-tab-item>
      <mt-tab-item id="page2">
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
  created () {
    console.log()
  },
  watch: {
    selected (newval) {
      console.log(newval)
      switch (newval) {
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
