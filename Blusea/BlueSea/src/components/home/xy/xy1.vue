<template>
  <div class="xy1">
    <div class="left">
      <ul class="top" style="width: 100%">
        <li>
          <div class="d1">房间id</div>
          <el-input size="small" placeholder v-model="roomId" style="width:50%"></el-input>
        </li>
        <li>
          <el-button size="small" style="width:105px" @click="cx">查询</el-button>
        </li>
      </ul>

      <div class="nav">
        <div class="d1">批量查询房间:</div>
        <div class="d2">
          <div class="text">当前页</div>
          <div class="input">
            <el-input size="small" placeholder v-model="currentPage" style="width:100px"></el-input>
          </div>
        </div>
        <div class="d3">
          <div class="text">查询数</div>
          <div class="input">
            <el-input size="small" placeholder v-model="pageSize" style="width:100px"></el-input>
          </div>
        </div>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 716px"
        :show-summary="true"
        @row-click="getDetails"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="roomId" label="房间id" width="80" style="text-align:center"></el-table-column>
        <el-table-column prop="name" label="房间名称" width="200"></el-table-column>
        <el-table-column prop="totalNum" label="在线人数" width="80"></el-table-column>
        <el-table-column
          prop="roomRate"
          label="协议号配比"
          width="100"
          style="text-align:center"
          :formatter="stateFormat"
        ></el-table-column>
        <el-table-column prop="robotNum" label="协议号人数" width="100"></el-table-column>
        <el-table-column prop="totalNum" label="总人数" width="80"></el-table-column>
        <el-table-column prop label="操作" width="75">
          <el-button size="small" style="width:50px" @click="bj">编辑</el-button>
        </el-table-column>
      </el-table>
    </div>
    <ul class="right" v-if="show">
      <li class="r1">
        <div class="d1">协议号配比</div>
        <el-input size="small" placeholder="请输入一个数字" v-model="rate" style="width:60%"></el-input>
      </li>
      <li class="r2">
        <el-button size="small" style="width:100px" @click="qx">取消</el-button>
        <el-button size="small" style="width:100px" @click="qd">确定添加</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],

      roomId: "",
      currentPage: "",
      pageSize: "",
      rate: "",
      show: false,
      id: ""
    };
  },
  methods: {
    async cx() {
      if (
        this.roomId.length != 0 &&
        this.currentPage.length == 0 &&
        this.pageSize.length == 0
      ) {
        var token = document.cookie.split(";")[0].split("=")[1];

        let { data } = await this.$axios.get(
          "https://ddapp.blueseashark.cn/managerApi/robot-admin/getRobotNum" +
            "?" +
            "roomId=" +
            this.roomId,

          { headers: { "x-auth-token": token } }
        );
        window.console.log(data);

        if (data.code === 0) {
          let list = data.data;

          this.tableData = [list];
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
          alert( data.message);
          return;
        }
      }
      if (
        this.roomId.length == 0 &&
        this.currentPage.length != 0 &&
        this.pageSize.length != 0
      ) {
        token = document.cookie.split(";")[0].split("=")[1];

        let { data } = await this.$axios.get(
          "https://ddapp.blueseashark.cn/managerApi/robot-admin/getRobotNumPage" +
            "?" +
            "currentPage=" +
            this.currentPage +
            "&" +
            "pageSize=" +
            this.pageSize,

          { headers: { "x-auth-token": token } }
        );
        window.console.log(data);

        if (data.code === 0) {
          let res = data.data;
          let list = res.records;
          this.tableData = list;
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
          alert( data.message);
          return;
        }
      }
    },
    bj() {
      this.show = true;
    },
    qx() {
      this.show = false;
    },
    async qd() {
      if (this.rate.length === 0) {
        alert("协议号配比不能为空");
      } else {
        var token = document.cookie.split(";")[0].split("=")[1];
        let { data } = await this.$axios.get(
          "https://ddapp.blueseashark.cn/managerApi/robot-admin/setRoomRate" +
            "?" +
            "rate=" +
            this.rate +
            "&" +
            "roomId=" +
            this.roomId,

          { headers: { "x-auth-token": token } }
        );

        if (data.code === 0) {
          alert("设置协议号配比成功");
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
          alert( data.message);
        }
        this.qx();
      }
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.id = val.roomId;
    },
    stateFormat(row) {
      if (row.category == null) {
        return "0";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.xy1 {
  display: flex;

  li {
    list-style-type: none;
  }

  .left {
    .top {
      display: flex;
      padding-left: 0;
      justify-content: space-between;
      padding-bottom: 20px;
      li:nth-child(1) {
        display: flex;

        .d1 {
          font-size: 1rem;
          line-height: 1.75rem;
          margin-right: 0.75rem;
        }
      }
    }
  }
  .right {
    width: 13.375rem;
    height: 111px;
    border: 1px solid #ccc;
    margin-left: 100px;
    padding: 20px 20px;
    .r1 {
      display: flex;
      justify-content: space-between;
      .d1 {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
    .r2 {
      margin-top: 25px;
    }
  }
  .nav {
    display: flex;
    margin-bottom: 20px;
    .d1 {
      line-height: 32px;
      margin-right: 20px;
    }
    .d2 {
      display: flex;
      width: 200px;
      .text {
        line-height: 32px;
        margin-right: 7px;
      }
    }

    .d3 {
      display: flex;
      .text {
        line-height: 32px;
        margin-right: 7px;
      }
    }
  }
}
</style>