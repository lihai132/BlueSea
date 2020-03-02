<template>
  <div class="item10">
    <div class="title">6、用户应遵守以下法律及法规</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "你同意遵守中华人民共和国相关法律、法规的规定，在使用滴滴语音帐号时，不得侵犯任何第三方的合法权益。在任何情况下，如果本平台有合理理由认为用户的行为可能违反上述法律、法规或侵犯第三方的合法权益，本平台可以在任何时候，不经事先通知终止向该用户提供服务。用户应了解国际互联网的无国界性，应特别注意遵守当地所有有关的法律和法规。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item10 {
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