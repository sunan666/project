<template>
  <div>
    <div class="header">
        <i class="el-icon-back" @click="goBack()"></i>
        {{ titNaem }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titNaem: String
  },
  methods: {
    goBack () {
      this.$router.replace({
        name: 'page1'
      })
    }
  }
}
</script>
<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #26a2ff;
  color: #fff;
  text-align: center;
  height: 46PX;
  line-height: 46PX;
  font-size: 16PX;
}
.el-icon-back{
  position: absolute;
  left: 16PX;
  font-size: 24PX;
  top: 50%;
  transform: translateY(-50%);
}
</style>
