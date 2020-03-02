<template>
  <div class="login">
    <h4>快游后台管理系统</h4>
    <div style="margin: 20px;"></div>

    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户账号">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="formLabelAlign.password"></el-input>
      </el-form-item>
    </el-form>

    <div class="dl">
      <el-button type="success" @click="dl">登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    async dl() {
      if (
        this.formLabelAlign.name.length === 0 ||
        this.formLabelAlign.password.length === 0
      ) {
        alert("账号密码不能为空");
      } else {
        let { data } = await this.$axios.post("https://ddapp.blueseashark.cn/managerApi/login", null, {
          params: {
            username: this.formLabelAlign.name,
            password: this.formLabelAlign.password
          }
        });
        window.console.log(data);

        if (data.accessToken) {
          document.cookie = "Token" + "=" + data.accessToken;
          this.$router.push({ name: "lw1" });
          return;
        }
        if (data.code === 40001) {
          alert("请确认账号或密码是否正确是否正确");
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
.login {
  width: 400px;
  height: 200px;
  border: 1px solid #ccc;
  padding: 30px 30px;
  margin: auto;
  margin-top: 50px;
  h4 {
    text-align: center;
    margin-top: 0;
    color: rgba($color: #000000, $alpha: 0.7);
  }
  .dl {
    text-align: center;
  }

  .el-input {
    width: 90%;
  }
}
</style>