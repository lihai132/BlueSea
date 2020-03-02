<template>
  <div class="zj2">
    <div class="top">
      <div class="left">手续费比例</div>
      <div class="nav">
        <ul class="u1" v-for="(item,index) in list" :key="index">
          <li>
            <el-input size="small" style="width:100px" v-model="item.price1"></el-input>
            <div class="d1">到</div>
          </li>
          <li>
            <el-input size="small" style="width:100px" v-model="item.price2"></el-input>
            <div class="d2">(包含)</div>
          </li>
          <li>
            <el-input size="small" style="width:100px" v-model="item.bfb"></el-input>
          </li>
        </ul>
      </div>
      <div class="right">
        <el-button size="small" @click="tj">
          <i class="el-icon-plus"></i>
        </el-button>
      </div>
    </div>
    <div class="foot">
      <el-button size="small" @click="bc">确定</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { price1: "0", price2: "50", bfb: "3%" },
        { price1: "50", price2: "500", bfb: "2%" }
      ]
    };
  },
  methods: {
    bc() {
      window.console.log(this.list);
    },
    tj() {
      this.list.push({});
    }
  }
};
</script>
<style lang="scss" scoped>
.zj2 {
  li {
    list-style-type: none;
  }
  .top {
    display: flex;
    .left {
      font-size: 1rem;
      line-height: 2rem;
    }

    .nav {
      margin-right: 100px;
      margin-left: 40px;
      .u1 {
        display: flex;
        margin-top: 0;
        margin-bottom: 20px;
        li {
          display: flex;
          .d1,
          .d2 {
            margin-left: 10px;
            margin-right: 20px;
            font-size: 1rem;
            line-height: 2rem;
          }
        }
      }
    }
  }

  .foot {
    margin-left: 120px;
  }
}
</style>