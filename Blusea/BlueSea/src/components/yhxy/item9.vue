<template>
  <div class="item9">
    <div class="title">5、未成年人使用条款</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "5.1 若你是未满18周岁的未成年人，在使用本平台服务前，应在你的父母或其他监护人监护、指导下阅读并同意本协议",
        "5.2 本平台重视对未成年人个人信息的保护，未成年用户在填写个人信息时，请加强个人保护意识并谨慎对待，并在监护人指导时正确使用本服务；",
        "5.3 未成年用户理解如因你违反法律法规、本协议内容，则你及你的监护人应依照法律规定承担因此而导致的一切后果；",
        "5.4 未成年人用户特别提示；",
        "5.4.1 青少年及使用本服务应该在其监护人的监督指导下，在合理范围内正确学习使用网络，避免沉迷虚拟的网络空间，养成良好上网习惯，并且家长应严格管理好银行卡、支付宝、微信等的支付密码，如因家长监管疏忽造成的损失本平台不承担任何责任；",
        "5.4.2 未成年人用户知悉并同意，本平台为更好地保护未成年人，本平台将对未成年人用户接受并使用本服务时进行一定的限制，包括但不限于服务内容的限制使用、平台收费项目限制使用、平台充值金额的限制等；",
        "5.4.3 为更好的保护未成年人隐私权益，本平台提醒用户慎重发布包含未成年人素材的内容，一经发布，即视为用户同意本平台展示未成年人的信息、肖像、声音等，且允许本平台依据本协议使用、处理该等与未成年人相关的内容；"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item9 {
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