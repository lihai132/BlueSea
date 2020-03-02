<template>
  <div class="gly1">
    <div class="title">添加管理员</div>
    <div class="nav">
      <div class="n1">
        <div class="mm">用户账号：</div>
        <el-input v-model="loginAccount" placeholder="请输入用户账号" style="width:300px"></el-input>
      </div>

      <div class="n2">
        <div class="mm">用户密码：</div>
        <el-input v-model="password" placeholder="请输入用户密码" style="width:300px"></el-input>
      </div>

      <div class="n3">
        <div class="mm">用户名：</div>
        <el-input v-model="username" placeholder="请输入用户名" style="width:300px"></el-input>
      </div>
    </div>

    <div class="tj">
      <el-button type="primary" @click="tj">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginAccount: "",
      username: "",
      password: ""
    };
  },
  methods: {
    async tj() {
      if (
        this.loginAccount.length === 0 ||
        this.username.length === 0 ||
        this.password.length === 0
      ) {
        alert("账号密码不能为空");
      } else {
        var token = document.cookie.split(";")[0].split("=")[1];
        window.console.log(token);
        let param = new URLSearchParams();
        param.append("loginAccount", this.loginAccount);
        param.append("username", this.username);
        param.append("password", this.password);

        let { data } = await this.$axios({
          method: "post",
          url:
            "https://ddapp.blueseashark.cn/managerApi/user-admin/add-user",
          data: param,
          headers: { "x-auth-token": token }
        });

        window.console.log(data);
        this.loginAccount = "";
        this.username = "";
        this.password = "";
        if (data.code === 0) {
          alert("添加成功");
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
        if (data.code === 9999) {
          alert("添加失败，用户账号可能已存在");
          return;
        }
        if (data.code == 90101) {
          alert("添加失败，用户账号可能已存在");
          return;
        } else {
          alert( data.message);
          return;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.gly1 {
  .title {
    width: 500px;
    font-size: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
  .nav {
    width: 400px;
    .n1 {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      font-size: 16px;
      line-height: 40px;
    }
    .n2 {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      font-size: 16px;
      line-height: 40px;
    }

    .n3 {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      font-size: 16px;
      line-height: 40px;
    }
  }

  .tj {
    width: 500px;
    text-align: center;
    margin-top: 20px;
  }
}
</style>