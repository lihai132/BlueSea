<template>
  <div class="xy3">
    <ul class="top" style="width: 100%">
      <li>
        <div class="d1">房间id</div>
        <el-input size="small" placeholder v-model="roomId" style="width:150px"></el-input>
      </li>
      <li class="l2">
        <div class="d1">协议号人数</div>
        <el-input size="small" placeholder v-model="number" style="width:150px"></el-input>
        <div class="text">(一次性最多只能加入不超过300的协议号)</div>
      </li>
      <li class="l3">
        <div class="d1">时间</div>
        <el-input size="small" placeholder v-model="time" style="width:150px"></el-input>
        <div class="text">秒</div>
      </li>
    </ul>
    <div class="but">
      <el-button size="small" style="width:80px" @click="increase">增加</el-button>
      <el-button size="small" style="width:80px" @click="reduce">减少</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roomId: "",
      number: "",
      time: ""
    };
  },
  methods: {
    async increase() {
      if (
        this.roomId.length == 0 ||
        this.number.length == 0 ||
        this.time.length == 0
      ) {
        alert("设置数据不能为空");
      } else {
        var token = document.cookie.split(";")[0].split("=")[1];
        let { data } = await this.$axios({
          method: "get",
          url:
            "https://ddapp.blueseashark.cn/managerApi/robot-admin/addRobotsSync?" +
            "num=" +
            this.number +
            "&" +
            "roomId=" +
            this.roomId +
            "&" +
            "time=" +
            this.time,

          headers: { "x-auth-token": token }
        });

        if (data.code == 0) {
          alert("增加成功");
          return;
        }
        if (data.code == 9994) {
          alert("Token不能为空");
          this.$router.push({ name: "login" });
          return;
        }
        if (data.code == 9995) {
          alert("Token已过期");
          this.$router.push({ name: "login" });
          return;
        }
        if (data.code == 9996) {
          alert("无效的Token");
          this.$router.push({ name: "login" });
          return;
        } else {
          alert(data.message);
        }
      }
    },
    async reduce() {
      if (
        this.roomId.length == 0 ||
        this.number.length == 0 ||
        this.time.length == 0
      ) {
        alert("设置数据不能为空");
      } else {
        var token = document.cookie.split(";")[0].split("=")[1];
        let { data } = await this.$axios({
          method: "get",
          url:
            "https://ddapp.blueseashark.cn/managerApi/robot-admin/reduceRobots?" +
            "num=" +
            this.number +
            "&" +
            "roomId=" +
            this.roomId +
            "&" +
            "time=" +
            this.time,

          headers: { "x-auth-token": token }
        });

        if (data.code == 0) {
          alert("减少成功");
          return;
        }
        if (data.code == 9994) {
          alert("Token不能为空");
          this.$router.push({ name: "login" });
          return;
        }
        if (data.code == 9995) {
          alert("Token已过期");
          this.$router.push({ name: "login" });
          return;
        }
        if (data.code == 9996) {
          alert("无效的Token");
          this.$router.push({ name: "login" });
          return;
        } else {
          alert(data.message);
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.xy3 {
  .top {
    li {
      margin-bottom: 10px;
      display: flex;
      width: 250px;
      justify-content: space-between;
      .d1 {
        line-height: 32px;
      }
    }
    .l2 {
      width: 490px;
      .text {
        font-size: 12px;
        line-height: 32px;
      }
    }
    .l3 {
      width: 330px;
      line-height: 32px;
    }
  }
  .but {
    margin-left: 85px;
    margin-top: 30px;
  }
}
</style>