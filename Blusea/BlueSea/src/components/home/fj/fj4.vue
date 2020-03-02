<template>
  <div class="fj4">
    <ul class="u1">
      <li>
        <div class="d1">房间id</div>
        <el-input size="small" placeholder v-model="roomId" style="width:150px"></el-input>
      </li>

      <li>
        <div class="d1">用户id</div>
        <el-input size="small" placeholder v-model="userIds" style="width:150px"></el-input>
      </li>
    </ul>

    <div class="d2">
      <el-button size="small" style="width:100px" @click="qd">确定</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roomId: "",
      userIds: ""
    };
  },

  methods: {
    async qd() {
      var token = document.cookie.split(";")[0].split("=")[1];
      if (this.roomId.length == 0 || this.userIds.length == 0) {
        alert("房间id或用户id不能为空");
      } else {
        let { data } = await this.$axios.get(
          "/api/user/removeRtcUser?" +
            "roomId=" +
            this.roomId +
            "&" +
            "userIds=" +
            this.userIds,

          { headers: { "x-auth-token": token } }
        );
        if (data == true) {
          alert("踢人成功");
          return;
        }
        if (data.code == 40130) {
          alert("RTC移除用户失败");
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
          return;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.fj4 {
  .u1 {
    li {
      display: flex;
      width: 210px;
      justify-content: space-between;
      margin-bottom: 10px;
      .d1 {
        line-height: 32px;
      }
    }
  }
  .d2 {
    margin-top: 30px;
    margin-left: 60px;
  }
}
</style>