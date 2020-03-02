<template>
  <div class="main1">
    <div class="xg">
      <div class="title">修改管理员</div>
      <div class="conter">
        <div class="c1">
          <div class="mm">登录账户</div>
          <el-input v-model="loginAccount" placeholder="请输入用户账号" style="width:300px"></el-input>
        </div>

        <div class="c3">
          <div class="mm">用户名：</div>
          <el-input v-model="username" placeholder="请输入用户名" style="width:300px"></el-input>
        </div>
      </div>

      <div class="qd">
        <el-button type="primary" @click="qd">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginAccount: "",
      username: ""
    };
  },
  methods: {
    async qd() {
      if (this.loginAccount.length === 0 || this.username.length === 0) {
        alert("请输入用户账号和用户名");
      } else {
        var token = document.cookie.split(";")[0].split("=")[1];
        let param = new URLSearchParams();
        param.append("loginAccount", this.loginAccount);
        param.append("username", this.username);

        let { data } = await this.$axios({
          method: "post",
          url: "https://ddapp.blueseashark.cn/managerApi/user-admin/edit-user",
          data: param,
          headers: { "x-auth-token": token }
        });

        window.console.log(data);
        if (data.code === 0) {
          this.input1 = "";
          this.input2 = "";
          alert("修改成功");
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
.xg {
  margin: auto;
  border: 1px solid #ccc;
  width: 500px;
  padding: 40px;
  .title {
    width: 500px;
    font-size: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
  .conter {
    width: 400px;
    .c1 {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      font-size: 16px;
      line-height: 40px;
    }

    .c3 {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      font-size: 16px;
      line-height: 40px;
    }
  }

  .qd {
    width: 500px;
    text-align: center;
    margin-top: 20px;
  }
}
</style>