<template>
  <div class="zj1">
    <div class="box1" v-if="show">
      <ul class="u1">
        <li class="l1">
          <div>用户id</div>
          <el-input size="small" placeholder v-model="id" style="width:50%"></el-input>
        </li>

        <li class="l2">
          <div>状态</div>
          <el-select v-model="zt1" size="mini" style="width:50%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>

        <li class="l3">
          <div>打款状态</div>
          <el-select v-model="zt2" size="mini" style="width:43%">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>
        <li class="l4">
          <span>页码</span>
          <el-input size="small" placeholder v-model="pageNo" style="width:30%"></el-input>
          <span>分页大小</span>
          <el-input size="small" placeholder v-model="pageSize" style="width:30%"></el-input>
        </li>
        <el-button size="small" @click="cx" style="width:105px">查询</el-button>
      </ul>

      <el-table
        :data="tableData"
        border
        style="width: 1198px"
        @row-click="getDetails"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="userId" label="用户id" width="80"></el-table-column>
        <el-table-column prop="userNickname" label="用户昵称" width="153"></el-table-column>
        <el-table-column prop="accountName" label="名字" width="99"></el-table-column>
        <el-table-column prop="amount" label="提现金额(元)" width="120"></el-table-column>
        <el-table-column prop="sxf" label="手续费比例" width="100"></el-table-column>
        <el-table-column prop="money2" label="实际金额" width="98"></el-table-column>
        <el-table-column prop="txfs" label="提现方式" width="99">银行卡</el-table-column>
        <el-table-column prop="payStatus" label="打款状态" width="99"></el-table-column>
        <el-table-column prop="zt" label="状态" width="99"></el-table-column>
        <el-table-column prop="createTime" label="提现申请时间" width="170"></el-table-column>
        <el-table-column label="操作" width="80">
          <el-button
            size="mini"
            v-for="(item,index) in cz"
            :key="index"
            @click="getDetails;dj(item)"
          >{{item}}</el-button>
        </el-table-column>
      </el-table>
    </div>

    <txxq v-if="show1" v-on:fh="fh" :list="tableData[index]"></txxq>
  </div>
</template>
<script>
import txxq from "./txxq.vue";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "审核通过"
        },
        {
          value: "选项2",
          label: "待审核"
        },
        {
          value: "选项3",
          label: "驳回"
        },
        {
          value: "选项4",
          label: "全部"
        }
      ],

      options1: [
        {
          value: "选项1",
          label: "打款失败"
        },
        {
          value: "选项2",
          label: "未打款"
        },
        {
          value: "选项3",
          label: "已打款"
        },
        {
          value: "选项4",
          label: "全部"
        }
      ],

      tableData: [],
      id: "",
      zt1: "全部",
      zt2: "全部",
      pageNo: "",
      pageSize: "",
      show: true,
      show1: false,
      index: "",
      cz: ["详情"],
      name: "",
      list: {}
    };
  },
  components: { txxq },
  methods: {
    async cx() {
      if (
        this.id.length != 0 &&
        this.pageNo.length == 0 &&
        this.pageSize.length == 0
      ) {
        let { data } = await this.$axios.post("https://ddapp.blueseashark.cn/managerApi/cash/listCashRecord", {
          params: {
            userId: this.id
          }
        });
        window.console.log(data);
        if (data.records.length != 0) {
          let list = data.records.map(item => {
            item.mode = "银行卡";
          });
          this.tableData = list;
        } else {
          alert("查询失败");
        }
      }
    },
    xq() {
      if (this.name === "详情") {
        this.show = !this.show;
        this.show1 = !this.show1;
      }
    },
    fh() {
      this.show = true;
      this.show1 = false;
      this.name = "";
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.list = val;

      this.index = this.list.index;
      window.console.log(this.index);

      this.xq();
    },
    dj(item) {
      this.name = item;
    }
  }
};
</script>
<style lang="scss" scoped>
.zj1 {
  li {
    list-style: none;
  }
  .box1 {
    .u1 {
      display: flex;
      width: 72%;
      margin-left: 2.5rem;
      margin-bottom: 20px;
      .l2 {
        display: flex;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
        }
      }
      .l1 {
        display: flex;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
        }
      }

      .l3 {
        display: flex;
        widows: 201px;
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
}
</style>