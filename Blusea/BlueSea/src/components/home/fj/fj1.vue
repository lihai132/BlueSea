<template>
  <div class="fj1">
    <div class="left">
      <ul class="top" style="width: 100%">
        <li>
          <div class="d1">类型</div>
          <el-select
            v-model="lx"
            :placeholder="options[0].label"
            size="mini"
            style="width:52%"
            @change="handleChange"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>
        <li>
          <el-button size="small" style="width:105px" @click="tj">
            添加
            <i class="el-icon-plus"></i>
          </el-button>
        </li>
      </ul>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        @row-click="getDetails"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="xh" label="序号" width="80" style="text-align:center"></el-table-column>
        <el-table-column prop="lx" label="类型" width="140"></el-table-column>
        <el-table-column prop="num" label="房间数" width="80"></el-table-column>
        <el-table-column prop label="操作" width="200">
          <el-button
            size="small"
            style="width:50px"
            v-for="(item,index) in title"
            :key="index"
            @click="getDetails;dj(item)"
          >{{item}}</el-button>
        </el-table-column>
      </el-table>
    </div>
    <ul class="right" v-if="show">
      <li class="r1">
        <div class="d1">类型名称</div>
        <el-input size="small" placeholder v-model="lxmc" style="width:50%"></el-input>
      </li>
      <li class="r2">
        <el-button size="small" style="width:100px" @click="qx">取消</el-button>
        <el-button size="small" style="width:100px" @click="qdtj">确定添加</el-button>
      </li>
    </ul>

    <ul class="u1" v-if="show1">
      <li class="r1">
        <div class="d1">类型名称</div>
        <el-input size="small" placeholder v-model="lxmc" style="width:50%"></el-input>
      </li>
      <li class="r2">
        <el-button size="small" style="width:100px" @click="qx">取消</el-button>
        <el-button size="small" style="width:100px" @click="qdxg">确定修改</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          xh: "1",
          lx: "点歌",
          num: 50
        }
      ],
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
      title: ["改名", "隐藏", "删除"],
      lx: "全部",
      lxmc: "",
      val: {},
      name: "",
      show: false,
      show1: false,
      xh: ""
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.val = val;
      this.xh = val.xh;

      this.fs();
    },

    dj(title) {
      this.name = title;
      // if (title === "改名") {
      //   this.xg();
      // }
    },
    fs() {
      if (this.name === "改名") {
        this.xg();
      }
      if (this.name === "隐藏") {
        let sj = {
          name: this.name,
          val: this.val
        };
        window.console.log(sj);
        this.name = "";
      }
      if (this.name === "删除") {
        let sj = {
          name: this.name,
          val: this.val
        };
        window.console.log(sj);
        this.name = "";
      }
    },
    tj() {
      this.show = !this.show;
    },
    xg() {
      this.show1 = true;
    },
    qx() {
      this.show = false;
      this.show1 = false;
      this.name = "";
    },
    qdtj() {
      if (this.lxmc.length === 0) {
        alert("类型名称不能为空");
      } else {
        window.console.log(this.lxmc);
        this.options.push({ label: this.lxmc });
        this.qx();
      }
    },
    qdxg() {
      if (this.lxmc.length === 0) {
        alert("类型名称不能为空");
      } else {
        window.console.log(this.lxmc, this.xh);

        this.qx();
      }
    },
    handleChange(lxmc) {
      window.console.log(lxmc);
    }
  }
};
</script>
<style lang="scss" scoped>
.fj1 {
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
  .right,
  .u1 {
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
}
</style>