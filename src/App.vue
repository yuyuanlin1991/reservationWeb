<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="menu-container"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/">首页</router-link></el-menu-item
      >
      <el-sub-menu index="2">
        <template #title>预约类型</template>
        <el-menu-item
          v-for="item in reservaliontypes"
          :key="item.reservaliontype"
          :index="item.reservaliontype"
        >
          <router-link :to="'/res/'+item.reservaliontype">{{
            item.reservationName
          }}</router-link></el-menu-item
        >
        >
      </el-sub-menu>
      <el-menu-item index="3" >  <router-link to="/info">通知公告</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/userCenter">我的预约</router-link></el-menu-item>
    </el-menu>
  </div>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      activeIndex: "1",
      reservaliontypes: [
        {
          reservaliontype: "meeting",
          reservationName: "会议室预约",
        },
        {
          reservaliontype: "meeting",
          reservationName: "会议室预约2",
        },
      ],
    };
  },
  computed: {},
  beforeCreate(){

  },
  methods:{
    handleSelect(key,keyPath) {
  console.log(key, keyPath)
  this.activeIndex = key;
}

  }
};
</script>

<style>
ß #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu-container, a{
  
    text-decoration: none;
  
}
</style>
