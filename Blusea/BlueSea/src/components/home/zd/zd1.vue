<template>
  <div class="zd1">
    <el-table
      :data="tableData"
      border
      style="width:1301px"
      :show-header="false"
      :show-summary="true"
    >
      <el-table-column prop="text1" width="100"></el-table-column>
      <el-table-column prop="num1" width="100"></el-table-column>
      <el-table-column prop="text2" width="100"></el-table-column>
      <el-table-column prop="num2" width="100"></el-table-column>
      <el-table-column prop="text3" width="150"></el-table-column>
      <el-table-column prop="num3" width="100"></el-table-column>
      <el-table-column prop="text4" width="150"></el-table-column>
      <el-table-column prop="num4" width="100"></el-table-column>
      <el-table-column prop="text5" width="100"></el-table-column>
      <el-table-column prop="num5" width="100"></el-table-column>
      <el-table-column prop="text6" width="100"></el-table-column>
      <el-table-column prop="num6" width="100"></el-table-column>
    </el-table>

    <div class="d2">
      <el-table :data="tableData1" border style="width:541px">
        <el-table-column prop="fjid" label="今日砸蛋最高房间" width="150"></el-table-column>
        <el-table-column prop="name" label="名称" width="200"></el-table-column>
        <el-table-column prop="num" label="砸蛋流水" width="100"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          text1: "总投注",
          num1: "10000",
          text2: "总支付",
          num2: "9500",
          text3: "支付机器人",
          num3: "0",
          text4: "平均抽水比例",
          num4: "5%",
          text5: "房间总分成",
          num5: "50",
          text6: "总利润",
          num6: "50"
        },
        {
          text1: "昨日总投注",
          num1: "10000",
          text2: "昨日总支付",
          num2: "9500",
          text3: "昨日支付机器人",
          num3: "0",
          text4: "平均抽水比例",
          num4: "5%",
          text5: "房间总分成",
          num5: "50",
          text6: "昨日总利润",
          num6: "50"
        },
        {
          text1: "今日总投注",
          num1: "10000",
          text2: "今日总支付",
          num2: "9500",
          text3: "今日支付机器人",
          num3: "0",
          text4: "平均抽水比例",
          num4: "5%",
          text5: "房间总分成",
          num5: "50",
          text6: "今日总利润",
          num6: "50"
        }
      ],
      tableData1: [
        {
          fjid: 1122,
          name: "一生一世 听我的歌",
          num: 3455555
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.zd1 {
  li {
    list-style: none;
  }
  .d2 {
    margin-top: 50px;
  }
}
</style>