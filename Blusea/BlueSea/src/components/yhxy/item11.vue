<template>
  <div class="item11">
    <div class="title">7、用户隐私权及用户信息保护</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "7.1 本平台要求你提供与其个人身份有关的信息资料时，应当事先以明确而易见的方式向用户公开其隐私权保护政策和个人信息利用政策，并采取必要措施保护用户的个人信息资料的安全；",
        "7.2 你在遵守本协议要求的前提下，本平台将充分保护用户享有个人隐私。除非因以下原因，未经授权，本平台不向任何第三方提供、公开或共享用户注册资料中的姓名、个人有效身份证件号码、联系方式、家庭住址等个人身份信息：",
        "(a) 用户或用户监护人授权本平台披露的",
        "(b) 根据有关法律法规的要求；",
        "(c) 司法机关或行政机关基于法定程序基于法定程序要求提供；",
        "(d) 维护社会个体和公众的安全；",
        "(e) 为维护社会公共利益的需要;",
        "(f) 维护本网站的合法权益；",
        "(g) 事先获得用户的明确授权；",
        "(h) 其他合理的相关要求。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item11 {
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