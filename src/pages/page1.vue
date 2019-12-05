<template>
  <div>
    <div class="con con_page1">
      <el-form ref="form"
               :model="params"
               label-width="80px">
        <el-form-item label="日期">
          <el-date-picker type="date"
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
                       value="上海"></el-option>
            <el-option label="北京"
                       value="北京"></el-option>
            <el-option label="常州-工厂"
                       value="常州-工厂"></el-option>
            <el-option label="常州-服务中心"
                       value="常州-服务中心"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="会议室">
          <el-select v-model="params.room"
                     placeholder="请选择会议室">
            <el-option v-for="(item,index) in roomArr"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
        </el-form-item>

      </el-form>

      <!-- 状态展示 -->
      <div class="state_b"
           v-if="isCheck">
        <el-row>
          <!-- 左边上午 -->
          <el-col :span="12"
                  class="table_left">
            <el-row class="table_row"
                    v-for="(item,index) in table_state"
                    :key="index"
                    v-if="index<11"
                    @click.native="fnOrder(item.state)">
              <!-- 时间 -->
              <el-col :span="9">
                {{ item.time }}
              </el-col>
              <!-- 状态 -->
              <el-col class="state"
                      :span="15"
                      :class="{active:item.state==1}">
                &nbsp;
              </el-col>
            </el-row>
          </el-col>

          <!-- 右边下午 -->
          <el-col :span="12"
                  class="table_right">
            <!-- !!!这里有重点（@click=""常规点击写法在el-row这些组件上无效，需要加上@click.native=""） -->
            <el-row class="table_row"
                    v-for="(item,index) in table_state"
                    :key="index"
                    v-if="index>=11"
                    @click.native="fnOrder(item.state)">
              <!-- 时间 -->
              <el-col :span="9">
                {{ item.time }}
              </el-col>
              <!-- 状态 -->
              <el-col class="state"
                      :span="15"
                      :class="{active:item.state==1}">
                &nbsp;
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <ElFooter></ElFooter>
  </div>
</template>
<script>
import ElFooter from '@/components/footer'
export default {
  name: 'page1',
  components: {
    ElFooter
  },
  props: {
    page1Params: {}
  },
  data () {
    return {
      titNaem: '筛选',
      // 接口返回数据-会议室
      roomArr: [],
      // 传入接口的参数
      params: {
        region: '',
        room: '',
        date: Date.now()
      },
      // 是否展示表格
      isCheck: false,
      // 接口返回的数据
      table_state: [
        { time: '08:30', state: 1 },
        { time: '09:00', state: 1 },
        { time: '09:30', state: 1 },
        { time: '10:00', state: 0 },
        { time: '10:30', state: 0 },
        { time: '11:00', state: 1 },
        { time: '11:30', state: 1 },
        { time: '12:00', state: 1 },
        { time: '12:30', state: 1 },
        { time: '13:00', state: 1 },
        { time: '13:30', state: 1 },
        // 下午
        { time: '14:00', state: 1 },
        { time: '14:30', state: 1 },
        { time: '15:00', state: 1 },
        { time: '15:30', state: 0 },
        { time: '16:00', state: 0 },
        { time: '16:30', state: 0 },
        { time: '17:00', state: 1 },
        { time: '17:30', state: 1 },
        { time: '18:00', state: 1 },
        { time: '18:30', state: 0 },
        { time: '19:00', state: 0 }
      ],
      // 日历格式化
      pickerOptions: {
        disabledDate (time) {
          // 从今天往后的7天内
          let curDate = (new Date()).getTime()
          let three = 7 * 24 * 3600 * 1000
          let threeMonths = curDate + three
          return time.getTime() < Date.now() - 8.64e7 || time.getTime() > threeMonths
        }
      }
    }
  },
  created () {
    this.fnAjaxArea()
  },
  mounted () {
    // 接收从app.vue传过来的参数赋值给子组件
    if (this.page1Params.region) {
      this.params = this.page1Params
    }
  },
  methods: {
    // 接口-根据地区筛选会议室
    fnAjaxArea: function () {
      // 传参数 this.params.region  //返回会议室 赋值给roomArr
      this.roomArr = [{ name: '01会议室', id: '01' }, { name: '02会议室', id: '02' }]
    },
    // 接口-时间表格
    fnAjaxScreen: function () {
      console.log('1111请求接口的参数====' + JSON.stringify(this.params))
      // 200成功 则把this.table_state 渲染，展示表格
      this.isCheck = true
    },

    // 点击列表 0 灰色去预约，1 绿色进详情
    fnOrder: function (state) {
      if (state === 0) { // state==0 进入详情
        this.$router.replace({
          name: 'page2',
          params: this.params
        })
      } else if (state === 1) { // state==1 进入详情
        this.$router.replace({
          name: 'detail',
          params: this.params
        })
      }
    }

  },
  watch: {
    // ！！！这里有重点
    // 1.常规下，初始化是不进行监听的，想要初始化触发监听方法之一是 加immediate: true
    // 2.常规下，监听只能监听到data的只有一级变量，多级变量无法监听 加deep: true
    // 监听，区域、会议室、日期 改变就请求筛选接口，并把结果渲染到表格 (immediate:初始化也会执行监听 deep:深入监听)
    params: {
      handler (newName, oldName) {
        // console.log('监听筛选参数变化：---' + JSON.stringify(newName) + '----' + JSON.stringify(oldName))
        // 表单改变的时候，如果都不为空请求接口
        if (newName.region && newName.room && newName.date) {
          this.fnAjaxScreen()
          // 把参数传给父组件app.vue
          this.$emit('page1rams', this.params)
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
<style lang="scss">
// 引入scss单文件方法 ，也可引入css文件
@import '../assets/css/page1.scss';
</style>
