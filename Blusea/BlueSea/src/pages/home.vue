<template>
  <div class="home">
    <el-container style="height: 57.5625rem; border: 1px solid #fff">
      <el-aside width="200px" style="background-color: #fff">
        <el-menu
          :default-openeds="list"
          style="height:100%"
          router
          @open="handleOpen"
          :default-active="currentMenu"
        >
          <el-submenu index="1">
            <template slot="title">礼物管理</template>
            <el-menu-item index="/lw1">礼物配置</el-menu-item>
            <el-menu-item index="/lw2">礼物记录</el-menu-item>
          </el-submenu>

          <!-- <el-submenu index="2">
            <template slot="title">资金管理</template>
            <el-menu-item index="/zj1">提现申请</el-menu-item>

            <el-menu-item index="/zj2">提现设置</el-menu-item>
            <el-menu-item index="/zj3">充值记录</el-menu-item>
            <el-menu-item index="/zj4">数据图表</el-menu-item>
          </el-submenu>-->

          <el-submenu index="3">
            <template slot="title">房间管理</template>
            <el-menu-item index="/fj1">房间分类</el-menu-item>
            <el-menu-item index="/fj2">房间列表</el-menu-item>
            <el-menu-item index="/fj3">房间数据</el-menu-item>
            <el-menu-item index="/fj4">房间踢人</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">举报管理</template>
            <el-menu-item index="/jb1">举报管理</el-menu-item>
            <el-menu-item index="/jb2">封号和解封</el-menu-item>
          </el-submenu>

          <el-menu-item index="/gg">
            <span slot="title">公告管理</span>
          </el-menu-item>

          <el-submenu index="6">
            <template slot="title">用户管理</template>
            <el-menu-item index="/yh1">用户列表</el-menu-item>
            <el-menu-item index="/yh2">用户归属</el-menu-item>
            <el-menu-item index="/yh3">资金明细</el-menu-item>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">协议号</template>
            <el-menu-item index="/xy1">协议号列表</el-menu-item>
            <el-menu-item index="/xy2">协议号设置</el-menu-item>
            <el-menu-item index="/xy3">房间协议号</el-menu-item>
          </el-submenu>

          <el-submenu index="8">
            <template slot="title">砸蛋</template>
            <el-menu-item index="/zd1">数据总览</el-menu-item>
            <el-menu-item index="/zd2">数据查询</el-menu-item>
            <el-menu-item index="/zd3">参数设置</el-menu-item>
          </el-submenu>

          <el-submenu index="9">
            <template slot="title">增删改查管理员</template>
            <el-menu-item index="/gly1">添加管理员</el-menu-item>
            <el-menu-item index="/gly4">查询管理员</el-menu-item>
          </el-submenu>

          <el-submenu index="10">
            <template slot="title">管理员个人中心</template>
            <el-menu-item index="/main1">修改个人资料</el-menu-item>
            <el-menu-item index="/main2">修改密码</el-menu-item>
          </el-submenu>

          <el-submenu index="11">
            <template slot="title">版本管理</template>
            <el-menu-item index="/bb1">android版</el-menu-item>
            <el-menu-item index="/bb2">ios版</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ["1"],

      currentMenu: "/jb1"
    };
  },

  created() {
    this.getUrl();
  },

  methods: {
    handleOpen(key) {
      this.list = [key];
      this.getUrl();
    },
    getUrl() {
      let currentUrl = window.location.href;

      this.currentMenu = currentUrl.split("#")[1];
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  -webkit-user-select: none;

  -moz-user-select: none;

  -ms-user-select: none;

  user-select: none;
}

.home {
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  .el-container {
    .el-aside {
      .el-menu {
        height: 100%;
      }
    }
  }
}
</style>