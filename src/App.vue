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
          <router-link to="/">西湖大学资源预约一览表</router-link></el-menu-item
        >
      </el-menu>
    </div>

    <div class="header-right el-menu">
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
    </div>
  </div>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view> </router-view>
</template>

<script>
import "element-plus/dist/index.css";
import { mapActions } from "vuex";
import http from "./common/http";
import logo from './assets/logo2.png'
export default {
  name: "App",
  components: {},
  data() {
    return {
      activeIndex: "1",
      reservaliontypes: [],
      circleUrl: logo,
    };
  },
  computed: {},
  beforeCreate() {},
  created() {
    console.log("----");
    //this.getUser();
    //this.getTypes();
  },
  methods: {
    ...mapActions({ getUser: "setUser" }),
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
    display: flex;
    justify-content: center;
    align-content: center;
    border-bottom: solid 1px var(--el-menu-border-color);
    span,
    a {
      display: inline-block;
    }
    a {
      margin: auto;
    }
  }
}

.avater-container {
}
</style>
