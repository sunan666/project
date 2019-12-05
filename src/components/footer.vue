<template>
  <mt-tabbar v-model="selected" v-if="isShow">
    <mt-tab-item id="page1"
                 @click.native="fnJump()">
      筛选
    </mt-tab-item>
    <mt-tab-item id="page2"
                 @click.native="fnJump()">
      预约
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {
  data () {
    return {
      isShow: true,
      selected: this.$router.history.current.matched[0].name
    }
  },
  created () {
    var _this = this
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    window.onresize = function () {
      var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight
      if (clientHeight - nowClientHeight > 60) {
        // 因为ios有自带的底部高度
        // 键盘弹出的事件处理
        _this.isShow = false
      } else {
        // 键盘收起的事件处理
        _this.isShow = true
      }
    }
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

  }
}
</script>
<style lang="scss">
.mint-tab-item{
  padding: 12PX 0;
}

</style>
