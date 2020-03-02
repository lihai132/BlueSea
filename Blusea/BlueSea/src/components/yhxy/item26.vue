<template>
  <div class="item26">
    <div class="title">22、法律的适用和管辖</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "本服务条款的生效、履行、解释及争议的解决均适用中华人民共和国法律，发生的争议提交武汉市洪山区人民法院诉讼解决。如果本服务协议中某项条款因与中华人民共和国现行法律相抵触而导致无效，将不影响其他部分的效力。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item26 {
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