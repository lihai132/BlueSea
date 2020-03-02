<template>
  <div class="item24">
    <div class="title">20、通知</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "本平台向你发出的通知，可以采用电子邮件、页面公告、常规信件、电话或本平台认为适合的形式。服务条款的修改或其他事项变更时，本平台将会以上述形式进行通知。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item24 {
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