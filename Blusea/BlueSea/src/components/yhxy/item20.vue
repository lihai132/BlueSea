<template>
  <div class="item20">
    <div class="title">16、手机特色功能说明</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "16.1 你应明确知道，本平台提供的实时定位服务将向你及你的不特定滴滴语音帐号好友提供你的实时空间位置信息；",
        "16.2 你可选择向滴滴语音帐号导入手机通讯簿上所对应的好友关系链，但本平台确保将不导入好友关系链之外的任何信息（包括好友姓名及其他任何相关信息）；",
        "16.3 本平台将对好友关系链通过不可逆转的方式加密存储，包括滴滴语音帐号和你的任何好友都将无法获知你的真实好友关系链和真实手机号码。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item20 {
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