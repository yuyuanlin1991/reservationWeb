<template>
  <div class="home-res-container">
    <el-row>
      <el-col
        v-for="(o, index) in typesInfoList"
        :key="index"
        :span="8"
        :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 14px">
            <span>{{o.resName}}</span>
            <div class="bottom">
              <time class="time">{{ currentTime }}</time>
              <router-link :to="`/res/${o.reqInfo.filter.resources_type_id.eq}?id=9001x9002x9003`">进入查看</router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  data() {
    return {
      currentTime: new Date(),
      typesInfoList: [
        {
          resName: "理发室预约",
          reqInfo: {
            tenantKey: "bc7d96b4-265c-4bfa-8aed-cdc99e89ec3a",
            appointmentDate: ["2022-10-27", "2022-11-27"],
            first: "10000",
            offset: "0",
            filter: {
              resources_number: { eq: "0000" },
              resources_type_id: { eq: "ef18bb06-972d-4246-aa6c-4a10df628882" },
              resources_id: { eq: "eb469ac8-db57-46b7-a662-85062e45795c" },
              appointment_date: { eq: "2022-11-22" },
              audit_status: {
                in: [0, 2],
              },
              state: { eq: "0" },
              appointment_state: { eq: "2" },
            },
          },
        },
      ],
    };
  },
};
</script>

<style scope>
.home-res-container {
  padding: 40px;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
