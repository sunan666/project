<template>
  <div>
    <div class="con">
      <el-form ref="params"
               :model="params"
               label-width="80px">
        <el-form-item label="日期">
          <el-date-picker type="date"
                          placeholder="选择日期"
                          v-model="params.date"
                          :picker-options="pickerOptions"
                          :clearable="false"
                          :editable="false"
                          style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="地区">
          <el-select v-model="params.region"
                     placeholder="请选择地区">
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
          <el-select v-model="params.room"
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

        <el-form-item label="选择时间">
          <el-col :span="11">
            <el-time-select placeholder="起始时间"
                            v-model="params.startTime"
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
                            v-model="params.endTime"
                            :picker-options="{
          start: '08:30',
          step: '00:30',
          end: '18:30',
          minTime: params.startTime
        }">
            </el-time-select>
          </el-col>
        </el-form-item>

        <el-form-item label="会议内容">
          <el-input type="textarea"
                    :rows="4"
                    placeholder="请输入会议内容"
                    v-model="params.meetContent">
          </el-input>
        </el-form-item>

        <el-button type="primary"
                   class="submit_btn"
                   @click="onSubmit">提交</el-button>

      </el-form>
    </div>
    <ElFooter></ElFooter>
  </div>
</template>

<script>
import axios from 'axios'
import ElFooter from '@/components/footer'
export default {
  name: 'page2',
  components: {
    ElFooter
  },
  data () {
    return {
      params: {
        meetContent: '',
        region: '',
        room: '',
        date: '',
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
  mounted () {
    // 接收page1传过来的参数
    // this.getData()
    // console.log(this.$route.params)
    this.params.region = this.$route.params.region
    this.params.room = this.$route.params.room
    this.params.date = this.$route.params.date || Date.now()
  },
  methods: {
    onSubmit () {
      // console.log(this.$data.params)
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

.submit_btn {
  width: 80%;
  margin: 100px auto 0;
}
</style>
