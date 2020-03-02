<template>
  <div class="item1">
    <div class="left">
      <div class="l1">
        <img src="../../assets/images/ipad.png" alt />
      </div>
      <span>提供Android APP</span>
    </div>
    <div class="right">
      <van-icon name="arrow-down" color="#ccc" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.item1 {
  //  max-width: 48rem;
  //  min-width: 23.4375rem;
  display: flex;
  justify-content: space-between;
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  padding-bottom: 0.4375rem;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
  .left {
    display: flex;
    .l1 {
      margin-right: 0.3125rem;
      img {
        height: 1rem;
        width: 1rem;
      }
    }
    font-size: 10px;
    line-height: 1rem;
    color: rgba($color: #000000, $alpha: 0.4);
  }
}
</style>
