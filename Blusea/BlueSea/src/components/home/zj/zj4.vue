<template>
  <div id="zj4">
    <div class="top">
      <ul>
        <li class="l1">
          <div class="title">行为</div>
          <el-select v-model="xw" :placeholder="options[0].label" size="mini" style="width:61%">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.label"
            ></el-option>
          </el-select>
        </li>

        <li class="l2">
          <span>从</span>
          <el-input size="small" placeholder v-model="first" style="width:25%"></el-input>
          <span>到</span>
          <el-input size="small" placeholder v-model="end" style="width:25%"></el-input>
        </li>
        <el-button size="small" style="width:105px" @click="cx">查询</el-button>
      </ul>
    </div>
    <div id="main" style="width: 1300px;height:400px;"></div>
  </div>
</template>
<script>
export default {
  name: "zj4",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "充值"
        },
        {
          value: "选项2",
          label: "提现"
        },
        {
          value: "选项3",
          label: "直播消费"
        },
        {
          value: "选项4",
          label: "砸蛋消费"
        }
      ],
      xw: "充值",
      first: "",
      end: ""
    };
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        xAxis: {
          type: "category",
          data: [
            "05-31",
            "06-05",
            "06-10",
            "06-11",
            "06-12",
            "06-13",
            "06-14",
            "06-15",
            "06-16",
            "06-17",
            "06-18",
            "06-19",
            "06-20",
            "06-21"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              500,
              320,
              100,
              820,
              190,
              340,
              280,
              112,
              169,
              533,
              482,
              666,
              999,
              121
            ],
            type: "line"
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    cx() {
      if (
        this.xw.length == 0 ||
        this.first.length == 0 ||
        this.end.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          xw: this.xw,
          firsttime: this.first,
          endtime: this.end
        };

        window.console.log(sj);

        this.first = "";
        this.end = "";
      }
    }
  },

  mounted() {
    this.drawChart();
  }
};
</script>
<style lang="scss" scoped>
#zj4 {
  #main {
  }

  .top {
    margin-left: 92px;
    li {
      list-style-type: none;
    }
    ul {
      display: flex;
      .l1 {
        display: flex;
        width: 160px;
        div {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.4375rem;
          width: 2.1rem;
        }
      }
      .l2 {
        span {
          font-size: 1rem;
          line-height: 2rem;
          margin-right: 0.625rem;
          margin-left: 0.625rem;
        }
      }
    }
  }
}
</style>