<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="3"
        ><div class="logoDiv">
          <img src="../../assets/image/download/logo2.png" alt="" /></div
      ></el-col>
      <el-col :span="14"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6">
        <div class="myNav">
          <a href="#">下载</a>
          <a href="#">关于我们</a>
          <a href="#">联系我们</a>
        </div>
      </el-col>
    </el-row>
    <main class="content">
      <div class="container">
        <div class="left">
          <p>世界那么大，总要去看看</p>
          <div class="ios">
            <img
              @click="iosDown"
              src="../../assets/image/download/ios2.png"
              alt=""
            />
          </div>
          <div class="apk">
            <img
              @click="apkDown"
              src="../../assets/image/download/apk2.png"
              alt=""
            />
          </div>
        </div>
        <div class="right">
          <div class="phoneDiv">
            <img src="../../assets/image/download/phone2.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    iosDown() {
      this.$message({
        type: "info",
        duration: "500",
        message: "官网正在维护,请稍后再试!"
      });
    },
    apkDown() {
      this.$message({
        type: "info",
        duration: "500",
        message: "官网正在维护,请稍后再试!"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  padding: 0 500px 0 180px;
  height: 60px;
  line-height: 60px;
  background: linear-gradient(
    90deg,
    rgba(120, 175, 243, 1),
    rgba(25, 93, 229, 1)
  );
  .logoDiv {
    width: 68.9px;
    height: 60px;
    img {
      width: 100%;
    }
  }
  .myNav {
    a {
      color: white;
      &:first-child {
        color: violet;
      }
      &:hover {
        color: violet;
      }
      &:visited {
        // color: red;
      }
    }
    display: flex;
    justify-content: space-between;
    padding-right: 33px;
    // margin-right: 181px;
  }
}
.content {
  padding: 0 180px;
  position: absolute;
  width: 100%;
  height: calc(100% - 60px);
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .container {
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: 100% 100%;
    // position: absolute;
    display: flex;
    justify-content: space-between;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    > div {
      flex: 1;
    }
    .left {
      padding-top: 200px;
      // padding-left: 40px;
      p {
        height: 31px;
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: bold;
        // color: white;
        margin-bottom: 50px;
      }
      .ios,
      .apk {
        cursor: pointer;
        > img {
          width: 64%;
        }
      }
      .ios {
        margin-bottom: 20px;
      }
    }
    .right {
      .phoneDiv {
        img {
          width: 60%;
        }
      }
    }
  }
  // background-image: url("../../assets/image/login/bg1.png");
}
</style>
