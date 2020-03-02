<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="http://121.40.217.99:8000/app/android/"
    :file-list="fileList"
    :auto-upload="false"
    :before-upload="beforeupload"
    :on-success="success"
    :on-error="error"
  >
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传apk/png/jpg文件，且不超过100M</div>
  </el-upload>
</template>
<script>
export default {
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    beforeUpload(file) {
      var testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "apk";
      const extension2 = testmsg === "png";
      const isLt2M = file.size / 1024 / 1024 < 1000; //这里做文件大小限制
      if (!extension && !extension2) {
        this.$message({
          message: "上传文件只能是 apk、png格式!",
          type: "warning"
        });
      }
      if (!isLt2M) {
        this.$message({
          message: "上传文件大小不能超过 100MB!",
          type: "warning"
        });
      }
      return extension || (extension2 && isLt2M);
    },
    success(response) {
      window.console.log(response);
    },
    error(err) {
      window.console.log(err);
    },
    submitUpload() {
      this.$refs.upload.submit();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>