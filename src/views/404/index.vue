<template>
  <div class="container">
    <div class="error">
      您没有当前页面的权限,请<span class="click" @click="handleClick"> 点击 </span>前往有权限的页面
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['firstPath'])
  },
  methods: {
    handleClick () {
      this.$router.push(this.firstPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: #fff;
  border-radius: 10px;
  .error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    .click {
      color: red;
      cursor: pointer;
    }
  }
}
</style>
