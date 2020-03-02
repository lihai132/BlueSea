<template>
  <div class="txxq" v-if="show1">
    <ul class="u1">
      <li>用户id</li>
      <li>
        <el-input size="small" :value="list.userId" style="width:148px"></el-input>
      </li>
    </ul>

    <ul class="u2">
      <li>昵称</li>
      <li>
        <el-input size="small" :value="list.userNickname" style="width:148px"></el-input>
      </li>
    </ul>

    <ul class="u3">
      <li>提现方式</li>
      <el-cascader :options="options1" v-model="options1[0].value" style="width:148px"></el-cascader>
    </ul>

    <ul class="u4">
      <li>
        <div>真实姓名</div>
        <el-input size="small" :value="list.name" style="width:148px"></el-input>
      </li>
      <li>
        <div>银行卡号</div>
        <el-input size="small" :value="yhkh" style="width:185px"></el-input>
      </li>
      <li>
        <div>银行</div>
        <el-input size="small" :value="yh" style="width:148px"></el-input>
      </li>
      <li>
        <div>支行</div>
        <el-input size="small" :value="zh" style="width:148px"></el-input>
      </li>
    </ul>

    <ul class="u5">
      <li>
        <div>提现金额</div>
        <el-input size="small" :value="list.money1" style="width:148px"></el-input>
      </li>
      <li>
        <div>手续费比例</div>
        <el-input size="small" :value="list.sxf" style="width:80px"></el-input>
      </li>
      <li>
        <div>实际金额</div>
        <el-input size="small" :value="list.money2" style="width:148px"></el-input>
      </li>
    </ul>

    <ul class="u6">
      <li>
        <div>状态</div>
        <el-cascader
          :options="options2"
          :placeholder="options2[0].label"
          v-model="options2[0].value"
          style="width:148px"
        ></el-cascader>
      </li>
      <li>
        <div>打款状态</div>
        <el-cascader
          :options="options3"
          :placeholder="options3[0].label"
          v-model="options3[0].value"
          style="width:148px"
        ></el-cascader>
      </li>
    </ul>

    <ul class="u7">
      <li>
        <el-button size="small" @click="tgsq">{{text1}}</el-button>
      </li>
      <li>
        <el-button size="small" @click="yy">{{text2}}</el-button>
      </li>
      <li>
        <el-input size="small" :placeholder="text3" style="width:400px" v-model="ly"></el-input>
      </li>
    </ul>

    <div class="u8">
      <el-button size="small" @click="fh">返回上一页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: Object
  },
  data() {
    return {
      show: true,
      show1: true,
      yhkh: "1234567897654321",
      yh: "邮政银行",
      zh: "广州天安支行",
      text1: "通过申请",
      text2: "驳回",
      text3: "驳回理由",
      ly: "",

      options1: [
        {
          value: "txfs",
          label: "银行卡"
        }
      ],
      options2: [
        {
          value: "wsh",
          label: "未审核"
        }
      ],

      options3: [
        {
          value: "wdk",
          label: "未打款"
        }
      ]
    };
  },

  methods: {
    fh() {
      this.$emit("fh");
    },
    tgsq() {
      if (this.text1 === "通过申请") {
        this.text1 = "已打款";
        this.text2 = "打款失败";
        this.text3 = "失败原因";
        this.options2[0].label = "通过申请";
        this.options3[0].label = "已打款";
      }
    },
    yy() {
      window.console.log(this.ly);
    }
  }
};
</script>
<style lang="scss" scoped>
.txxq {
  li {
    list-style-type: none;
  }
  .u1 {
    display: flex;
    width: 18.6875rem;
    justify-content: space-between;
    padding-bottom: 15px;
    li:nth-child(1) {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
  .u2 {
    display: flex;
    width: 18.6875rem;
    justify-content: space-between;
    padding-bottom: 15px;
    li:nth-child(1) {
      font-size: 1rem;
      line-height: 2rem;
    }
  }
  .u3 {
    display: flex;
    width: 18.6875rem;
    justify-content: space-between;
    padding-bottom: 15px;
    li:nth-child(1) {
      font-size: 1rem;
      line-height: 2.5rem;
    }
  }
  .u4 {
    display: flex;
    padding-bottom: 15px;

    li {
      display: flex;
    }

    li:nth-child(1) {
      width: 18.6875rem;
      justify-content: space-between;
      div {
        font-size: 1rem;
        line-height: 2rem;
      }
    }

    li:nth-child(2) {
      width: 16.625rem;
      justify-content: flex-start;
      margin-right: 1.875rem;
      margin-left: 1.875rem;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 7px;
      }
    }

    li:nth-child(3) {
      width: 11.625rem;
      justify-content: space-between;
      margin-right: 1rem;
      margin-left: 1.875rem;
      div {
        font-size: 1rem;
        line-height: 2rem;
      }
    }

    li:nth-child(4) {
      width: 11.625rem;
      justify-content: space-between;

      div {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
  }

  .u5 {
    display: flex;
    padding-bottom: 15px;

    li {
      display: flex;
    }

    li:nth-child(1) {
      width: 18.6875rem;
      justify-content: space-between;
      div {
        font-size: 1rem;
        line-height: 2rem;
      }
    }

    li:nth-child(2) {
      width: 16.875rem;
      justify-content: flex-start;
      margin-left: 1.875rem;
      margin-right: 1.875rem;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
      }
    }

    li:nth-child(3) {
      width: 16.875rem;
      justify-content: flex-start;

      margin-right: 1.875rem;
      div {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.4375rem;
      }
    }
  }
  .u6 {
    display: flex;
    padding-bottom: 15px;
    li {
      display: flex;
    }

    li:nth-child(1) {
      display: flex;
      width: 18.6875rem;
      justify-content: space-between;
      margin-right: 1.875rem;

      div {
        font-size: 1rem;
        line-height: 2.5rem;
      }
    }

    li:nth-child(2) {
      display: flex;
      width: 13.6875rem;
      justify-content: space-between;

      div {
        font-size: 1rem;
        line-height: 2.5rem;
      }
    }
  }
  .u7 {
    display: flex;
    padding-bottom: 15px;
    width: 40rem;
    justify-content: space-between;
  }

  .u8 {
    margin-left: 61.875rem;
  }
}
</style>