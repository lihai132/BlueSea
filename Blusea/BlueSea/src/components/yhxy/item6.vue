<template>
  <div class="item6">
    <div class="title">2、服务条款的变更和修改</div>
    <div class="text" v-for="item in list" :key="item">{{item}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "本平台保留依其自主判断在将来的任何时间变更、修改、增加或删除本服务协议条款的权利。所有修改的协议均构成本服务协议的一部分。本平台有权随时对服务条款进行修改，一旦发生服务条款的变动，本平台将公示修改的内容；当你使用滴滴语音帐号的任何服务时，应接受滴滴语音帐号随时提供的与该服务相关的规则或说明，并且此规则或说明均构成本服务条款的一部分。如果你不同意服务条款的修改，可以主动取消已经获得的服务；如果你继续享用服务，则视为你已经接受服务条款的修改。"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.item6 {
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