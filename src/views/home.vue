
<template>
  <van-nav-bar title="主页" />
  <van-cell-group >
    <van-cell  is-link title="场所码" to="/safeTripForm"></van-cell>
    <van-cell  is-link title="新场所码" to="/siteCodeForm"></van-cell>
    <van-cell  is-link title="核酸检测" to="/examForm"></van-cell>
  </van-cell-group >

</template>
<script>

export default {

  data() {
    return {
      
    }
  },
  methods:{
  },
}
</script>
<style lang="scss" scoped>
  
</style>