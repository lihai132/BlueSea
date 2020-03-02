<template>
  <div class="jb1">
    <div
      class="tx"
    >(输入被举报人id查询单个举报信息，根据属性批量查询被举报的个人或被举报的房间，根据类型批量查询不同类型的举报，根据起始时间和结束时间批量查询某时间段内的举报信息)</div>
    <ul class="u1">
      <div class="d1">
        <li class="l1">
          <div>用户账号</div>
          <el-input size="small" placeholder v-model="yhid" style="width:103px"></el-input>
        </li>

        <li class="l2">
          <div>房间id</div>
          <el-input size="small" placeholder v-model="fjid" style="width:103px" disabled></el-input>
        </li>
      </div>

      <div class="d2">
        <li class="l3">
          <div>属性</div>
          <el-select v-model="sx" size="mini" style="width:106px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>

        <li class="l4">
          <div>类型</div>
          <el-select v-model="lx" size="mini" style="width:106px">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>
      </div>
      <div class="d3">
        <li class="l5">
          <span>从</span>
          <el-input size="small" placeholder v-model="first" style="width:165px"></el-input>
          <span>到</span>
          <el-input size="small" placeholder v-model="end" style="width:165px"></el-input>
        </li>
        <li class="l6">
          <el-button type="primary" @click="cx" size="small" style="width:103px">查询</el-button>
        </li>
      </div>
    </ul>

    <el-table
      :data="tableData"
      border
      style="width:1545px"
      @row-click="getDetails"
      :row-class-name="tableRowClassName"
      height="550"
    >
      <el-table-column prop="id" label="单号" width="158" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="createTime" label="举报时间" width="160"></el-table-column>
      <el-table-column prop="reporter" label="举报id" width="100"></el-table-column>
      <el-table-column prop="reporterNickName" label="举报人昵称" width="120"></el-table-column>
      <el-table-column prop="contact" label="联系方式" width="130"></el-table-column>
      <el-table-column prop="category" label="属性" width="90" :formatter="stateFormat1"></el-table-column>
      <el-table-column prop="reported" label="被举报id" width="80"></el-table-column>
      <el-table-column prop="reportType" label="类型" width="120" :formatter="stateFormat2"></el-table-column>
      <el-table-column prop="imageUrl" label="详情截图" width="80">
        <template scope="scope">
          <img :src="scope.row.images.imageUrl" width="59" height="40" class="jt" />
        </template>
      </el-table-column>
      <el-table-column prop="suggest" label="描述" width="180" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="zhzt" label="账号状态" width="80"></el-table-column>
      <el-table-column prop="status" label="状态" width="80" :formatter="stateFormat3"></el-table-column>
      <el-table-column label="操作" width="165">
        <el-button
          size="small"
          v-for="(item,index) in cz"
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
      options: [
        {
          value: "选项1",
          label: "举报个人"
        },
        {
          value: "选项2",
          label: "举报房间"
        }
      ],

      options1: [
        {
          value: "选项1",
          label: "泄露隐私"
        },
        {
          value: "选项2",
          label: "人生攻击"
        },
        {
          value: "选项3",
          label: "淫秽色情"
        },
        {
          value: "选项4",
          label: "垃圾广告"
        },
        {
          value: "选项5",
          label: "敏感信息"
        },
        {
          value: "选项6",
          label: "侵权"
        },
        {
          value: "选项7",
          label: "其他"
        }
      ],

      tableData: [],
      fjid: "",
      yhid: "",
      sx: "",
      lx: "",
      first: "",
      end: "",
      cz: ["封号", "解封"],
      val: {},
      name: "",
      formal: "https://ddapp.blueseashark.cn/managerApi",
      test: "https://ddapp-test.blueseashark.cn/managerApi"
    };
  },

  methods: {
    async cx() {
      if (
        this.yhid.length > 0 &&
        this.fjid.length === 0 &&
        this.first.length === 0 &&
        this.end.length === 0
      ) {
        var token = document.cookie.split(";")[0].split("=")[1];
        let param = new URLSearchParams();
        param.append("reported", this.yhid);

        let { data } = await this.$axios({
          method: "get",
          url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport?" + "reported=" + this.yhid,

          headers: { "x-auth-token": token }
        });

        let list = data.records;
        if (list.length != 0) {
          this.tableData = list;
          window.console.log(this.tableData);
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
          alert("当前查询用户无举报记录");
          this.tableData = [];
          return;
        }
      }
      if (
        this.first.length != 0 &&
        this.end.length != 0 &&
        this.yhid.length === 0 &&
        this.fjid.length === 0
      ) {
        token = document.cookie.split(";")[0].split("=")[1];

        let param = new URLSearchParams();
        param.append("statTime", this.first);
        param.append("endTime", this.end);

        let { data } = await this.$axios({
          method: "get",
          url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
          data: param,
          headers: { "x-auth-token": token }
        });
        let list = data.records;
        if (list.length != 0) {
          this.tableData = list;
          window.console.log(this.tableData);
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
          alert("当前时间段无举报记录");
          this.tableData = [];
          return;
        }
      }
      if (
        this.sx.length != 0 &&
        this.fjid.length == 0 &&
        this.first.length == 0 &&
        this.end.length == 0 &&
        this.yhid.length == 0 &&
        this.lx.length == 0
      ) {
        if (this.sx == "举报个人") {
          let num = 1;

          token = document.cookie.split(";")[0].split("=")[1];

          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          window.console.log(data.records);
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
        if (this.sx == "举报房间") {
          let num = 2;

          token = document.cookie.split(";")[0].split("=")[1];

          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
      }
      if (
        this.lx.length != 0 &&
        this.fjid.length == 0 &&
        this.first.length == 0 &&
        this.end.length == 0 &&
        this.yhid.length == 0 &&
        this.sx.length == 0
      ) {
        if (this.lx == "其他") {
          token = document.cookie.split(";")[0].split("=")[1];
          window.console.log(token);
          let num = 0;
          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
        if (this.lx == "泄露隐私") {
          token = document.cookie.split(";")[0].split("=")[1];
          window.console.log(token);
          let num = 1;
          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
        if (this.lx == "人生攻击") {
          token = document.cookie.split(";")[0].split("=")[1];
          window.console.log(token);
          let num = 2;
          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
        if (this.lx == "淫秽色情") {
          token = document.cookie.split(";")[0].split("=")[1];
          window.console.log(token);
          let num = 3;
          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
        if (this.lx == "垃圾广告") {
          token = document.cookie.split(";")[0].split("=")[1];
          window.console.log(token);
          let num = 4;
          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
        if (this.lx == "敏感信息") {
          token = document.cookie.split(";")[0].split("=")[1];
          window.console.log(token);
          let num = 5;
          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
        if (this.lx == "侵权") {
          token = document.cookie.split(";")[0].split("=")[1];
          window.console.log(token);
          let num = 6;
          let param = new URLSearchParams();
          param.append("reportType", num);

          let { data } = await this.$axios({
            method: "get",
            url: "https://ddapp.blueseashark.cn/managerApi/report/listUserReport",
            data: param,
            headers: { "x-auth-token": token }
          });
          let list = data.records;
          if (list.length > 0) {
            this.tableData = list;
            window.console.log(this.tableData);
            return;
          } else if (data.code == 9994) {
            alert("Token不能为空");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9995) {
            alert("Token已过期");
            this.$router.push({ name: "login" });
            return;
          } else if (data.code == 9996) {
            alert("无效的Token");
            this.$router.push({ name: "login" });
            return;
          } else if (list.length == 0) {
            alert("当前属性段无举报记录");
            this.tableData = [];
          } else {
            alert(data.message);
            return;
          }
        }
      }

      (this.fjid = ""),
        (this.yhid = ""),
        (this.sx = ""),
        (this.lx = ""),
        (this.first = ""),
        (this.end = "");
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.val = val;

      this.index = this.val.index;

      this.fs();
    },
    dj(item) {
      this.name = item;
    },
    async fs() {
      if (this.name === "封号") {
        var token = document.cookie.split(";")[0].split("=")[1];
        let param = new URLSearchParams();
        param.append("reportId", this.val.id);
        param.append("optType", 1);

        let { data } = await this.$axios({
          method: "post",
          url: "https://ddapp.blueseashark.cn/managerApi/report/dealReport",
          data: param,
          headers: { "x-auth-token": token }
        });

        if (data === true) {
          alert("封号成功");
          this.tableData[this.index].status = "已封号";
          return;
        } else if (data.code == 9994) {
          alert("Token不能为空");
          this.$router.push({ name: "login" });
          return;
        } else if (data.code == 9995) {
          alert("Token已过期");
          this.$router.push({ name: "login" });
          return;
        } else if (data.code == 9996) {
          alert("无效的Token");
          this.$router.push({ name: "login" });
          return;
        } else {
          alert(data.message);
          return;
        }
      }
      if (this.name === "解封") {
        token = document.cookie.split(";")[0].split("=")[1];
        let param = new URLSearchParams();
        param.append("reportId", this.val.id);
        param.append("optType", 0);

        let { data } = await this.$axios({
          method: "post",
          url: "https://ddapp.blueseashark.cn/managerApi/report/dealReport",
          data: param,
          headers: { "x-auth-token": token }
        });

        if (data === true) {
          alert("解封成功");
          this.tableData[this.index].status = "已解封";
          return;
        } else if (data.code == 9994) {
          alert("Token不能为空");
          this.$router.push({ name: "login" });
          return;
        } else if (data.code == 9995) {
          alert("Token已过期");
          this.$router.push({ name: "login" });
          return;
        } else if (data.code == 9996) {
          alert("无效的Token");
          this.$router.push({ name: "login" });
          return;
        } else if (data === false) {
          alert("解封失败");
          this.$router.push({ name: "login" });
          return;
        } else {
          alert(data.message);
          return;
        }
      }
    },
    stateFormat1(row) {
      if (row.category == 1) {
        return "个人";
      }
      if (row.category == 2) {
        return "房间";
      }
    },
    stateFormat2(row) {
      if (row.reportType == 0) {
        return "其他";
      }
      if (row.reportType == 1) {
        return "泄露隐私";
      }
      if (row.reportType == 2) {
        return "人身攻击";
      }
      if (row.reportType == 3) {
        return "淫秽色情";
      }
      if (row.reportType == 4) {
        return "垃圾广告";
      }
      if (row.reportType == 5) {
        return "敏感信息";
      }
      if (row.reportType == 6) {
        return "侵权";
      }
    },
    stateFormat3(row) {
      if (row.status == 0) {
        return "解封成功";
      }
      if (row.status == 1) {
        return "已封号";
      }
      if (row.status == "已封号") {
        return "已封号";
      }
      if (row.status == "已解封") {
        return "已解封";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.jb1 {
  .tx {
    margin-left: 40px;
    font-size: 12px;
    margin-bottom: 20px;
    color: #58bc58;
  }
  li {
    list-style: none;
  }
  .u1 {
    display: flex;
    width: 79.1%;
    padding-bottom: 20px;
    margin-left: 2.5rem;

    .l1,
    .l2 {
      display: flex;
      margin-right: 30px;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 65px;
      }
    }

    .l3 {
      display: flex;

      justify-content: flex-start;
      margin-right: 30px;

      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 22px;
        width: 2rem;
      }
    }

    .l4 {
      display: flex;

      justify-content: flex-start;
      margin-right: 162px;

      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 22px;
        width: 2rem;
      }
    }
    .l5 {
      margin-right: 30px;
      width: 435px;
      span {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 26px;
        margin-left: 0.625rem;
      }
    }
    .l6 {
      .el-button {
        margin-left: 330px;
      }
    }
    .l1,
    .l3,
    .l5 {
      margin-bottom: 16px;
    }
  }

  .el-table {
    margin-left: 2.5rem;
  }
}
</style>