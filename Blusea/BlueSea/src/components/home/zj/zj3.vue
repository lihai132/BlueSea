<template>
  <div class="zj3">
    <ul class="u1">
      <li class="l1">
        <div>单号</div>
        <el-input size="small" placeholder v-model="dh" style="width:60%"></el-input>
      </li>

      <li class="l2">
        <div>用户id</div>
        <el-input size="small" placeholder v-model="id" style="width:60%"></el-input>
      </li>

      <li class="l3">
        <div>充值方式</div>
        <el-select v-model="czfs" :placeholder="options[0].label" size="mini" style="width:50%">
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
        <el-input size="small" placeholder v-model="input1" style="width:40%"></el-input>
        <span>到</span>
        <el-input size="small" placeholder v-model="input2" style="width:40%"></el-input>
      </li>
      <el-button size="small" style="width:105px" @click="cx">查询</el-button>
      <el-button size="small" style="width:105px" @click="exportExcel">导出excel</el-button>
    </ul>

    <el-table
      :data="tableData"
      border
      style="width: 951px"
      show-summary
      :summary-method="getSummaries"
    >
      <el-table-column prop="dh" label="用户id" width="180"></el-table-column>
      <el-table-column prop="userid" label="用户昵称" width="150"></el-table-column>
      <el-table-column prop="name" label="名字" width="200"></el-table-column>
      <el-table-column prop="czfs" label="充值方式" width="120"></el-table-column>
      <el-table-column prop="num" label="付款金额" width="100"></el-table-column>
      <el-table-column prop="txtime" label="充值时间" width="200"></el-table-column>
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
          label: "支付宝"
        },
        {
          value: "选项2",
          label: "微信"
        }
      ],

      tableData: [
        {
          dh: "111",
          userid: "1122",
          name: "唐三藏",
          czfs: "支付宝",
          num: 50,
          txtime: "2019-10-17 16：00"
        },
        {
          dh: "222",
          userid: "2233",
          name: "孙悟空",
          czfs: "微信",
          num: 500,
          txtime: "2019-10-17 20：00"
        }
      ],
      dh: "",
      id: "",
      czfs: "支付宝",
      input1: "",
      input2: "",
      num: "",
      list: {}
    };
  },

  methods: {
    cx() {
      if (
        this.dh.length == 0 ||
        this.id.length == 0 ||
        this.czfs.length == 0 ||
        this.input1.length == 0 ||
        this.input2.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          dh: this.dh,
          id: this.id,
          czfs: this.czfs,
          name1: this.input1,
          name2: this.input2
        };

        window.console.log(sj);
        this.id = "";
        this.dh = "";
        this.dkzt = "";
        this.input1 = "";
        this.input2 = "";

        let price = 0;
        this.tableData.map(item => {
          return (price += item.num);
        });

        this.num = price;
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
          case "num":
            sums[index] = this.num;
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
          "用户昵称",
          "名字",
          "充值方式",
          "付款金额",
          "充值时间"
        ];
        // 上面设置Excel的表格第一行的标题
        const filterVal = ["dh", "userid", "name", "czfs", "num", "txtime"];
        // 上面的index、nickName、name是tableData里对象的属性
        const list = this.tableData; //把data里的tableData存到list
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, "充值记录");
      });
    },

    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>
<style lang="scss" scoped>
.zj3 {
  li {
    list-style: none;
  }
  .u1 {
    display: flex;
    width: 77.2%;
    margin-left: 2.5rem;
    padding-bottom: 20px;

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
      width: 250px;
      margin-right: 7px;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
        width: 4.0625rem;
      }
    }
    .l4 {
      margin-right: 50px;
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