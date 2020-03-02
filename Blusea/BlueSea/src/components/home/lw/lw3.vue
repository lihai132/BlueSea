<template>
  <div class="lw3">
    <ul>
      <li class="l1">
        <div class="d1">礼物缩略图</div>
        <div class="d2">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :on-success="success"
            :on-error="error"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </li>

      <li class="l2">
        <div class="d1">动态图上传</div>
        <div class="d2">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList1"
            :on-success="success1"
            :on-error="error1"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </li>

      <li class="l3">
        <div class="d1">礼物名称</div>
        <el-input size="small" placeholder="请输入内容" v-model="input1" style="width:9rem"></el-input>
      </li>

      <li class="l4">
        <div class="d1">礼物价格(元)</div>
        <el-input size="small" placeholder="请输入内容" v-model="input2" style="width:9rem"></el-input>
      </li>

      <li class="l5">
        <div class="d1">是否全服</div>
        <div class="d2">
          <el-radio v-model="radio1" label="否">否</el-radio>
          <el-radio v-model="radio1" label="是">是</el-radio>
        </div>
      </li>

      <li class="l6">
        <div class="d1">状态</div>
        <div class="d2">
          <el-radio v-model="radio2" label="启用">启用</el-radio>
          <el-radio v-model="radio2" label="禁止">禁止</el-radio>
        </div>
      </li>

      <li class="l7">
        <el-button size="medium" style="width:7%" @click="fh">返回</el-button>
        <el-button size="medium" style="width:7%" @click="bc">保存</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio1: "否",
      radio2: "启用",
      input1: "",
      input2: "",
      fileList: [],
      fileList1: [],
      tp1: {},
      tp2: {}
    };
  },
  methods: {
    handleRemove(file, fileList) {
      window.console.log(file, fileList);
    },
    handlePreview(file) {
      window.console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      window.console.log(file, fileList);
    },

    success(response, file, fileList) {
      this.tp1 = file;
      window.console.log(response, this.tp1, fileList);
    },
    error(err, file, fileList) {
      window.console.log(err, file, fileList);
    },

    success1(response, file, fileList) {
      this.tp2 = file;
      window.console.log(response, this.tp2, fileList);
    },
    error1(err, file, fileList) {
      window.console.log(err, file, fileList);
    },

    bc() {
      if (
        this.input1.length == 0 ||
        this.input2.length == 0 ||
        this.radio1.length == 0 ||
        this.radio2.length == 0
      ) {
        alert("基本数据不能为空");
      } else {
        let zl = {
          slt: this.tp1,
          dt: this.tp2,
          lwmc: this.input1,
          price: this.input2,
          qf: this.radio1,
          zt: this.radio2
        };
        window.console.log(zl);
        this.input1 = "";
        this.input2 = "";
      }
    },
    fh() {
      this.$emit("fh");
    }
  }
};
</script>
<style lang="scss" scoped>
.lw3 {
  li {
    list-style: none;
  }
  ul {
    .l1 {
      display: flex;
      padding-bottom: 1.25rem;

      .d1 {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 2.5625rem;
      }
    }
    .l2 {
      display: flex;
      padding-bottom: 1.25rem;

      .d1 {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 2.5625rem;
      }
    }
    .l3 {
      display: flex;
      justify-content: space-between;
      width: 16.75rem;
      padding-bottom: 1rem;
      .d1 {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
    .l4 {
      display: flex;

      justify-content: space-between;
      width: 16.75rem;
      padding-bottom: 1rem;
      .d1 {
        font-size: 1rem;
        line-height: 2rem;
      }
    }
    .l5 {
      display: flex;
      justify-content: space-between;
      width: 14.375rem;
      padding-bottom: 0.625rem;
    }
    .l6 {
      display: flex;
      justify-content: space-between;
      width: 16.3125rem;
      .d2 {
        .el-radio {
          margin-right: 1.0625rem;
        }
      }
    }

    .l7 {
      margin-top: 2.875rem;
      margin-left: 1.875rem;
    }
  }
}
</style>