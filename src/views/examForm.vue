<template>
  <van-nav-bar title="检测信息" />
  <div class="container">
    <van-cell-group title="个人信息" inset>
      <van-field v-model="form.name" label="姓名" placeholder="" />
      <van-field v-model="form.idCard" label="证件号" placeholder="只需后四位" />
    </van-cell-group>

    <van-cell-group title="时间" inset>

      <van-field v-model="form.getTime"  readonly label="采样时间" @click="showGetTime=show=true" placeholder="" />
      <van-field v-model="form.resTime" readonly label="检测时间" @click="showResTime=show=true" placeholder="" />

    </van-cell-group>
    <div style="margin:20px;">

      <van-button type="primary" round  size="large" @click="toResult">查看结果</van-button>
    </div>
    <van-popup
      v-model:show="show"
      @close="showGetTime=showResTime=false"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <van-datetime-picker
        v-model="getTime"
        v-show="showGetTime"
        type="datetime"
        title="采样时间"
        @confirm="getTimeConfirm"

      />
      <van-datetime-picker
        v-model="resTime"
        v-show="showResTime"
        type="datetime"
        title="检测时间"
        @confirm="resTimeConfirm"
      />
    </van-popup>
  </div>

</template>
<script>

export default {

  data() {
    return {
      show:false,
      showGetTime:false,
      showResTime:false,
      getTime:new Date(),
      resTime:new Date(),
      form:{
        name:'',
        idCard:'',
        getTime:'',
        resTime:'',
      }
    }
  },
  methods:{

    toResult(){
      this.$router.push({
        path:'/examResult',
        query:this.form
      })
    },
    getTimeConfirm(date){
      this.show =  this.showGetTime = false
      date.setSeconds( Math.random()*60)
      this.form.getTime = this.$formatTime(date)
    },
    resTimeConfirm(date){
      this.show =  this.showResTime = false
      date.setSeconds( Math.random()*60)

      this.form.resTime = this.$formatTime(date)
    }


  },
}
</script>
<style lang="scss" scoped>
  .container{

    min-height: 100%;
    background-color: #f5f5f9;
  }
</style>