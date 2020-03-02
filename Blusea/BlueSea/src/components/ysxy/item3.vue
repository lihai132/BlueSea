<template>
  <div class="item3">
    <div class="title">2、信息的公开和分享</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "在未经你同意之前，我们不会向任何第三方提供、出售、出租、分享和交易你的个人资料，但以下情形除外：",
        "2.1 为遵守法律法规之要求，包括在国家有关机关或其授权的单位查询时，向其提供有关资料；",
        "2.2 为免除你在生命、身体或财产方面之急迫危险，或为防止他人权益之重大危害；",
        "2.3 为保护蓝海鲨及其关联公司、或其用户的权利及财产；",
        "2.4 在你被他人投诉侵犯知识产权或其他合法权利时，需要向投诉人披露你的必要资料，以便进行投诉处理的；",
        "2.5 为使蓝海鲨合作方和蓝海鲨及其关联公司单独或共同为你提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item3 {
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