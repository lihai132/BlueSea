<template>
  <div class="item21">
    <div class="title">17、本平台的知识产权及其他权利</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "17.1 本平台对本服务及本服务所使用的软件和受知识产权相关法律或其他法律保护的资料享有相应的权利；",
        "17.2 经由本服务传送的内容，受到著作权法、商标法、专利法或其他法律的保护；未经本平台明示授权许可，用户不得进行修改、出租、散布或衍生其他作品，用户本人创作并在公开使用区域张贴的内容除外；",
        "17.3 用户对本服务所使用的软件有非专属性使用权，但自己不得或许可任何第三方复制、修改、出售或衍生产品；",
        "17.4 滴滴语音帐号及其他滴滴语音帐号图样、产品及服务名称，均为本平台及其关联公司所享有的商标，未经本平台所事先书面授权，任何人不得使用、 复制或用作其他用途。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item21 {
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