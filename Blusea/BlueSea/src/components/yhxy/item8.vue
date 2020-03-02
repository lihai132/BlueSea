<template>
  <div class="item8">
    <div class="title">4、收费服务</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "4.1 本平台所提供部分服务或应用可能涉及付费，你输入帐号、密码的行为视为对收费服务的接受，你一旦接受收费服务，需要按本平台公示的收费标准支付费用；",
        "4.2 你享受的付费服务可能需要一次性付费，如你中途取消服务，本平台有权不予退还款项；",
        "4.3 你享受的付费服务也可能需要周期性、多次性付费，每项付费服务到期前，用户若需要取消该项服务，应向本平台提出；若用户没有及时提出，视为同意对该项收费服务自动续费；",
        "4.4 你付费后获得的权益不得转让给第三人。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item8 {
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