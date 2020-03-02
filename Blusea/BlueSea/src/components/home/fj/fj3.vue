<template>
  <div class="fj3">
    <ul class="u1">
      <li class="l1">
        <div>房间id</div>
        <el-input size="small" placeholder v-model="dh" style="width:50%"></el-input>
      </li>

      <!-- <li class="l2">
        <div>房主id</div>
        <el-input size="small" placeholder v-model="id" style="width:50%"></el-input>
      </li>-->

      <li class="l3">
        <div>房间类型</div>
        <el-select v-model="fjlx" size="mini" style="width:40%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>
      <li class="l4">
        <span>从</span>
        <el-input size="small" placeholder v-model="first" style="width:30%"></el-input>
        <span>到</span>
        <el-input size="small" placeholder v-model="end" style="width:30%"></el-input>
      </li>
      <el-button size="small" style="width:105px" @click="cx">查询</el-button>
    </ul>

    <el-table
      :data="tableData"
      border
      style="width:1090px"
      show-summary
      :summary-method="getSummaries"
    >
      <el-table-column prop="time" label="日期" width="220"></el-table-column>
      <el-table-column prop="fjid" label="房间id" width="100"></el-table-column>
      <el-table-column prop="fjname" label="房间名" width="201"></el-table-column>
      <el-table-column prop="fjlx" label="房间类型" width="120"></el-table-column>
      <el-table-column prop="userid" label="房主id" width="100"></el-table-column>
      <el-table-column prop="zbprice" label="房间直播流水" width="120"></el-table-column>
      <!-- <el-table-column prop="zdprice" label="房间砸蛋流水" width="120"></el-table-column> -->
      <el-table-column prop="zprice" label="总流水" width="120"></el-table-column>
      <!-- <el-table-column prop="zdfc" label="砸蛋分成" width="100"></el-table-column> -->
      <el-table-column label="操作" width="108">
        <el-button size="small" @click="exportExcel">导出excel</el-button>
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
          label: "全部"
        },
        {
          value: "选项2",
          label: "点歌"
        },
        {
          value: "选项3",
          label: "游戏陪玩"
        },
        {
          value: "选项4",
          label: "情感陪伴"
        }
      ],

      tableData: [
        {
          time: "2019-10-01 to 2019-10-11",
          fjid: "1122",
          fjname: "一生一世 听我的歌",
          fjlx: "唱歌房",
          userid: 1234,
          zbprice: 134524,
          zdprice: 2345,
          zprice: 136869,
          zdfc: "10%"
        }
      ],
      dh: "",
      id: "",
      fjlx: "全部",
      first: "",
      end: "",
      zbls: "",
      zdls: "",
      zls: "",
      list: {}
    };
  },

  methods: {
    cx() {
      if (
        this.dh.length === 0 ||
        this.id.length === 0 ||
        this.fjlx.length === 0 ||
        this.first.length === 0 ||
        this.end.length === 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          dh: this.dh,
          id: this.id,

          fjlx: this.fjlx,
          time1: this.first,
          time2: this.end
        };
        window.console.log(sj);

        this.dh = "";
        this.id = "";
        this.first = "";
        this.end = "";

        let num1 = 0;
        this.tableData.map(item => {
          return (num1 += item.zbprice);
        });
        this.zbls = num1;

        let num2 = 0;
        this.tableData.map(item => {
          return (num2 += item.zdprice);
        });
        this.zdls = num2;

        let num3 = 0;
        this.tableData.map(item => {
          return (num3 += item.zprice);
        });
        this.zls = num3;
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
          case "zbprice":
            sums[index] = this.zbls;
            break;
          case "zdprice":
            sums[index] = this.zdls;
            break;
          case "zprice":
            sums[index] = this.zls;
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
          "日期",
          "房间id",
          "房间名",
          "房间类型",
          "房主id",
          "房间直播流水",
          "房间砸蛋流水",
          "总流水",
          "砸蛋分成"
        ];
        // 上面设置Excel的表格第一行的标题
        const filterVal = [
          "time",
          "fjid",
          "fjname",
          "fjlx",
          "userid",
          "zbprice",
          "zdprice",
          "zprice",
          "zdfc"
        ];
        // 上面的index、nickName、name是tableData里对象的属性
        const list = this.tableData; //把data里的tableData存到list
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "房间数据");
      });
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>
<style lang="scss" scoped>
.fj3 {
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
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
      }
    }

    .l3 {
      display: flex;
      width: 350px;
      margin-right: 170px;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 4.0625rem;
      }
    }
    .l4 {
      span {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.625rem;
        margin-left: 0.625rem;
      }
    }
  }

  .el-table {
    margin-left: 2.5rem;
  }
}
</style>