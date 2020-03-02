<template>
  <div class="zd3">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="left">{{item}}</div>
        <el-input
          size="mini"
          placeholder="请输入内容"
          v-model="num[index]"
          style="width:25%"
        >{{num[index]}}</el-input>
      </li>
    </ul>
    <div class="d1">
      <div class="s1">砸蛋规则</div>
      <textarea cols="40" rows="4" v-model="gz" placeholder="请输入规则，限60字以内"></textarea>
    </div>

    <div class="d2">
      <div class="s1">奖池</div>
      <ul>
        <li v-for="(item,index) in list1" :key="index">
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="index">{{item}}</el-checkbox>
          </el-checkbox-group>
        </li>
      </ul>
    </div>
    <div class="d3">
      <el-button size="small" @click="bc">保存</el-button>
      <el-button size="small" @click="qx">取消</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: ["5%", "10%", 200],
      list: ["默认抽水率", "默认房间分成", "锤子价格(砖)"],
      list1: [
        "a",
        "a",
        "a",
        "b",
        "b",
        "b",
        "b",
        "b",
        "a",
        "a",
        "a",
        "a",
        "a",
        "b",
        "b"
      ],
      checkList: [],
      gz: ""
    };
  },
  methods: {
    bc() {
      let jc = this.checkList.map(item => {
        return this.list1[item];
      });

      if (
        this.num[0].length === 0 ||
        this.num[1].length === 0 ||
        this.num[2].length === 0 ||
        this.gz.length === 0 ||
        jc.length === 0
      ) {
        alert("砸蛋参数不能为空");
      } else {
        let sj = {
          csl: this.num[0],
          fjfc: this.num[1],
          price: this.num[2],
          zdgz: this.gz,
          jc: jc
        };

        window.console.log(sj);
        this.gz = "";
        this.checkList = [];
      }
    },
    qx() {
      this.gz = "";
      this.checkList = [];
    }
  }
};
</script>
<style lang="scss" scoped>
.zd3 {
  ul {
    li {
      display: flex;
      justify-content: space-between;
      max-width: 17.25rem;
      padding-bottom: 0.625rem;
      .el-input {
        input {
          text-align: center;
        }
      }
    }
  }

  .d1 {
    display: flex;
    padding-bottom: 30px;
    .s1 {
      margin-right: 142px;
    }
  }

  .d2 {
    display: flex;

    .s1 {
      margin-right: 164px;
    }
    ul {
      width: 20.625rem;
      height: 7.5rem;
      display: flex;
      flex-wrap: wrap;
      border: 1px solid #ccc;
      padding-top: 18px;

      margin-top: 0;
      margin-left: 0.625rem;

      li {
        list-style-type: none;
        width: 20%;
        height: 30px;
        .el-checkbox-group {
          margin: 0;
          height: 30px;
        }
      }
    }
  }
  .d3 {
    margin-left: 205px;
    margin-top: 20px;
  }
}
</style>