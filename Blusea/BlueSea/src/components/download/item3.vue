<template>
  <div class="item3">
    <div class="left">
      <div class="d1">Bluesea</div>
      <div class="d2">开发者</div>
    </div>
    <div class="right">
      <van-icon name="arrow" color="#ccc" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.item3 {
  //  max-width: 48rem;
  //  min-width: 23.4375rem;
  display: flex;
  justify-content: space-between;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  margin-top: 1.2rem;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
  .left {
    .d1 {
      font-size: 0.625rem;
      color: #129be8;
    }
    .d2 {
      font-size: 0.5rem;
      color: rgba($color: #000000, $alpha: 0.3);
    }
  }
}
</style>
