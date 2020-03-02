<template>
  <div class="item6">
    <div class="title">5、外部链接</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "滴滴语音服务含有到其他网站的链接。蓝海鲨对其他网站的隐私保护措施不负任何责任。我们可能在任何需要的时候增加商业伙伴或共用品牌的网站，但是提供给他们的将仅仅是综合信息，我们将不会公开你的身份。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item6 {
  padding: 20px 15px 0 15px;
  .title {
    font-size: 1rem;
    font-weight: 500;
  }
  .text {
    font-size: 0.75rem;
    line-height: 1.25rem;
    margin-top: 0.875rem;
  }
}
</style>