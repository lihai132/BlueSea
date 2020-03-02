<template>
  <div class="tjgg">
    <ul class="u1">
      <li class="l1">
        <div class="d1">封面</div>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :before-upload="beforeupload"
          :before-remove="beforeRemove"
          :on-success="success"
          multiple
          :limit="3"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </li>

      <li class="l2">
        <div class="d1">标题</div>
        <el-input size="small" placeholder v-model="bt" style="width:290px"></el-input>
      </li>
      <li class="l3">
        <div class="d1">内容链接</div>
        <el-input size="small" placeholder v-model="nr" style="width:290px"></el-input>
      </li>

      <li class="l4">
        <div class="d1">或内容编辑</div>
        <textarea name id cols="70" rows="15" v-model="bj"></textarea>
      </li>
    </ul>

    <ul class="u2">
      <li class="l1">
        <div class="d1">状态</div>
        <div class="xx">
          <el-radio v-model="radio" label="启用">启用(默认)</el-radio>
          <el-radio v-model="radio" label="禁用">禁用</el-radio>
        </div>
      </li>
      <li class="l2">
        <el-button size="small" @click="fh">取消</el-button>
        <el-button size="small" @click="qd">确定</el-button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    name: String
  },
  data() {
    return {
      fileList: [],
      bt: "",
      nr: "",
      bj: "",
      radio: "启用"
    };
  },
  methods: {
    fh() {
      this.$emit("fh");
    },
    beforeRemove(file, fileList) {
      window.console.log(file, fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    beforeupload(file) {
      this.tp = file;
      window.console.log(file);
    },
    success(response, file, fileList) {
      window.console.log(response, file, fileList);
    },
    qd() {
      if (
        this.bt.length == 0 ||
        this.nr.length == 0 ||
        this.bj.length == 0 ||
        this.radio.length == 0
      ) {
        alert("基本查询数据不能为空");
      } else {
        let sj = {
          fm: this.tp,
          bt: this.bt,
          nr: this.nr,
          bj: this.bj,
          zt: this.radio
        };
        window.console.log(sj);
        this.fh();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.tjgg {
  li {
    list-style: none;
  }
  .u1 {
    li {
      padding-bottom: 20px;
    }
    .l1 {
      display: flex;
      .d1 {
        font-size: 16px;
        line-height: 32px;
        margin-right: 80px;
      }
    }
    .l2 {
      display: flex;
      .d1 {
        font-size: 16px;
        line-height: 32px;
        margin-right: 80px;
      }
    }
    .l3 {
      display: flex;
      .d1 {
        font-size: 16px;
        line-height: 32px;
        margin-right: 48px;
      }
    }
    .l4 {
      display: flex;
      .d1 {
        font-size: 16px;
        line-height: 16px;
        margin-right: 32px;
      }
    }
  }

  .u2 {
    display: flex;
    .l1 {
      display: flex;
      margin-right: 290px;
      .d1 {
        margin-right: 80px;
      }

      .el-radio {
        margin-right: 15px;
      }
    }
    .l2 {
      display: flex;
    }
  }
}
</style>