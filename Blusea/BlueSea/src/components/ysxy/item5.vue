<template>
  <div class="item5">
    <div class="title">4、Cookies</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "4.1 Cookies是少量的数据，在你未拒绝接受cookies的情况下，cookies将被发送到你的浏览器，并储存在你的计算机硬盘。我们使用cookies储存你访问滴滴语音服务的相关数据，在你访问或再次访问滴滴语音服务时,我们能识别你的身份，并通过分析数据为你提供更好更多的服务；",
        "4.2 你有权选择接受或拒绝接受cookies。你可以通过修改浏览器的设置以拒绝接受cookies，但是我们需要提醒你，因为你拒绝接受cookies，你可能无法使用依赖于cookies的滴滴语音服务的部分功能。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item5 {
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