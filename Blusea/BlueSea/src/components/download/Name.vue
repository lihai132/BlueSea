<template>
  <div class="name">
    <div class="tp">
      <img :src="src" alt />
    </div>

    <div class="n1">
      <h4>{{name}}</h4>
      <div class="title">{{title}}</div>
      <ul>
        <li>
          <a href="http://ddapp2.blueseashark.cn/manager/app/android/updateModel.apk">下载</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: "http://ddapp2.blueseashark.cn/manager/images/logo.png",
      name: "滴滴语音-欢乐交友",
      title: "优质的直播交友平台"
    };
  }
};
</script>
<style lang="scss" scoped>
.name {
  display: flex;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
  // max-width: 48rem;
  // min-width: 23.4375rem;
  .tp {
    width: 65px;
    height: 65px;
    border: 1px solid rgba($color: #000000, $alpha: 0.4);
    border-radius: 8px;
    margin-right: 0.8125rem;

    img {
      width: 65px;
      height: 65px;
      margin: auto;
      border-radius: 8px;
    }
  }

  .n1 {
    h4 {
      padding: 0;
      margin: 0;
      font-size: 1rem;
      line-height: 1.125rem;
    }
    .title {
      font-size: 0.625rem;
      color: rgba($color: #000000, $alpha: 0.4);
    }

    ul {
      display: flex;
      margin-top: 0.625rem;
      li:nth-child(1) {
        font-size: 0.625rem;
        color: #fff;
        line-height: 1.125rem;
        background: #ccc;
        width: 3.125rem;
        text-align: center;
        border-radius: 0.5625rem;
        margin-right: 3%;
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
