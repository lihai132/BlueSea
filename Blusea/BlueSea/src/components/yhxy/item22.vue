<template>
  <div class="item22">
    <div class="title">18、免责声明</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "18.1 本平台对于本服务包含的或用户经由或从任何与本服务有关的途径所获得的任何内容、信息或广告，不保证其正确性或可靠性；并且对于用户经本服务上的广告、展示而购买、取得的任何产品、信息或资料，本平台不负保证责任。用户自行承担使用本服务的风险；",
        "18.2 本平台有权改善或更正本服务任何部分之任何疏漏、错误；",
        "18.3 本平台不保证以下事项（包括但不限于）：",
        "(a) 本服务适合用户的使用要求；",
        "(b) 本服务不受干扰，及时、安全、可靠或不出现错误；",
        "(c) 你经由本服务取得的任何产品、服务或其他材料符合你的期望；",
        "18.4 你使用经由本服务下载的或取得的任何资料，其风险自行负担；因该使用而导致的手机或其他设备系统损坏或资料流失，你应负完全责任；",
        "18.5 对基于以下原因而造成的利润、商业信誉、资料的损失或其他有形或无形损失，本平台不承担任何直接、间接、附带、衍生或惩罚性的赔偿：",
        "(a) 本服务使用或无法使用；",
        "(b) 经由本服务购买或取得的任何产品、资料或服务；",
        "(c) 用户资料遭到未授权的使用或修改；",
        "(d) 用户资料丢失或被删除；",
        "(e) 其他与本服务相关的事宜。",
        "18.6 你在浏览网际网路时自行判断使用滴滴语音帐号的检索目录。该检索目录可能会引导用户进入到被认为具有攻击性或不适当的网站，本平台没无法查看检索目录所列网站的内容，因此，对其正确性、合法性、正当性不负任何责任。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item22 {
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