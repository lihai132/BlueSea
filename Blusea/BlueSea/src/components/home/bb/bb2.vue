<template>
  <div class="bb1">
    <div class="box">
      <div class="b1">
        <div class="item1">
          <div class="text">请输入需要强制更新的ios最低版本号</div>
          <el-input v-model="minVersin" placeholder="请输入内容" style="width:280px"></el-input>
        </div>
        <div class="item2">
          <div class="text">请输入ios现版本号</div>
          <el-input v-model="currentVersin" placeholder="请输入内容" style="width:280px"></el-input>
        </div>
        <div class="item3">
          <div class="text">ios最新安装包地址</div>
          <el-input v-model="address" placeholder="请输入内容" style="width:405px"></el-input>
        </div>
      </div>
    </div>

    <div class="nr">
      <div class="title">请输入更新内容</div>
      <div class="nav">
        <textarea rows="10" cols="100" v-model="currentVersinDescription"></textarea>
      </div>
    </div>

    <div class="but">
      <el-button size="small" @click="Submission">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      minVersin: "",
      currentVersin: "",
      address: "",
      currentVersinDescription: ""
    };
  },

  methods: {
    async Submission() {
      if (
        this.minVersin.length != 0 &&
        this.currentVersin.length != 0 &&
        this.address.length != 0 &&
        this.currentVersinDescription.length != 0
      ) {
        var token = document.cookie.split(";")[0].split("=")[1];

        let { data } = await this.$axios.get("https://ddapp.blueseashark.cn/update/ios", {
          params: {
            minVersin: this.minVersin,
            currentVersin: this.currentVersin,
            address: this.address,
            currentVersinDescription: this.currentVersinDescription
          },
          headers: { "x-auth-token": token }
        });
        window.console.log(data);
        if (data.minVersin != 0) {
          alert("提交成功");
          return;
        }
        if (data.code == 9994) {
          alert("Token不能为空");
          this.$router.push({ name: "login" });
          return;
        }
        if (data.code == 9995) {
          alert("Token已过期");
          this.$router.push({ name: "login" });
          return;
        }
        if (data.code == 9996) {
          alert("无效的Token");
          this.$router.push({ name: "login" });
          return;
        } else {
          alert("提交失败");
          return;
        }
      } else {
        alert("提交数据不能为空");
        return;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bb1 {
  .top {
    padding-bottom: 20px;
    text-align: center;
    font-size: 26px;
    font-weight: 700;
    line-height: 26px;
    border-bottom: 1px solid #ccc;
  }
  .box {
    display: flex;
    padding-top: 10px;
    margin-left: 30px;
    .b1 {
      margin-right: 50px;
    }
  }
  .item1 {
    display: flex;
    width: 570px;
    justify-content: space-between;
    padding-bottom: 16px;
    line-height: 32px;
  }

  .item2 {
    display: flex;
    width: 570px;
    justify-content: space-between;
    padding-bottom: 16px;
    line-height: 32px;
  }
  .item3 {
    display: flex;
    width: 570px;
    justify-content: space-between;
    padding-bottom: 16px;
    line-height: 32px;
  }
  .nr {
    display: flex;
    margin-bottom: 20px;
    margin-left: 30px;
    .title {
      margin-right: 20px;
    }
  }
  .but {
    margin-left: 160px;
  }
}
</style>