<template>
  <div class="pf">
    <ul>
      <li>
        <span class="s1">{{value}}</span>
        <van-rate v-model="value" disabled size="14px" />
        <div>
          <span>{{pf}}</span>万个评分
        </div>
      </li>
      <li>
        <div>{{lb}}</div>
        <div>娱乐</div>
      </li>
      <li>
        <div>{{nl}}</div>
        <div>年龄</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4.8,
      pf: "216",
      lb: "#7",
      nl: "12+"
    };
  }
};
</script>
<style lang="scss" scoped>
.pf {
  margin-left: 0.625rem;
  margin-right: 0.625rem;
  margin-top: 1rem;
  // max-width: 48rem;
  //  min-width: 23.4375rem;
  ul {
    display: flex;
    justify-content: space-between;
    li:nth-child(1) {
      .s1 {
        margin-right: 0.4375rem;
        color: #bdbdbd;
      }
      div {
        font-size: 0.375rem;
        color: #bdbdbd;
      }
    }

    li:nth-child(2) {
      div:nth-child(1) {
        font-size: 1rem;
        font-weight: 700;
        color: #bdbdbd;
      }
      div:nth-child(2) {
        font-size: 0.375rem;
        color: #bdbdbd;
      }
    }

    li:nth-child(3) {
      margin-right: 0.625rem;
      div:nth-child(1) {
        font-size: 1rem;
        font-weight: 700;
        color: #bdbdbd;
      }
      div:nth-child(2) {
        font-size: 0.375rem;
        color: #bdbdbd;
      }
    }
  }
}
</style>
