<template>
  <div class="test">
    <div class="left">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        router
        active-text-color="#ffd04b"
      >
        <div v-for="item in allMenus" :key="item.url">
          <el-menu-item v-if="item.list === null" :index="item.url">
            <!-- <i :class="'el-icon-' + item.icon"></i> -->
            <svg-icon :iconClass="item.icon"></svg-icon>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>

          <el-submenu v-else>
            <svg-icon slot="title" :iconClass="item.icon"></svg-icon>
            <template slot="title">{{ item.name }}</template>
            <el-menu-item
              :index="item.url + '/' + child.url"
              v-for="child in item.list"
              :key="child.url"
            >
              <svg-icon :iconClass="child.icon"></svg-icon>

              {{ child.name }}</el-menu-item
            >
          </el-submenu>
        </div>
      </el-menu>
    </div>
    <div class="right">
      <div>icon</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["allMenus"])
  },

  mounted() {
    console.log("allMenus", this.allMenus);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  width: 100%;
  display: flex;
  .left {
    flex: 1;
    background: #666;
  }
  .right {
    flex: 3;
    background: green;
  }
}
</style>
