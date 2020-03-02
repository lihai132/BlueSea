<template>
  <div class="fj2">
    <div class="box" v-if="show">
      <div class="top">
        <ul class="u1">
          <li>
            <div class="d1">房间id</div>
            <el-input size="small" placeholder v-model="fjid" style="width:60%"></el-input>
          </li>

          <li>
            <div class="d1">房间类型</div>
            <el-select v-model="fjlx" :placeholder="options[0].label" size="mini" style="width:60%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </li>

          <li>
            <div class="d1">状态</div>
            <el-select v-model="zt" :placeholder="options1[0].label" size="mini" style="width:60%">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </li>
        </ul>

        <div class="d2">
          <el-button size="small" style="width:100px" @click="cx">查询</el-button>
          <el-button size="small" style="width:105px" @click="tj">
            添加房间
            <i class="el-icon-plus"></i>
          </el-button>
        </div>
      </div>

      <el-table
        :data="tableData"
        border
        style="width:1044px"
        @row-click="getDetails"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="fjid" label="房间id" width="80" style="text-align:center"></el-table-column>
        <el-table-column prop="fjm" label="房间名" width="190"></el-table-column>
        <el-table-column prop="fjlx" label="房间类型" width="80"></el-table-column>
        <el-table-column prop="px" label="排序" width="80" style="text-align:center"></el-table-column>
        <el-table-column prop="zt" label="状态" width="80"></el-table-column>
        <el-table-column prop="time" label="创建时间" width="153"></el-table-column>
        <el-table-column prop="zdfc" label="砸蛋分成" width="80" style="text-align:center"></el-table-column>
        <el-table-column prop="xyhpb" label="协议号配比" width="100"></el-table-column>

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

    <bjfj v-if="show1" :val="val" v-on:fh="fh" :userid="userid"></bjfj>
    <tjfj v-if="show2" v-on:fh="fh"></tjfj>
  </div>
</template>
<script>
import bjfj from "./bjfj.vue";
import tjfj from "./tjfj.vue";
export default {
  data() {
    return {
      tableData: [
        {
          fjid: "3344",
          fjm: "一生一世 听我的歌",
          fjlx: "点歌房",
          px: 1,
          zt: "禁用",
          time: "2019-11-14 12:00",
          zdfc: "10%",
          xyhpb: 5
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
      options1: [
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
          label: "禁用"
        }
      ],
      title: ["修改", "启用", "删除"],
      fjlx: "全部",
      zt: "全部",
      fjid: "",
      show: true,
      show1: false,
      show2: false,
      userid: 1122
    };
  },
  components: {
    bjfj,
    tjfj
  },
  methods: {
    cx() {
      if (
        this.fjid.length === 0 ||
        this.fjlx.length === 0 ||
        this.zt.length === 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          id: this.fjid,
          lx: this.fjlx,
          zt: this.zt
        };
        window.console.log(sj);
        this.fjid = "";
      }
    },
    tjfj() {
      this.show = !this.show;
      this.show1 = true;
      this.show2 = false;
    },
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    getDetails(val) {
      this.val = val;

      this.fs();
    },
    dj(title) {
      this.name = title;
    },

    fs() {
      if (this.name === "修改") {
        this.tjfj();
        this.name = "";
      }
      if (this.name === "启用") {
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
    fh() {
      this.show = true;
      this.show1 = false;
      this.show2 = false;
    },
    tj() {
      this.show = false;
      this.show1 = false;
      this.show2 = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.fj2 {
  .box {
    .top {
      display: flex;
      justify-content: flex-start;

      .u1 {
        display: flex;
        margin-top: 0;
        padding-left: 0;
        padding-bottom: 20px;
        width: 700px;
        justify-content: flex-start;
        li {
          display: flex;
          .d1 {
            margin-right: 10px;
          }
        }
        li:nth-child(1) {
          font-size: 16px;
          line-height: 32px;
          width: 210px;
        }

        li:nth-child(2) {
          font-size: 16px;
          line-height: 28px;
          width: 210px;
          margin-right: 15px;
          margin-top: 2px;
        }

        li:nth-child(3) {
          font-size: 16px;
          line-height: 28px;
          width: 210px;
          margin-top: 2px;
        }
      }
      .d2 {
      }
    }
  }
}
</style>