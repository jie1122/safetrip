
<template>
  <div class="form" >
    <div class="title">地点信息</div>
    <ul>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">页面标题</div>
            <div class="item-input">
              <div class="item-input">
                <input type="text" v-model="form.docTitle">
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">欢迎语</div>
            <div class="item-input">
              <div class="item-input">
                <input type="text" v-model="form.welcom">
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">车站名</div>
            <div class="item-input">
              <input type="text" v-model="form.stationName">

            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">车牌号</div>
            <div class="item-input">
              <input type="text" v-model="form.plateNum">

            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="item-content">
          <div class="item-inner">
            <div class="item-title">来郑日期</div>
            <div class="item-input">
              <input type="text" v-model="form.reachDate">

            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="footer">
      <div class="add" @click="handleAdd" >添加</div>
      <div class="alter" @click="handleUpdate" >进入</div>
    </div>
    <div class="title">历史地点</div>
    <div class="site-list">
      <div class="item" :class="{select:item.select}" v-for="(item,i) in sites" >
        <div class="site-name" @click="handleSelect(item,i)">{{item.docTitle+'-'+item.stationName}}</div>
        <div class="delete" @click="handleDelete(i)">删除</div>
      </div>
    </div>

  </div>
</template>
<script>

export default {

  data() {
    return {
      form:{
        docTitle:'',
        welcom:'',
        plateNum:'',//车牌号
        stationName:'',//站名
        name:'',//扫码人
        reachDate:'2020-03-23'//来郑日期
      },   
      sites:[],
      currentItem:0

    }
  },
  methods: {
    // 增加地点
    handleAdd(){
      // 保存输入记录
      this.sites[this.currentItem].select = false
      this.sites.push({...this.form})
      localStorage.setItem('sites',JSON.stringify(this.sites))

    },
    // 修改地点
    handleUpdate(){

      this.sites[this.currentItem] = {...this.form}
      console.log(this.form)
      localStorage.setItem('sites',JSON.stringify(this.sites))
      document.title = this.form.docTitle
      this.$router.push({
          path:'./safeTrip',
          query:this.form
          
        })
    },
    // 选中地点
    handleSelect(item,i){
      this.sites.forEach(e=>{
        e.select = false
      })
      this.sites[i].select = true

      this.currentItem = i
      this.form = {...item} //浅拷贝，编辑地点时防止修改原地点

    },
    handleDelete(i){

      this.sites.splice(i,1)
      localStorage.setItem('sites',JSON.stringify(this.sites))

    }
  },
  created(){
    this.sites = JSON.parse(localStorage.getItem('sites'))||[]
    if (this.sites.length>0) {
      this.sites.forEach(e=>{
        e.select = false
      })
      this.sites[0].select = true
      this.form = {...this.sites[0]}
    }
  }
}
</script>
<style lang="scss" scoped>
.form{
  background: #fff;
  height: 100%;
  overflow: auto;
  .title{
    padding: 30px 30px 15px;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: block;
    color: #3d4145;
    font-size: 0.7rem;

    .item-content {
      padding:0 0.75rem;
      min-height: 2.2rem;
      display: flex;
      .item-inner{
        padding: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
        display: flex;
        padding: 0;
        width: 100%;
        min-height: 2.2rem;
        overflow: hidden;

        align-items: center;
        .item-title{
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: top;
          width: 25%;
          flex-shrink: 0;
          margin: 4px 0;
        }
        .item-input{
          width: 100%;
          margin-top: -0.4rem;
          margin-bottom: -0.35rem;
          flex: 1;
          input {
            appearance: none;
            border: none;
            background: 0 0;
            border-radius: 0;
            box-shadow: none;
            display: block;
            padding: 0 0 0 0.25rem;
            margin: 0;
            width: 100%;
            height: 2.15rem;
            outline: 0;
          }
        }
      }
    }

  }
  .footer{
    display: flex;
    div{
      margin: 15px 15px;

      flex:1;
      padding: 6px 14px;
      color: #fff;
      border-radius: 5px;
      text-align: center;
    }
    .alter{
      background-color: #409eff;

    }
    .add{
      background-color: #85ce61;
    }
  }

  .site-list{
    font-size: 0.7rem;

    .item{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      line-height: 40px;
      padding: 0 15px;
      .site-name{
        flex: 1;
        overflow: hidden;

        white-space: nowrap;
        text-overflow:ellipsis
      }
      .delete{
        width: 64px;
        flex-shrink: 0;
        color: #f56c6c;
        padding: 0 15px;
      }
    }
    .select{
      background-color: #ddd;
    }
  }
}
  
</style>