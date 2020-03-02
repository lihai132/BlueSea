<template>
  <div class="zd2">
    <div class="top">
      <ul class="u1">
        <li>
          <span>用户id</span>
          <el-input size="small" v-model="userid" style="width:50%"></el-input>
        </li>

        <li>
          <span>房间id</span>
          <el-input size="small" v-model="fjid" style="width:50%"></el-input>
        </li>

        <li>
          <span>从</span>
          <el-input size="small" v-model="time1" style="width:30%"></el-input>
          <span>到</span>
          <el-input size="small" v-model="time2" style="width:30%"></el-input>
        </li>
        <el-button size="small" @click="buttom">查询</el-button>
        <el-button size="small" @click="exportExcel">导出</el-button>
      </ul>
    </div>

    <el-table
      :data="tableData"
      border
      style="width:871px"
      show-summary
      :summary-method="getSummaries"
    >
      <el-table-column prop="userid" label="用户id" width="100" align="center"></el-table-column>
      <el-table-column prop="fjid" label="房间id" width="100" align="center"></el-table-column>
      <el-table-column prop="je" label="消费金额" width="150" align="center"></el-table-column>
      <el-table-column prop="time" label="时间" width="200" align="center"></el-table-column>
      <el-table-column prop="jp" label="奖品" width="200" align="center"></el-table-column>
      <el-table-column prop="price" label="价值" width="120" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          userid: "123455",
          fjid: "112233",
          je: 123456,
          time: "2019-10-22 17:00",
          jp: "梦幻城堡",
          price: 9999
        },
        {
          userid: "123455",
          fjid: "112233",
          je: 123456,
          time: "2019-10-22 17:00",
          jp: "梦幻城堡",
          price: 9999
        },
        {
          userid: "123455",
          fjid: "112233",
          je: 123456,
          time: "2019-10-22 17:00",
          jp: "梦幻城堡",
          price: 9999
        },
        {
          userid: "123455",
          fjid: "112233",
          je: 123456,
          time: "2019-10-22 17:00",
          jp: "梦幻城堡",
          price: 9999
        }
      ],
      userid: "",
      fjid: "",
      time1: "",
      time2: "",
      je: "",
      price: ""
    };
  },

  methods: {
    buttom() {
      if (
        this.userid.length === 0 ||
        this.fjid.length === 0 ||
        this.time1.length === 0 ||
        this.time2.length === 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let value = {
          userid: this.userid,
          fjid: this.fjid,
          time: this.time
        };
        window.console.log(value);
        this.userid = "";
        this.fjid = "";
        this.time = "";

        let je = 0;
        this.tableData.map(item => {
          return (je += item.je);
        });
        this.je = je;

        let price = 0;
        this.tableData.map(item => {
          return (price += item.price);
        });
        this.price = price;
      }
    },
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
          case "je":
            sums[index] = this.je;
            break;
          case "price":
            sums[index] = this.price;
            break;
          default:
            break;
        }
      });

      return sums;
    },
    exportExcel() {
      require.ensure([], () => {
        const {
          export_json_to_excel
        } = require("../../../excel/Export2Excel.js");
        const tHeader = [
          "用户id",
          "房间id",
          "消费金额",
          "时间",
          "奖品",
          "价值"
        ];
        // 上面设置Excel的表格第一行的标题
        const filterVal = ["userid", "fjid", "je", "time", "jp", "price"];
        // 上面的index、nickName、name是tableData里对象的属性
        const list = this.tableData; //把data里的tableData存到list
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "砸蛋数据");
      });
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
}

.zd2 {
  .top {
    padding-bottom: 30px;
    .u1 {
      display: flex;
      justify-content: flex-start;
      padding-left: 0px;
      width: 53%;
      li {
        margin-right: 1.25rem;
        display: flex;
        span {
          font-size: 1rem;
          line-height: 32px;
          margin-right: 7px;
          margin-left: 7px;
        }
      }
      .el-button {
        margin-left: 0.625rem;
      }
    }
  }
}
</style>