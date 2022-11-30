<template>
  <div class="res-reservation-container">
    <el-tabs v-model="activeId" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
        v-for="o in showIdDataList"
        :key="o.id"
        :label="o._name"
        :name="o.id"
      >
        <el-table
          :data="reservationData[o.id] || []"
          stripe
          style="width: 100%"
        >
          <el-table-column prop="index" label="序号" width="80" />
          <el-table-column prop="resources_name" label="资源名称" width="180" />
          <el-table-column
            prop="appointment_user_name"
            label="预约人"
            width="180"
          />
          <el-table-column prop="appointment_date" label="日期" width="180" />
          <el-table-column prop="start_time" label="开始时间" width="180" />
          <el-table-column prop="end_time" label="结束时间" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
const _data = {
  tenantKey: "bc7d96b4-265c-4bfa-8aed-cdc99e89ec3a",
  first: "10000",
  offset: "0",
  filter: {
    resources_type_id: {
      eq: "ef18bb06-972d-4246-aa6c-4a10df628882",
    },
    appointment_date: {
      eq: moment().format("YYYY-M-D"),
    },
    audit_status: {
      in: [0, 2],
    },
    state: {
      eq: "0",
    },
    appointment_state: {
      eq: "2",
    },
  },
};
const config = {
  method: "post",
  url: "http://localhost:3000/yy-sys/getAppointmentInformationList",
  headers: {
    "Content-Type": "application/json",
  },
};

const getIds = function () {
  let _quRes = document.location.toString().split("?") || [];
  let _ids = _quRes[1] ? _quRes[1].split("=") : [];
  let _idList = _ids[1] ? _ids[1].split("x") : [];
  let _idDataList = _idList.map((one, index) => {
    return {
      index: index,
      id: one,
      _name: "",
    };
  });
  return _idDataList;
};

export default {
  //components: { MeetingList },
  name: "ResReservation",
  props: {
    msg: String,
    resTypeId: String,
  },
  data() {
    return {
      idDataList: [],
      reservationData: {},
      activeId: 0,
      timer1: null,
      timerActive: null,
      timeActiveCount: 0,
    };
  },
  computed: {
    showIdDataList: function () {
      return this.idDataList.filter((item) => {
        return item._name;
      });
    },
  },
  mounted() {
    this.idDataList = [...getIds()];
    console.log("要获取的资源的信息111", this.idDataList);
    // 初始化tab
    this.activeId = this.idDataList[0].id;
    // 发送多个申请；
    this.idDataList.map((one) => {
      this.getList(one.index);
    });
    this.timeRefresh();
  },
  methods: {
    getList(index) {
      _data["filter"].resources_number = {
        eq: this.idDataList[index].id,
      };
      config.data = JSON.stringify(_data);
      // 发起请求
      axios({ ...config })
        .then((response) => {
          if (response.data.data.length) {
            let temp = { ...this.idDataList[index] };
            temp._name = response.data.data[0].resources_name;
            this.idDataList.splice(index, 1, { ...temp });
            let formatDate = this.formatRes(response.data.data);
            this.reservationData[temp.id] = formatDate;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    formatRes(list) {
      let _list = list.reverse();
      _list.map((one, i) => {
        one.index = i;
        let temp_name = one.appointment_user_name;
        let reg = /[\u4e00-\u9fa5]/g;
        let _nameList = temp_name.match(reg);
        _nameList[1]?_nameList[1] ="*":null;
        let _name = _nameList.toString().replace(/,/g,'');
        one.appointment_user_name = temp_name.substring(0,(temp_name.length - _nameList.length))+_name

      });
      return _list;
    },
    handleClick(tab) {
      console.log(tab, event);
    },
    timeRefresh() {
      this.timer1 = setInterval(() => {
        this.getList(this.activeId);
      }, 600000);
      this.timerActive = setInterval(() => {
        if (
          this.showIdDataList.length &&
          this.timeActiveCount < this.showIdDataList.length - 1
        ) {
          let _timeCount = this.timeActiveCount + 1;
          this.activeId = this.showIdDataList[_timeCount].id;
          this.timeActiveCount = _timeCount;
        } else if (
          this.showIdDataList.length &&
          this.timeActiveCount === this.showIdDataList.length - 1
        ) {
          this.activeId = this.showIdDataList[0].id;
          this.timeActiveCount = 0;
        }
      }, 5000);
    },
  },
  beforeMounted(){
    this.timer1 = null;
    this.timerActive = null;
  }
};
</script>

<style scoped lang="scss">
</style>
