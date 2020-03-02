<template>
  <div class="item13">
    <div class="title">9、对用户信息的存储和限制</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "本平台不对用户在滴滴语音帐号任何服务下发布信息的删除或储存失败负责。本平台有权判断用户的行为是否符合滴滴语音帐号服务条款的规定，如果本平台认为用户违反了服务条款的规定，本平台有权删除用户发布或发送的信息，直至中断或终止向其提供服务。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item13 {
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