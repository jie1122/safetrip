
<template>
  <van-nav-bar title="地点信息" />

  <div class="form" >

    <van-cell-group title="编辑地点">
      <van-field v-model="form.docTitle" label="页面标题" placeholder="" />
      <van-field v-model="form.welcom" label="欢迎语" placeholder="" />
      <van-field v-model="form.stationName" label="车站名" placeholder="" />
      <van-field v-model="form.plateNum" label="车牌号" placeholder="" />
      <van-field v-model="form.reachDate" label="来郑日期" placeholder="" />
    </van-cell-group>

    <div class="footer">
      <div class="add" @click="handleAdd" >添加</div>
      <div class="alter" @click="handleUpdate" >进入</div>
    </div>

    <van-cell-group title="历史地点">
      <div class="site-list">
        <div class="item" :class="{select:item.select}" v-for="(item,i) in sites" >
          <div class="site-name" @click="handleSelect(item,i)">{{item.docTitle+'-'+item.stationName}}</div>
          <div class="delete" @click="handleDelete(i)">删除</div>
        </div>
      </div>
    </van-cell-group>


  </div>
</template>
<script>

export default {

  data() {
    return {
      form:{
        select:false,
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
      if( this.sites[this.currentItem]){
        this.sites[this.currentItem].select = false
      }
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
  background: #f7f8fa;
  height: 100%;
  overflow: auto;

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
    font-size:14px;

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