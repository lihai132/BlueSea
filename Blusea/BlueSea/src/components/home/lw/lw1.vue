<template>
  <div class="lw1">
    <div class="box1" v-if="show">
      <ul>
        <li class="l1">
          <div>礼物名称</div>
          <el-select v-model="value" :placeholder="options[0].label" size="mini" style="width:50%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>
        <li class="l2">
          <div>礼物编号</div>
          <el-input size="small" placeholder="请输入内容" v-model="input" style="width:50%"></el-input>
        </li>
        <li class="l3">
          <div>状态</div>
          <el-select v-model="value1" :placeholder="list1[0].label" size="mini" style="width:33%">
            <el-option
              v-for="item in list1"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>
        <el-button size="small" @click="cx">查询</el-button>
      </ul>

      <el-table :data="tableData" border style="width: 877px">
        <el-table-column prop="lwxh" label="礼物序号" width="80"></el-table-column>
        <el-table-column prop="lwmc" label="礼物名称" width="120"></el-table-column>
        <el-table-column prop="slt" label="缩略图" width="68"></el-table-column>
        <el-table-column prop="price" label="价格" width="80"></el-table-column>
        <el-table-column prop="time1" label="创建时间" width="184"></el-table-column>
        <el-table-column prop="time2" label="更新时间" width="184"></el-table-column>
        <el-table-column prop="zt" label="状态" width="80"></el-table-column>
        <el-table-column label="操作" width="80">
          <el-button size="mini" @click="bj">编辑</el-button>
        </el-table-column>
      </el-table>
    </div>
    <lw3 v-if="show1" v-on:fh="fh"></lw3>
  </div>
</template>
<script>
import lw3 from "./lw3.vue";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "么么哒"
        }
      ],

      list1: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "启用"
        },
        {
          value: "选项3",
          label: "禁止"
        }
      ],

      tableData: [
        {
          lwxh: "001",
          lwmc: "么么哒",
          slt: " ",
          price: "10",
          time1: "2019-10-14 17:00",
          time2: " 2019-10-14 17:00",
          zt: "启用"
        },
        {
          lwxh: "002",
          lwmc: "梦幻城堡",
          slt: " ",
          price: "6666",
          time1: "2019-10-14 17:00",
          time2: " 2019-10-14 17:00",
          zt: "启用"
        }
      ],
      value: "",
      value1: "",
      input: "",
      show: true,
      show1: false,
      index: ""
    };
  },
  components: { lw3 },
  methods: {
    cx() {
      if (
        this.input.length == 0 ||
        this.value.length == 0 ||
        this.value1.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          name: this.value,
          bh: this.input,
          zt: this.value1
        };
        window.console.log(sj);
        this.input = "";
      }
    },
    bj() {
      this.show = !this.show;
      this.show1 = !this.show1;
    },
    fh() {
      this.show = true;
      this.show1 = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.lw1 {
  li {
    list-style: none;
  }
  .box1 {
    ul {
      display: flex;
      margin-left: 2.5rem;
      padding-bottom: 20px;
      .l1 {
        display: flex;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
        }
      }
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
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
        }
      }
    }

    .el-table {
      margin-left: 2.5rem;
    }
  }
}
</style>