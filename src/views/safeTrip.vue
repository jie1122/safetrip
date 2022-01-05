<script setup>
  import water from './../utils/water'
  water('【郑州市新型冠状病毒', '感染的肺炎疫情防控', '领导小组办公室】')
</script>
<template>
    <div class="result"  >
      <div class="finish-header specialType-success">
        <div class="complete-info">{{form.welcom}}!</div>
        <div >{{submitTime}}</div>
        <div class="warning-tips"></div>
        <i class="iconfont finish-icon iconsucceed" id="complete-icon"></i>
      </div>
      <div class="content-block">
        <div class="specialType-info" v-show="form.plateNum">车牌号<span>{{form.plateNum}}</span></div>
        <div  class="specialType-info" v-show="form.stationName">当前站名<span>{{form.stationName}}</span></div>
        <div  class="specialType-info" v-show="form.name">扫码人<span>{{form.name}}</span></div>

        <div class="specialType-info">来郑日期<span>{{form.reachDate}}</span></div>
        <p class="showGuards">请将此信息页出示给相关工作人员</p>
      </div>
    </div>
</template>
<script>

export default {
  computed:{
    submitTime(){
      let date = new Date()
      let month = date.getMonth()+1
      let day = date.getDate()
      let hh = date.getHours()
      let mm = date.getMinutes()

      month =month<10? ('0'+month):month
      day = day<10?('0' + day):day
      hh = hh<10?('0' + hh):hh
      mm = mm<10?('0' + mm):mm

      return date.getFullYear()+'-'+month+'-'+day+' '+hh+':'+mm
    }
  },
  data() {
    return {
      form:{}
    }
  },
  created(){
    this.form = this.$route.query

  },
  methods:{
  },
}
</script>
<style lang="scss" scoped>
.result{
  height: 100%;
  background-color: #f4f5f6;
  /* 上半部分，绿色 */
  .finish-header {
    background-color: #56c61e;

    position: relative;
    width: 100%;
    /* height: 30%; */
    padding: 1.2rem 0;
    text-align: center;
    color: #fff;
    font-size: 1rem;
    .complete-info {
      font-weight: bold;
      overflow-wrap: break-word;
      margin: 20px 0;
    }
    .warning-tips {
      font-size: 18px;
      padding: 15px;
      margin-bottom: 10px;
    }
    .finish-icon {
      position: absolute;
      bottom: -26px;
      left: 0;
      right: 0;
      margin: 0 auto;
      font-size: 38px;
      width: 58px;
      height: 60px;
      color: #56c61e;
      background: #fff;
      font-size: 60px;
      line-height: 55px;
      border-radius: 50%;
    }


  }
  /* 下半部分，内容 */
  .content-block {
    margin: 1.75rem 0;
    padding: 0 .75rem;
    color: #6d6d72;
    .specialType-info {
      /* display: none; */
      padding: 8px 16px;
      background-color: #ffffff;
      span {
        color: black;
        float: right;
      }
    }
    .showGuards {
      text-align: center;
    }
  }
}
</style>