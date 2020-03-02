<template>
  <div class="home">
    <name />
    <pf />
    <lbt />
    <item1 />
    <item2 />
    <item3 />
  </div>
</template>
<script>
import name from "../components/download/Name.vue";
import lbt from "../components/download/lbt.vue";
import pf from "../components/download/pf.vue";
import item1 from "../components/download/item1.vue";
import item2 from "../components/download/item2.vue";
import item3 from "../components/download/item3.vue";

export default {
  components: {
    name,
    lbt,
    pf,
    item1,
    item2,
    item3
  }
};
</script>
<style lang="scss" scoped>
.el-main {
  padding: 0;
}
</style>
