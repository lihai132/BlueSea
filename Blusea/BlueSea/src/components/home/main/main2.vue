<template>
  <div class="main2">
    <div class="xg">
      <div class="title">修改密码</div>
      <div class="conter">
        <div class="c1">
          <div class="mm">旧密码</div>
          <el-input v-model="input1" placeholder="请输入旧密码" style="width:300px"></el-input>
        </div>

        <div class="c3">
          <div class="mm">新密码</div>
          <el-input v-model="input2" placeholder="请输入新密码" style="width:300px"></el-input>
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
      input1: "",
      input2: ""
    };
  },
  methods: {
    async qd() {
      if (this.input1.length === 0 || this.input2.length === 0) {
        alert("请输入旧密码和新密码");
      } else {
        var token = document.cookie.split(";")[0].split("=")[1];
        window.console.log(token);
        let param = new URLSearchParams();
        param.append("oldPassword", this.input1);
        param.append("newPassword", this.input2);

        let { data } = await this.$axios({
          method: "post",
          url:
            "https://ddapp.blueseashark.cn/managerApi/user-admin/modify-password",
          data: param,
          headers: { "x-auth-token": token }
        });

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
        }
        if (data.code == 90102) {
          alert("旧密码不匹配");
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