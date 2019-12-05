<template>
  <div class="con con_detail">
    <ElNav :titNaem="titNaem"></ElNav>
    <el-row>
      <el-col :span="8">预约人：</el-col>
      <el-col :span="16">王某某</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">区域：</el-col>
      <el-col :span="16">{{ data.region }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">日期：</el-col>
      <el-col :span="16">{{ data.date }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="8">时间：</el-col>
      <el-col :span="16">09:00-11:00</el-col>
    </el-row>

    <el-row>
      <el-col :span="8">会议室：</el-col>
      <el-col :span="16">{{ data.room }}</el-col>
    </el-row>

    <el-row class="works">
      <el-col :span="8">预约内容：</el-col>
      <el-col :span="16">需求对接需求对接需求对接需求对接需求对接需求对接需求对接需求对接需求对接需求对接需求对接需求对接</el-col>
    </el-row>
  </div>
</template>
<script>
import ElNav from '@/components/header'
export default {
  components: {
    ElNav
  },
  data () {
    return {
      titNaem: '预约详情',
      data: {
        region: '上海',
        room: '01',
        date: '2019-08-11'
      },
      page1Param: {}
    }
  },
  mounted () {
    // 接收page1传过来的参数
    // console.log(this.$route.params)
    this.page1Param = this.$route.params
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.con {
  padding: 0 20PX;
}
.con_detail {
  .el-row {
    font-size: 14PX;
    margin: 0;
    padding: 10PX 0;
    text-align: left;
    &:not(:last-child){
      border-bottom: 1px solid #ececec;
    }
    .el-col-8{
      text-align: center;
    }
    &.works {
      height: auto;
      line-height: 1.5;
    }
  }
}
</style>
