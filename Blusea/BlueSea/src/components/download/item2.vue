<template>
  <div class="item2">
    <div class="text">
      <p v-for="(item,index) in list" :key="index" dir="ltr" data-test-bidi>{{item}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "滴滴语音是基于“语音房间”进行语音社交的app，通过滴滴语音，你可以结识来自全世界的美好声音",
        "只要滴滴一声，ta就出现在你耳边，不论相隔多远，此刻仿佛就在你身边。滴滴一声就可以组队开黑游戏，滴滴一声就可以组建cp互相陪伴，滴滴一声就可以连麦连音。",
        "语音房间 — 不同风格和内容的房间里，有几千位优质主播24小时语音直播，分享关于情感与生活的体验和快乐，提供游戏陪玩，金曲点唱等各式各样的优质语音服务，帮助用户疏解孤单和烦恼，提升技能水平，提高游戏段位，体验不一样的人生",
        "开黑语音 — 不用跳出游戏就能联系好友自由沟通，高音质无损语音，不卡不掉不延迟，给你更好的开黑游戏体验",
        "IM 聊天 — 即时聊天，快速互动",
        "cp扩列 — 优质海量用户，随心匹配，邂逅最心动的那个TA",
        "K歌派对 — 拼歌艺，收礼物，K歌之王就是你本人"
      ]
    };
  },

  methods: {}
};
</script>
<style lang="scss" scoped>
.item2 {
  // max-width: 48rem;
  // min-width: 23.4375rem;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  width: 100%;

  position: relative;
  .text {
    width: 100%;
    height: 100%;
    font-size: 0.625rem;
    line-height: 0.5rem;
    p {
      padding: 0;
      padding-bottom: 5px;
      margin: 0;
      margin-right: 0.625rem;
      font-size: 0.625rem;
      line-height: 1rem;
      // display: none;
    }
    .d1,
    .p2 {
      display: block;
    }
  }
}
</style>
