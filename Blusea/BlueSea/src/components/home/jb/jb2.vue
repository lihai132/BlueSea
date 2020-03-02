<template>
  <div class="jb2">
    <div class="top">请输入用户编号或身份识别号进行封号或者解封</div>
    <ul class="u1">
      <li class="l1">
        <div class="d1">用户编号</div>
        <el-input size="small" placeholder v-model="userName" style="width:150px"></el-input>
      </li>
      <li class="l2">
        <div class="d1">身份识别号</div>
        <el-input size="small" placeholder v-model="userNumber" style="width:150px"></el-input>
      </li>
    </ul>

    <div class="but">
      <el-button type="success" size="small" @click="fh">封号</el-button>
      <el-button type="success" size="small" @click="jf">解封</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      userNumber: ""
    };
  },
  methods: {
    async fh() {
      var token = document.cookie.split(";")[0].split("=")[1];
      if (this.userName.length != 0 && this.userNumber.length == 0) {
        let { data } = await this.$axios({
          method: "get",
          url:
            "https://ddapp.blueseashark.cn/managerApi/user/LockUserToggle?optType=1&" +
            "userId=" +
            this.userName,

          headers: { "x-auth-token": token }
        });
        window.console.log(data);
        if (data == true) {
          alert("封号成功");
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
        }
        if (data.code == 10100) {
          alert("用户不存在");
          return;
        } else {
          alert(data.code, data.message);
          return;
        }
      }
      if (this.userName.length == 0 && this.userNumber.length != 0) {
        let { data } = await this.$axios({
          method: "get",
          url:
            "https://ddapp.blueseashark.cn/managerApi/user/LockUserToggle?optType=1&" +
            "identityId=" +
            this.userNumber,

          headers: { "x-auth-token": token }
        });
        if (data == true) {
          alert("封号成功");
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
        }
        if (data.code == 10100) {
          alert("用户不存在");
          return;
        } else {
          alert(data.code, data.message);
          return;
        }
      }
    },
    async jf() {
      var token = document.cookie.split(";")[0].split("=")[1];
      if (this.userName.length != 0 && this.userNumber.length == 0) {
        let { data } = await this.$axios({
          method: "get",
          url:
            "https://ddapp.blueseashark.cn/managerApi/user/LockUserToggle?optType=0&" +
            "userId=" +
            this.userName,

          headers: { "x-auth-token": token }
        });
        if (data == true) {
          alert("解封成功");
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
        }
        if (data.code == 10100) {
          alert("用户不存在");
          return;
        } else {
          alert(data.code, data.message);
          return;
        }
      }
      if (this.userName.length == 0 && this.userNumber.length != 0) {
        let { data } = await this.$axios({
          method: "get",
          url:
            "https://ddapp.blueseashark.cn/managerApi/user/LockUserToggle?optType=0&" +
            "identityId=" +
            this.userNumber,

          headers: { "x-auth-token": token }
        });
        if (data == true) {
          alert("解封成功");
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
        }
        if (data.code == 10100) {
          alert("用户不存在");
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
.jb2 {
  .top {
    font-size: 12px;
    color: #58bc58;
  }
  .u1 {
    display: flex;
    margin-top: 20px;
    li {
      display: flex;
      margin-right: 40px;
      .d1 {
        line-height: 32px;
        margin-right: 5px;
      }
    }
  }
  .but {
    margin-top: 50px;
    margin-left: 217px;
  }
}
</style>