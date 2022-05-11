<template>
  <div class="header-container">
    <div class="header-left">
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
            class="menu-popoer-item"
          >
            <router-link :to="'/res/' + item.reservaliontype">{{
              item.reservationName
            }}</router-link></el-menu-item
          >
        </el-sub-menu>
        <el-menu-item index="3">
          <router-link to="/info">通知公告</router-link></el-menu-item
        >
        <el-menu-item index="4"
          ><router-link to="/myReservation">我的预约</router-link></el-menu-item
        >
      </el-menu>
    </div>

    <div class="header-right">
      <el-menu   mode="horizontal">
        <el-menu-item >
          <router-link to="/userInfo">    <el-avatar :size="50" :src="circleUrl" /></router-link>
        </el-menu-item></el-menu
      >
    </div>
  </div>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view> </router-view>
</template>

<script>
import http from "./common/http";
export default {
  name: "App",
  components: {},
  data() {
    return {
      activeIndex: "1",
      reservaliontypes: [],
      circleUrl:'',
      
    };
  },
  computed: {},
  beforeCreate() {},
  created() {
    this.getTypes();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
    },
    getTypes() {
      http.get("/users").then((res) => {
        console.log(res);
        this.reservaliontypes = [
          {
            reservaliontype: "meeting",
            reservationName: "会议室预约",
          },
          {
            reservaliontype: "exhibition",
            reservationName: "展厅预约",
          },
        ];
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.menu-container {
  font-size: 20px;
}
.header-container {
  display: flex;
  .header-left {
    width: 80%;
  }
  .header-right {
    width: 20%;
  }
}
</style>
