<template>
  <div class="item23">
    <div class="title">19、服务的修改和终止</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "19.1 你有发布违法信息、严重违背社会公德、以及其他违反法律禁止性规定的行为，本平台将立即终止对你提供服务；",
        "19.2 你在接受本平台服务时实施不正当行为的，本平台有权终止对该用户提供服务。该不正当行为的具体情形应当在本协议中有明确约定或属于本平台事先明确告知的应被终止服务的禁止性行为，否则不得终止对你提供服务；",
        "19.3 你提供虚假注册身份信息，或实施违反本协议的行为，本平台有权中止对你提供全部或部分服务；本平台方采取中止措施应当通知你并告知中止期间，中止期间应该是合理的，中止期间届满本平台方应当及时恢复对你的服务；",
        "19.4 本平台方根据本条约定中止或终止对你提供部分或全部服务的，由本平台方负举证责任。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item23 {
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