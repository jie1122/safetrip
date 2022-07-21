
<template>

  <div class="form" >
    
    <van-nav-bar title="地点信息" />
    <van-cell-group title="编辑地点">
      <van-field v-model="form.siteName" label="地点名" placeholder="" />
      <van-field v-model="form.name" label="人名" placeholder="" />
      <van-field v-model="form.idCard" label="身份证号" placeholder="" />
    </van-cell-group>

    <div class="footer">
      <div class="add" @click="handleAdd" >添加</div>
      <div class="alter" @click="handleUpdateAndTo" >进入</div>
    </div>

    <van-cell-group title="历史地点">
      <div class="site-list">
        <div class="item" :class="{select:item.select}" v-for="(item,i) in newSites" >
          <div class="site-name" @click="handleSelect(i)">{{item.siteName}}</div>
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
        select:true,

        idCard:'',//身份证号
        siteName:'',//地点名
        name:'',//人名
      },   
      newSites:[],
      currentItem:0
    }
  },
  methods: {
    // 增加地点
    handleAdd(){
      // 保存输入记录
      if( this.newSites[this.currentItem]){
        this.newSites[this.currentItem].select = false
      }
      this.newSites.push({...this.form})
      localStorage.setItem('newSites',JSON.stringify(this.newSites))

    },
    // 修改地点并进入结果页
    handleUpdateAndTo(){

      this.newSites[this.currentItem] = {...this.form}
      console.log(this.form)
      localStorage.setItem('newSites',JSON.stringify(this.newSites))
      this.$router.push({
          path:'./siteCode',
          query:this.form
          
        })
    },
    // 选中地点
    handleSelect(i){
      this.newSites.forEach(e=>{
        e.select = false
      })
      
      this.newSites[i].select = true
      this.currentItem = i
      this.form = {...this.newSites[i]} //浅拷贝，编辑地点时防止修改原地点

    },
    handleDelete(i){

      this.newSites.splice(i,1)
      localStorage.setItem('newSites',JSON.stringify(this.newSites))

    }
  },
  created(){
    this.newSites = JSON.parse(localStorage.getItem('newSites'))||[]
    if (this.newSites.length>0) {
      this.handleSelect(0)
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
    font-size: 14px;

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