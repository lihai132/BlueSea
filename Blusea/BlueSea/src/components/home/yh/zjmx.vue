<template>
  <div class="zjmx">
    <el-table :data="tableData" border style="width:54.3%; margin-left: 40px">
      <el-table-column prop="id" label="id" width="80"></el-table-column>
      <el-table-column prop="sj" label="手机" width="150"></el-table-column>
      <el-table-column prop="username" label="昵称" width="160"></el-table-column>
      <el-table-column prop="money" label="消费金额" width="80"></el-table-column>
      <el-table-column prop="xfd" label="消费点" width="80"></el-table-column>
      <el-table-column prop="lw" label="礼物" width="150"></el-table-column>
      <el-table-column prop="num" label="数量" width="50"></el-table-column>
      <el-table-column prop="time" label="消费时间" width="150"></el-table-column>
    </el-table>
    <div class="fh">
      <el-button size="small" @click="fh">{{uid}}</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    uid: Number
  },
  data() {
    return {
      tableData: [
        {
          id: 112233,
          sj: 18617271159,
          username: "我是小霸王",
          money: 100,
          xfd: "直播",
          lw: "恋爱了",
          num: 1,
          time: "2019-10-12 18:00"
        }
      ]
    };
  },
  created() {
    window.console.log(this.uid);
  },
  methods: {
    getSummaries(param) {
      const { columns } = param;

      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总计";
          return;
        }
        //this.closeList等等是后台返回的总的数据，然后取值到这里
        switch (column.property) {
          case "money":
            sums[index] = this.money;
            break;
          case "num":
            sums[index] = this.num;
            break;
          default:
            break;
        }
      });

      return sums;
    },
    fh() {
      this.$emit("fh");
    }
  }
};
</script>
<style lang="scss" scoped>
.fh {
  margin-top: 30px;
  margin-left: 867px;
}
</style>