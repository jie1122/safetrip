<template>

  <div class="result-wrap">
    <div class="header">
      <img src="./../assets/images/virus-banner.361329c1.jpg" alt="" />
    </div>
    <div class="content">
      <div class="form">
        <div class="input van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>姓名:</span>
          </div>
          <div class="van-cell__value"><span style="color:#323233;">史*杰</span></div>

        </div>
        <div class="input van-cell van-field">
          <div class="van-cell__title van-field__label">
            <span>证件号:</span>
          </div>
          <div class="van-cell__value"><span  style="color:#323233;">**************1537</span></div>


        </div>
      </div>
    </div>
    <div class="listbox">
      <div class="title">个人信息</div>
      <div class="van-cell-group van-hairline--top-bottom">
        <div class="van-cell">
          <div class="van-cell__title"><span>姓名</span></div>
          <div class="van-cell__value"><span>史*杰</span></div>
        </div>
      </div>
      <div class="title">检测结果信息</div>
      <div class="van-cell-group van-hairline--top-bottom">
        <div class="green van-cell">
          <div class="van-cell__title"><span>检测结果</span></div>
          <div class="van-cell__value"><span>阴性</span></div>
        </div>
        <div class="van-cell">
          <div class="van-cell__title"><span>采样时间</span></div>
          <div class="van-cell__value">
            <span>2021-11-15 15:48:01</span>
          </div>
        </div>
        <div class="van-cell">
          <div class="van-cell__title"><span>检测时间</span></div>
          <div class="van-cell__value">
            <span>2021-11-15 23:35:07</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="continue-btn van-button van-button--info van-button--normal van-button--block van-button--round"
    >
      <div class="van-button__content">
        继续查询
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.result-wrap {
  background-color: #f5f5f9;
  padding: 0 0 20px 0;
  color: #999;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  .header{
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .content {
    width: 100%;
    padding: 0 15px;
    background-color: transparent;
    margin-top: -32px;
    padding-bottom: 15px;
    .form {
      border-radius: 10px;
      overflow: hidden;
      .van-cell {
        color: #999;
        font-size: 14px;
        display: flex;
        width: 100%;
        padding: 10px 16px;
        overflow: hidden;
        line-height: 24px;
        background-color: #fff;
      }      
    }
  }
  .listbox{
    margin: 15px;
    background-color: #fff;
    margin: 15px;
    position: relative;
    .title {
      color: #333;
      font-size: 16px;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
    }   
  }
  
  .van-cell {
    position: relative;
    color: #999;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .van-cell__value{
      color: #969799;
    }
  } 
  .van-cell:after {
    position: absolute;

    content: " ";
    pointer-events: none;
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;

    transform: scaleY(.5);
  }
  .green .van-cell__value {
    color: #87d068;
  }
  .van-hairline--top-bottom {
    position: relative;
  }
  [class*=van-hairline]:after {
    position: absolute;
    box-sizing: border-box;
    content: " ";
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 0 solid #ebedf0;
    -webkit-transform: scale(.5);
    -ms-transform: scale(.5);
    transform: scale(.5);
    border-width: 1px 0;
  }
  .continue-btn {
    margin: 50px auto;
    height: 42px;
    border-radius: 999px;
}
.van-button--info {
    color: #fff;
    background-color: #1989fa;
    border: 0;
    width: 200px;
    line-height: 42px;
    text-align: center;
  }
}


</style>
