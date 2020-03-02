<template>
  <div class="tp">
    <div class="t1">
      <ul class="lbt">
        <li v-for="(item) in list" :key="item">
          <img :src="item" alt />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        "http://ddapp2.blueseashark.cn/manager/images/app1.jpg",
        "http://ddapp2.blueseashark.cn/manager/images/app2.jpg",
        "http://ddapp2.blueseashark.cn/manager/images/app3.jpg",
        "http://ddapp2.blueseashark.cn/manager/images/app4.jpg"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.tp {
  height: 15.3125rem;
  position: relative;
  width: 100%;
  padding-bottom: 1rem;
  //  max-width: 48rem;
  //  min-width: 23.4375rem;
  .t1 {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    .lbt {
      width: 100%;

      padding-top: 0.625rem;

      overflow: scroll;
      display: flex;

      li {
        width: 9.375rem;
        margin-left: 0.625rem;

        img {
          height: 15rem;
          width: 9.375rem;
          margin-right: 0.625rem;
        }
      }
    }
  }
}
</style>
