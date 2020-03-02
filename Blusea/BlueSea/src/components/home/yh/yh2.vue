<template>
  <div class="yh2">
    <ul class="u1">
      <li class="l1">
        <div class="d1">id</div>
        <el-input size="small" placeholder v-model="id" style="width:103px"></el-input>
      </li>
      <li class="l2">
        <div class="d1">手机</div>
        <el-input size="small" placeholder v-model="sj" style="width:103px"></el-input>
      </li>

      <li class="l3">
        <div class="d1">归属</div>
        <el-select v-model="gs" size="mini" style="width:75px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
      </li>
      <li class="l4" style="width:80px">
        <el-button size="small" style="width:100%">查询</el-button>
      </li>
    </ul>
    <el-table :data="tableData" border style="width:626px">
      <el-table-column prop="id" label="id" width="110"></el-table-column>
      <el-table-column prop="phone" label="手机" width="200"></el-table-column>
      <el-table-column prop="nickName" label="昵称" width="230"></el-table-column>
      <el-table-column prop="gs" label="归属" width="85"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "全部"
        },
        {
          value: "选项2",
          label: "市场"
        },
        {
          value: "选项3",
          label: "公会"
        }
      ],
      tableData: [],
      gs: "全部",
      sj: "",
      id: ""
    };
  },

  methods: {
    // async cx() {
    //   if (this.id.length == 0) {
    //     alert("查询id不能为空");
    //   } else {
    //     let { data } = await this.$axios.post(
    //       "http://121.41.9.242:8082/inside/user/findUserByUserId",
    //       null,
    //       {
    //         params: {
    //           userId: this.id
    //         }
    //       }
    //     );
    //     if (data.code) {
    //       alert("请确认输入id是否正确");
    //     } else {
    //       this.tableData = [data];
    //     }
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
.yh2 {
  li {
    list-style: none;
  }
  .u1 {
    display: flex;
    padding-left: 0;
    padding-bottom: 30px;
    li {
      display: flex;
    }
    .l1 {
      margin-right: 30px;
      .d1 {
        font-size: 16px;
        line-height: 32px;
        margin-right: 7px;
      }
    }

    .l2 {
      margin-right: 100px;
      .d1 {
        font-size: 16px;
        line-height: 32px;
        margin-right: 7px;
      }
    }

    .l3 {
      margin-right: 30px;
      .d1 {
        font-size: 16px;
        line-height: 28px;
        margin-right: 7px;
      }
    }
  }
}
</style>