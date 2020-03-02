<template>
  <div class="item4">
    <div class="title">3、信息安全</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "3.1 你在滴滴语音服务注册的账户具有密码保护功能，以确保你个人资料的安全，请你妥善保管账户及密码信息；",
        "3.2 蓝海鲨具有相应的技术和安全措施来确保我们掌握的信息不丢失，不被滥用和变造。尽管我们有这些安全措施，但请注意在互联网上不存在“完善的安全措施”。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item4 {
  padding: 20px 15px 0 15px;
  .title {
    font-size: 1rem;
    font-weight: 500;
  }
  .text {
    font-size: 0.75rem;
     line-height: 1.25rem;
    margin-top: 0.625rem;
  }
}
</style>