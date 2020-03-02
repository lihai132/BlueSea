<template>
  <div class="item16">
    <div class="title">12、电子公告栏的张贴内容</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "12.1 “电子公告栏”指包括空间、游戏圈、SNS社区和其它一般公众可以使用的区域；",
        "12.2 你一旦在本服务电子公告栏上传或张贴内容，即视为授予本平台该内容著作权之免费及非独家、永久的许可使用权，本平台有权为展示、传播及推广前述内容之目的，对上述内容进行复制、修改、出版。由此展示、传播及推广行为所产生的损失或利润，均由本平台承担或享有。本平台有权自主决定是否给予鼓励或奖励；",
        "12.3 因你进行上述上传或张贴行为，而导致任何第三方提出索赔要求或衍生的任何损害或损失，你须承担全部责任；",
        "12.4 非经本平台事先许可，你不得对他人上传或张贴在电子公告栏或本服务其他内容进行复制、出售或用作其他商业用途。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item16 {
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