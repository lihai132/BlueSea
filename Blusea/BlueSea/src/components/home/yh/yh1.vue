<template>
  <div class="yh1">
    <div class="box" v-if="show">
      <ul class="u1">
        <li class="l1">
          <div>id</div>
          <el-input size="small" placeholder v-model="id" style="width:130px"></el-input>
        </li>

        <li class="l2">
          <div>手机</div>
          <el-input size="small" placeholder v-model="sj" style="width:130px"></el-input>
        </li>

        <li class="l3">
          <div>性别</div>
          <el-select v-model="xb" size="mini" style="width:75px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>
        <li class="l4">
          <div>状态</div>
          <el-select v-model="zt" size="mini" style="width:75px">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>

        <li class="l5">
          <div>归属</div>
          <el-select v-model="gs" size="mini" style="width:75px">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>

        <li class="l6">
          <span>注册时间</span>
          <span>从</span>
          <el-input size="small" placeholder v-model="time1" style="width:130px"></el-input>
          <span>到</span>
          <el-input size="small" placeholder v-model="time2" style="width:130px"></el-input>
        </li>
        <el-button size="small" style="width:130px">查询</el-button>
      </ul>
      <ul class="u2">
        <li class="l1">
          <span class="s1">财富值</span>
          <span>从</span>
          <el-input size="small" placeholder v-model="time3" style="width:130px"></el-input>
          <span>到</span>
          <el-input size="small" placeholder v-model="time4" style="width:130px"></el-input>
        </li>
        <li class="l2">
          <span class="s1">魅力值</span>
          <span>从</span>
          <el-input size="small" placeholder v-model="time5" style="width:130px"></el-input>
          <span>到</span>
          <el-input size="small" placeholder v-model="time6" style="width:130px"></el-input>
        </li>
      </ul>
      <el-table
        :data="tableData"
        border
        style="font-size: 12px;width:1454px"
        @row-click="getDetails"
        :row-class-name="tableRowClassName"
        show-summary
        :summary-method="getSummaries"
      >
        >
        <el-table-column prop="id" label="id" width="100"></el-table-column>
        <el-table-column prop="phone" label="手机" width="100"></el-table-column>
        <el-table-column prop="nickName" label="昵称" width="113"></el-table-column>
        <el-table-column prop="sex" label="性别" width="50" :formatter="stateFormat"></el-table-column>
        <el-table-column prop="fortune" label="财富值" width="80"></el-table-column>
        <el-table-column prop="charm" label="魅力值" width="80"></el-table-column>
        <el-table-column prop="dlip" label="登录ip" width="100"></el-table-column>
        <el-table-column prop="sbh" label="设备号" width="120"></el-table-column>
        <el-table-column prop="diamond" label="剩余积分" width="80"></el-table-column>
        <el-table-column prop="points" label="剩余砖石" width="80"></el-table-column>
        <el-table-column prop="fristtime" label="注册时间" width="130"></el-table-column>
        <el-table-column prop="endtime" label="最后登录时间" width="130"></el-table-column>
        <el-table-column prop="onlineStatus" label="状态" width="60" :formatter="stateFormat1"></el-table-column>
        <el-table-column prop="gs" label="归属" width="60"></el-table-column>

        <el-table-column label="操作" width="170">
          <el-button
            size="small"
            v-for="(item,index) in title"
            :key="index"
            @click="getDetails;dj(item)"
          >{{item}}</el-button>
        </el-table-column>
      </el-table>
    </div>
    <zjmx v-if="show1" v-on:fh="fh" :uid="uid"></zjmx>
  </div>
