<template>
  <div class="xz">
    <qriously
      :value="value"
      :size="size"
      :backgroundAlpha="backgroundAlpha"
      style=" width:160px;margin: auto"
    />
    <div style="text-align: center">扫码下载快游app</div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      value: "http://121.40.217.99:8000/app/android/ky.apk",

      size: 160,

      backgroundAlpha: 1
    };
  }
};
</script>
<style lang="scss" scoped>
</style>