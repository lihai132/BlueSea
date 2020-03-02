<template>
  <div class="item27">
    <div class="title">23、生效条件</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["本协议自用户访问、浏览及使用滴滴语音帐号之时开始生效。"]
    };
  }
};
</script>
<style lang="scss" scoped>
.item27 {
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