</template>
<script>
import zjmx from "./zjmx.vue";
export default {
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "启用"
        },
        {
          value: "选项2",
          label: "禁用"
        }
      ],

      options: [
        {
          value: "选项1",
          label: "男"
        },
        {
          value: "选项2",
          label: "女"
        }
      ],

      options2: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "市场"
        },
        {
          value: "选项3",
          label: "公会"
        }
      ],

      tableData: [
        {
          id: 112233,
          phone: 18617271159,
          nickName: "我是小霸王",
          sex: "男",
          fortune: 10000,
          charm: 20101,
          dlip: "1a65sdf",
          sbh: "1a65sdf",
          diamond: 200,
          points: 156,
          fristtime: "2019-10-11 15:00",
          endtime: "2019-12-31 23:59",
          onlineStatus: "离线",
          gs: "市场"
        }
      ],
      title: ["禁用", "资金明细"],
      id: "",
      uid: "",
      sj: "",
      xb: "全部",
      zt: "全部",
      gs: "全部",

      time1: "",
      time2: "",
      time3: "",
      time4: "",
      time5: "",
      time6: "",
      num: "",
      show: true,
      show1: false,
      cfz: "",
      mlz: "",
      zf: "",
      zs: ""
    };
  },
  components: {
    zjmx
  },
  methods: {
    // async cx() {
    //   if (this.id.length == 0) {
    //     alert("查询id不能为空");
    //   } else {
    //     let { data } = await this.$axios.post(
    //       "http://121.41.9.242:8082/inside/user/findUserByUserId",
    //       null,
    //       {
    //         params: {
    //           userId: this.id
    //         }
    //       }
    //     );

    //     if (data.code) {
    //       alert("请确认输入id是否正确");
    //     } else {
    //       this.tableData = [data];
    //     }

    //     //自定义合计
    //     let cfz = 0;
    //     this.tableData.map(item => {
    //       return (cfz += item.fortune);
    //     });
    //     this.cfz = cfz;

    //     let mlz = 0;
    //     this.tableData.map(item => {
    //       return (mlz += item.charm);
    //     });
    //     this.mlz = mlz;

    //     let zf = 0;
    //     this.tableData.map(item => {
    //       return (zf += item.diamond);
    //     });
    //     this.zf = zf;

    //     let zs = 0;
    //     this.tableData.map(item => {
    //       return (zs += item.points);
    //     });
    //     this.zs = zs;
    //   }
    // },
    //自定义合计方法
    getSummaries(param) {
      const { columns } = param;

      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总计";
          return;
        }
        //this.closeList等等是后台返回的总的数据，然后取值到这里
        switch (column.property) {
          case "fortune":
            sums[index] = this.cfz;
            break;
          case "charm":
            sums[index] = this.mlz;
            break;
          case "diamond":
            sums[index] = this.zf;
            break;
          case "points":
            sums[index] = this.zs;
            break;
          default:
            break;
        }
      });

      return sums;
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.uid = val.id;
      this.fs();
    },
    dj(title) {
      this.name = title;
    },
    fs() {
      if (this.name === "资金明细") {
        this.mx();
        this.name = "";
      }
      if (this.name === "禁用") {
        let sj = {
          name: this.name,
          id: this.uid
        };
        window.console.log(sj);
        this.name = "";
      }
    },

    mx() {
      this.show = !this.show;
      this.show1 = true;
      window.console.log("明细", this.uid);
    },
    fh() {
      this.show = true;
      this.show1 = false;
    },
    stateFormat(row) {
      if (row.state === 1) {
        return "男";
      } else {
        return "女";
      }
    },
    stateFormat1(row) {
      if (row.state === 1) {
        return "上线";
      }
      if (row.state === 2) {
        return "离线";
      } else {
        return "断线";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.yh1 {
  li {
    list-style: none;
  }

  .box {
    .u1 {
      display: flex;
      width: 90.1%;
      padding-bottom: 20px;
      margin-left: 2.5rem;

      .l1 {
        display: flex;
        margin-right: 20px;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
        }
      }

      .l2 {
        display: flex;
        margin-right: 20px;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
          width: 33px;
        }
      }

      .l3 {
        display: flex;

        justify-content: flex-start;
        margin-right: 30px;

        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
          width: 2rem;
        }
      }

      .l4 {
        display: flex;

        justify-content: flex-start;
        margin-right: 20px;

        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
          width: 2rem;
        }
      }

      .l5 {
        display: flex;

        justify-content: flex-start;
        margin-right: 75px;

        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
          width: 2rem;
        }
      }
      .l6 {
        margin-right: 30px;
        width: 416px;
        span {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.625rem;
          margin-left: 0.625rem;
        }
      }
    }

    .u2 {
      display: flex;
      margin-left: 2.5rem;
      padding-bottom: 20px;

      .l1,
      .l2 {
        display: flex;
        margin-right: 100px;
        width: 410px;
        span {
          font-size: 1rem;
          line-height: 2rem;
        }
        .el-input {
          margin-right: 10px;
          margin-left: 10px;
        }
        .s1 {
          margin-right: 30px;
        }
      }
    }

    .el-table {
      margin-left: 2.5rem;
    }

    .hj {
      margin-left: 2.5rem;
      display: flex;
      .h1 {
        width: 78px;
        font-size: 16px;
        line-height: 55px;
        border: 1px solid #ebeef5;
      }
      .h2 {
        width: 99px;
        font-size: 16px;
        line-height: 55px;
        border: 1px solid #ebeef5;
      }
    }
  }
}
</style>