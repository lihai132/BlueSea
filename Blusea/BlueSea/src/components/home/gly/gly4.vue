<template>
  <div class="gly4">
    <div class="top">
      <div class="title">查询管理员</div>
      <div class="text">(查询单个用户只需要输入登录账号或用户名即可，查询是否启用请输入0或者1，批量查询请输入页码和分页大小)</div>
    </div>
    <div class="nav">
      <div class="t1">
        <div class="n1">
          <div class="mm">登录账号：</div>
          <el-input v-model="loginAccount" placeholder="请输入用户账号" style="width:200px"></el-input>
        </div>

        <div class="n2">
          <div class="mm">用户名：</div>
          <el-input v-model="username" placeholder="请输入用户名" style="width:200px"></el-input>
        </div>
      </div>

      <div class="t2">
        <div class="n3">
          <div class="mm">用是否启用：</div>
          <el-input v-model="enable" placeholder="0:启用;1:停用" style="width:200px"></el-input>
        </div>

        <div class="n4">
          <div class="mm">页码：</div>
          <el-input v-model="pageNo" placeholder="请输入用页码" style="width:200px"></el-input>
        </div>
      </div>

      <div class="t3">
        <div class="n5">
          <div class="mm">分页大小：</div>
          <el-input v-model="pageSize" placeholder="请输入分页大小" style="width:200px"></el-input>
        </div>
        <el-button type="primary" @click="cx">查询</el-button>
      </div>
    </div>

    <el-table
      :data="list"
      border
      style="width:1521px"
      @row-click="getDetails"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="id" label="用户id" width="180" style="text-align:center"></el-table-column>
      <el-table-column prop="loginAccount" label="用户账号" width="130"></el-table-column>
      <el-table-column prop="password" label="密码" width="790"></el-table-column>
      <el-table-column prop="username" label="用户名" width="150" style="text-align:center"></el-table-column>
      <el-table-column prop="enable" label="状态" width="80" :formatter="stateFormat"></el-table-column>
      <el-table-column prop label="操作" width="190">
        <el-button
          size="small"
          v-for="(item,index) in title"
          :key="index"
          @click="getDetails;dj(item)"
        >{{item}}</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginAccount: "",
      username: "",
      enable: "",
      pageNo: "",
      pageSize: "",
      list: [],
      title: ["删除", "重置密码"],
      index: "",
      val: {},
      show: false,
      input1: "",
      input2: "",
      input3: ""
    };
  },
  methods: {
    async cx() {
      if (
        this.loginAccount.length != 0 &&
        this.username.length === 0 &&
        this.enable.length === 0 &&
        this.pageNo.length === 0 &&
        this.pageSize.length === 0
      ) {
        var token = document.cookie.split(";")[0].split("=")[1];
        window.console.log(token);
        let param = new URLSearchParams();
        param.append("loginAccount", this.loginAccount);

        let { data } = await this.$axios({
          method: "post",
          url: "https://ddapp.blueseashark.cn/managerApi/user-admin/get-users",
          data: param,
          headers: { "x-auth-token": token }
        });
        window.console.log(data);
        if (data.data.records.length > 0) {
          this.list = data.data.records;
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
        if (data.data.records.length === 0) {
          alert("请检查当前查询的用户信息是否正确");
          this.list = [];
        } else {
          alert(data.code, data.message);
          return;
        }
      }
      if (
        this.username.length != 0 &&
        this.loginAccount.length === 0 &&
        this.enable.length === 0 &&
        this.pageNo.length === 0 &&
        this.pageSize.length === 0
      ) {
        token = document.cookie.split(";")[0].split("=")[1];
        window.console.log(token);
        let param = new URLSearchParams();
        param.append("username", this.username);

        let { data } = await this.$axios({
          method: "post",
          url: "https://ddapp.blueseashark.cn/managerApi/user-admin/get-users",
          data: param,
          headers: { "x-auth-token": token }
        });

        window.console.log(data.data.records);
        if (data.data.records.length > 0) {
          this.list = data.data.records;
          window.console.log(this.list);
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
        if (data.data.records.length === 0) {
          alert("请检查当前查询的用户信息是否正确");
          this.list = [];
          return;
        } else {
          alert(data.code, data.message);
          return;
        }
      }
      if (
        this.enable.length != 0 &&
        this.loginAccount.length === 0 &&
        this.username.length === 0 &&
        this.pageNo.length === 0 &&
        this.pageSize.length === 0
      ) {
        token = document.cookie.split(";")[0].split("=")[1];
        window.console.log(token);
        let param = new URLSearchParams();
        param.append("enable", this.enable);

        let { data } = await this.$axios({
          method: "post",
          url: "https://ddapp.blueseashark.cn/managerApi/user-admin/get-users",
          data: param,
          headers: { "x-auth-token": token }
        });

        window.console.log(data.data.records);
        if (data.data.records.length > 0) {
          this.list = data.data.records;
          window.console.log(this.list);
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
        if (data.data.records.length === 0) {
          alert("暂时没有被停用的管理员的信息");
          this.list = [];
          return;
        } else {
          alert(data.code, data.message);
          return;
        }
      }
      if (
        this.pageNo.length != 0 &&
        this.pageSize.length != 0 &&
        this.loginAccount.length === 0 &&
        this.username.length === 0 &&
        this.enable.length === 0
      ) {
        token = document.cookie.split(";")[0].split("=")[1];
        window.console.log(token);
        let param = new URLSearchParams();
        param.append("pageNo", this.pageNo);
        param.append("pageSize", this.pageSize);

        let { data } = await this.$axios({
          method: "post",
          url: "https://ddapp.blueseashark.cn/managerApi/user-admin/get-users",
          data: param,
          headers: { "x-auth-token": token }
        });
        window.console.log(data.data.records);
        if (data.data.records.length > 0) {
          this.list = data.data.records;
          window.console.log(this.list);
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
        if (data.data.records.length === 0) {
          alert("请检查当前查询的用户信息是否正确");
          return;
        } else {
          alert(data.code, data.message);
          return;
        }
      }
    },
    tableRowClassName({ rowIndex }) {
      this.index = rowIndex;
    },
    getDetails(val) {
      this.val = val;
      this.input1 = val.loginAccount;
      this.input2 = val.password;
      this.input3 = val.username;

      this.fs();
    },
    dj(title) {
      this.name = title;
    },

    async fs() {
      if (this.name === "重置密码") {
        var token = document.cookie.split(";")[0].split("=")[1];
        window.console.log(token);
        let param = new URLSearchParams();
        param.append("ids", this.val.id);

        let { data } = await this.$axios({
          method: "post",
          url:
            "https://ddapp.blueseashark.cn/managerApi/user-admin/rest-password",
          data: param,
          headers: { "x-auth-token": token }
        });

        window.console.log(data);
        if (data.code == 0) {
          alert("重置密码成功");
          this.cx();
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
          alert("重置密码失败");
          return;
        }
      }
      if (this.name === "删除") {
        token = document.cookie.split(";")[0].split("=")[1];
        window.console.log(token);
        let param = new URLSearchParams();
        param.append("ids", this.val.id);

        let { data } = await this.$axios({
          method: "post",
          url:
            "https://ddapp.blueseashark.cn/managerApi/user-admin/delete-user",
          data: param,
          headers: { "x-auth-token": token }
        });

        window.console.log(data);
        if (data.code == 0) {
          this.cx();
          alert("删除成功");
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
    },
    stateFormat(row) {
      if (row.enable === 0) {
        return "启用";
      } else {
        return "停用";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.gly4 {
  .top {
    display: flex;
    .title {
      font-size: 20px;
      padding-bottom: 20px;
    }
    .text {
      font-size: 12px;
      color: #58bc58;
      line-height: 24px;
    }
  }
  .nav {
    margin-bottom: 20px;
    .t1,
    .t2 {
      display: flex;
      padding-bottom: 10px;
    }

    .t3 {
      display: flex;
      padding-bottom: 10px;
    }
  }
  .n1,
  .n2,
  .n3,
  .n4,
  .n5 {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin-right: 40px;
    width: 300px;
  }
  .n5 {
    margin-right: 390px;
  }
}
</style>