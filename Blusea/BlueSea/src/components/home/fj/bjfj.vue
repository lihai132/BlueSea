<template>
  <div class="tjfj">
    <ul class="u1">
      <li>
        <div>房间id</div>
        <el-input size="small" placeholder v-model="val.fjid" style="width:48%"></el-input>
      </li>
      <li>
        <div>房间类型</div>
        <el-select v-model="val.fjlx" size="mini" style="width:43%">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>
    </ul>

    <ul class="u2">
      <li class="l1">
        <div class="d1">房间名</div>
        <el-input size="small" placeholder v-model="val.fjm" style="width:66%"></el-input>
      </li>
      <li class="l2">
        <div class="d1">房主id</div>
        <el-input size="small" placeholder v-model="userid" style="width:66%" :disabled="true"></el-input>
      </li>
      <li class="l3">
        <div class="d1">状态</div>
        <div class="xx">
          <el-radio v-model="radio" label="启用">启用(默认)</el-radio>
          <el-radio v-model="radio" label="禁用">禁用</el-radio>
        </div>
      </li>
      <li class="l4">
        <div class="d1">排序</div>
        <el-input size="small" placeholder v-model="val.px" style="width:66%"></el-input>
      </li>
      <li class="l5">
        <div class="d1">砸蛋分成(默认)</div>
        <el-input size="small" placeholder v-model="val.zdfc" style="width:30%"></el-input>
      </li>
      <li class="l6">
        <div class="d1">协议号配比(默认)</div>
        <el-input size="small" placeholder v-model="val.xyhpb" style="width:30%"></el-input>
      </li>
      <li class="l7">
        <el-button size="small" style="width:100px" @click="cx">取消</el-button>
        <el-button size="small" style="width:100px" @click="qd">的确</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    val: Object,
    userid: Number
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "点歌"
        },
        {
          value: "选项2",
          label: "游戏陪玩"
        },
        {
          value: "选项3",
          label: "情感陪伴"
        }
      ],

      radio: "启用"
    };
  },
  methods: {
    cx() {
      this.$emit("fh");
    },
    qd() {
      let sj = {
        fjid: this.val.fjid,
        fjlx: this.val.fjlx,
        fjm: this.val.fjm,
        userid: this.userid,
        zt: this.radio,
        px: this.val.px,
        zdfc: this.val.zdfc,
        xyhpb: this.val.xyhpb
      };
      window.console.log(sj);
      this.cx();
    }
  }
};
</script>
<style lang="scss" scoped>
.tjfj {
  li {
    list-style-type: none;
  }
  .u1 {
    display: flex;
    padding-bottom: 20px;
    li:nth-child(1) {
      display: flex;
      div {
        font-size: 16px;
        line-height: 32px;
        margin-right: 31px;
      }
    }
    li:nth-child(2) {
      display: flex;
      div {
        font-size: 16px;
        line-height: 28px;
        margin-right: 7px;
      }
    }
  }

  .u2 {
    li {
      padding-bottom: 15px;
    }
    .l1 {
      display: flex;
      width: 230px;
      justify-content: space-between;
      .d1 {
        font-size: 16px;
        line-height: 32px;
      }
    }
    .l2 {
      display: flex;
      width: 230px;
      justify-content: space-between;
      .d1 {
        font-size: 16px;
        line-height: 32px;
      }
    }
    .l3 {
      display: flex;
      width: 248px;
      justify-content: space-between;
      .el-radio {
        margin-right: 15px;
      }
      .d1 {
        font-size: 16px;
        line-height: 28px;
      }
    }
    .l4 {
      display: flex;
      width: 230px;
      justify-content: space-between;
      .d1 {
        font-size: 16px;
        line-height: 32px;
      }
    }
    .l5 {
      display: flex;
      width: 210px;
      justify-content: space-between;
      .d1 {
        font-size: 16px;
        line-height: 32px;
      }
    }
    .l6 {
      display: flex;
      width: 210px;
      justify-content: space-between;
      padding-bottom: 30px;
      .d1 {
        font-size: 16px;
        line-height: 32px;
      }
    }
    .l7 {
    }
  }
}
</style>