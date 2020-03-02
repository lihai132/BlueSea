<template>
  <div class="gg">
    <div class="box" v-if="show">
      <ul class="u1">
        <li class="l1">
          <div>id</div>
          <el-input size="small" placeholder v-model="id" style="width:103px"></el-input>
        </li>

        <li class="l2">
          <div>关键词</div>
          <el-input size="small" placeholder v-model="gjc" style="width:103px"></el-input>
        </li>

        <li class="l3">
          <div>状态</div>
          <el-select v-model="zt" size="mini" style="width:106px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>

        <li class="l5">
          <span>从</span>
          <el-input size="small" placeholder v-model="first" style="width:103px"></el-input>
          <span>到</span>
          <el-input size="small" placeholder v-model="end" style="width:103px"></el-input>
        </li>
        <el-button size="small" style="width:105px" @click="cx">查询</el-button>
        <el-button size="small" style="width:105px" @click="tj">
          添加
          <i class="el-icon-plus"></i>
        </el-button>
      </ul>

      <el-table
        :data="tableData"
        border
        style="width: 971px"
        @row-click="getDetails"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="id" label="id" width="100"></el-table-column>
        <el-table-column prop="time" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="name" label="名称" width="210"></el-table-column>
        <el-table-column prop="slt" label="缩略图" width="200">
          <template scope>
            <img width="100" height="40" class="head_pic" />
          </template>
        </el-table-column>
        <el-table-column prop="zt" label="状态" width="130"></el-table-column>
        <el-table-column label="操作" width="150">
          <el-button
            size="small"
            v-for="(item,index) in cz"
            :key="index"
            @click="getDetails;dj(item)"
          >{{item}}</el-button>
        </el-table-column>
      </el-table>
    </div>
    <tjgg v-if="show1" v-on:fh="fh"></tjgg>
  </div>
</template>
<script>
import tjgg from "./tjgg.vue";
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "启用"
        },
        {
          value: "选项2",
          label: "禁用"
        }
      ],

      tableData: [
        {
          id: 1122,
          time: "2019-10-01 11:00",
          name: "双十一活动",
          slt: "",
          zt: "启用"
        },
        {
          id: 1010,
          time: "2019-10-01 11:00",
          name: "元旦活动",
          slt: "",
          zt: "禁用"
        }
      ],
      cz: ["编辑", "删除"],
      id: "",
      gjc: "",
      zt: "启用",
      first: "",
      end: "",
      show: true,
      show1: false,
      name: "",
      val: {}
    };
  },
  components: {
    tjgg
  },
  methods: {
    cx() {
      if (
        this.id.length == 0 ||
        this.gjc.length == 0 ||
        this.zt.length == 0 ||
        this.first.length == 0 ||
        this.end.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          id: this.id,
          gjc: this.gjc,
          zt: this.zt,
          text1: this.first,
          text2: this.end
        };
        window.console.log(sj);
        this.id = "";
        this.gjc = "";
        this.first = "";
        this.end = "";
      }
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.val = val;
      this.fs();
    },
    dj(item) {
      this.name = item;
    },
    fs() {
      if (this.name === "编辑") {
        this.tj();
        this.name = "";
      }
      if (this.name === "删除") {
        let sj = {
          title: this.name,
          name: this.val.name
        };
        window.console.log(sj);
        this.name = "";
      }
    },
    tj() {
      this.show = !this.show;
      this.show1 = true;
    },
    fh() {
      this.show = true;
      this.show1 = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.gg {
  li {
    list-style: none;
  }
  .box {
    .u1 {
      display: flex;
      width: 90.1%;
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
          width: 48px;
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
        margin-right: 162px;

        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
          width: 2rem;
        }
      }
      .l5 {
        margin-right: 160px;
        width: 278px;
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