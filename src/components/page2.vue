<template>
  <div class="con">
    <el-form ref="form"
             :model="form"
             label-width="80px">
      <el-form-item label="区域">
        <el-select v-model="form.region"
                   placeholder="请选择区域">
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
      <el-form-item label="会议室">
        <el-select v-model="form.room"
                   placeholder="请选择会议室">
          <el-option label="01会议室"
                     value="01"></el-option>
          <el-option label="02会议室"
                     value="02"></el-option>
          <el-option label="03会议室"
                     value="03"></el-option>
          <el-option label="04会议室"
                     value="04"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker type="date"
                        placeholder="选择日期"
                        v-model="form.date1"
                        :picker-options="pickerOptions"
                        style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="选择时间">
        <el-col :span="11">
          <el-time-select placeholder="起始时间"
                          v-model="form.startTime"
                          :picker-options="{
          start: '08:30',
          step: '00:30',
          end: '18:30'
        }">

          </el-time-select>
        </el-col>
        <el-col class="line"
                :span="2">-</el-col>
        <el-col :span="11">
          <el-time-select placeholder="结束时间"
                          v-model="form.endTime"
                          :picker-options="{
          start: '08:30',
          step: '00:30',
          end: '18:30',
          minTime: form.startTime
        }">
          </el-time-select>
        </el-col>
      </el-form-item>

      <el-form-item label="会议内容">
        <el-input type="textarea"
                  :rows="4"
                  placeholder="请输入会议内容"
                  v-model="form.meetContent">
        </el-input>
      </el-form-item>

      <el-button type="primary" class="submit_btn" @click="onSubmit">提交</el-button>

    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'page2',
  data () {
    return {
      form: {
        meetContent: '',
        region: '',
        room: '',
        date1: Date.now(),
        startTime: '',
        endTime: ''
      },
      pickerOptions: {
        disabledDate (time) {
          let curDate = (new Date()).getTime()
          let three = 7 * 24 * 3600 * 1000
          let threeMonths = curDate + three
          return time.getTime() < Date.now() - 8.64e7 || time.getTime() > threeMonths
        }
      }

    }
  },
  created () {
  },
  mounted () {
    this.getData()
  },
  methods: {
    onSubmit () {
      console.log(this.$data.form)
    },
    getData () {
      axios.get('/api/test.json').then(response => {
        console.log(response.data)
      }, response => {
        console.log('error')
      })
    }
  }
}
</script>
<style>
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
.el-form-item {
  margin-bottom: 10px;
}
.el-date-editor.el-input {
  width: 100%;
}
.el-input--suffix .el-input__inner {
  padding-right: 0;
}
.el-input__icon:after {
  content: '';
}

.submit_btn{
  width:80%;
  margin: 200px auto 0;

}

</style>
