<template>
  <div class="item25">
    <div class="title">21、全部协议</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["本服务协议和本平台的其他服务条款构成完整的协议。"]
    };
  }
};
</script>
<style lang="scss" scoped>
.item25 {
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