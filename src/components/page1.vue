<template>
  <div class="con">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="区域">
        <el-select v-model="form.region"
                   placeholder="请选择会议室区域">
          <el-option label="上海"
                     value="shanghai"></el-option>
          <el-option label="北京"
                     value="beijing"></el-option>
          <el-option label="常州-工厂"
                     value="changzhou_gong"></el-option>
          <el-option label="常州-服务中心"
                     value="changzhou_fu"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker type="date"
                        placeholder="选择日期"
                        v-model="form.date1"
                        style="width: 100%;"></el-date-picker>
      </el-form-item>

    </el-form>

    <!-- 状态展示 -->

  </div>
</template>
<script>
export default {
  name: 'page1',
  data () {
    return {
      form: {
        region: '',
        date1: ''
      }

    }
  },
  methods: {

  }
}
</script>
<style >
* {
  padding: 0;
  margin: 0;
}
.con {
  padding: 0 20px;
}
.el-select {
  display: block;
}
.el-form-item__label {
  text-align: center;
}

.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
/* @import '../assets/css/page1.css'; */
</style>
