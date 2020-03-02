<template>
  <div class="item15">
    <div class="title">11、内容及其披露</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "11.1 你承诺对经由本服务上载、张贴或传送的内容负全部责任；在任何情况下，本平台均不对任何用户提供的内容负责，包括但不限于任何内容发生任何错误或纰漏以及衍生的任何损失或损害，用户负责处理与其提供的内容相关的任何及全部纠纷。本平台有权根据法律法规及行政司法机关要求拒绝或删除经由本服务提供的任何内容。用户使用上述内容，应自行承担风险。",
        "11.2 本平台有权利在下述情况下，对内容进行保存或披露：",
        "(a) 法律程序所规定；",
        "(b) 本服务条款规定；",
        "(c) 被侵害的第三人提出权利主张；",
        "(d) 为保护滴滴语音帐号、其使用者及社会公众的权利、财产或人身安全；",
        "(e) 其他本平台认为有必要的情况。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item15 {
  padding: 0 15px 20px 15px;
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