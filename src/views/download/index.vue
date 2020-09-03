<template>
  <div class="download">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="3">
        <!-- <div class="logoDiv">
          <img src="../../assets/image/download/logo2.png" alt="" />
        </div> -->
        <h2>萤 火 虫 游 迹</h2>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8">
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
            <img src="../../assets/image/download/phone0.png" alt="" />
          </div>
        </div>
      </div>
      <div class="myfooter">
        <ul>
          <li v-for="item in list.configs" :key="item">
            <el-divider direction="vertical"></el-divider>
            <a :href="item.href" target="_blank">{{ item.text }}</a>
          </li>
        </ul>

        <!-- <el-divider direction="vertical"></el-divider>
        <span>关于我们</span>
        <el-divider direction="vertical"></el-divider>
        <span>隐私条款</span>
        <el-divider direction="vertical"></el-divider>
        <span>用户协议</span>
        <el-divider direction="vertical"></el-divider>
        <span>下载页</span> -->
        <p>
          粤ICP备19160780号
          <a href="https://www.nuokwan.com/" target="_blank">©NuoKwan</a>
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: {
        appBuilt: {
          appBuild: 1,
          appName: "游迹网",
          content: "#项目核心功能上线",
          createdAt: 1595774331,
          download: "https://apple.store.com",
          driver: "ios",
          forcedUpdate: false,
          id: "5f15d00177bd2344e474e349",
          publishTime: 1595612392,
          remark: "第一个ios版本",
          version: "1.0.0"
        },
        configs: [
          {
            href: "https://api.word-server.com/app/contactUs",
            text: "联系我们"
          },
          {
            href: "https://api.word-server.com/app/about",
            text: "关于我们"
          },
          {
            href: "https://api.word-server.com/app/privacy",
            text: "隐私条款"
          },
          {
            href: "https://api.word-server.com/app/agreement",
            text: "用户协议"
          },
          {
            href: "https://apple.store.com",
            text: "下载页"
          }
        ],
        appCode: "HQrLOP",
        email: "3562485439@qq.com",
        QQ: "3562485439",
        wechat: "dongfeng87315"
      }
    };
  },
  methods: {
    iosDown() {
      window.open("https://apple.store.com", "blank");
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
.download {
  // padding: 0 180px;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 930px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../../assets/image/download/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.el-row {
  padding: 0 300px;
  height: 100px;
  line-height: 100px;

  h2 {
    color: white;
    font-size: 18px;
  }
  .logoDiv {
    padding: 10px 0;
    width: 90.9px;
    height: 80px;
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
  padding: 50px 300px;
  width: 100%;
  // height: 700px;

  .container {
    width: 100%;
    height: 720px;
    // width: 900px;
    display: flex;
    justify-content: space-between;

    > div {
      // flex: 1;
    }
    .left {
      width: 600px;
      padding-top: 200px;
      // padding-left: 40px;
      p {
        height: 31px;
        font-size: 30px;
        font-family: PingFang SC;
        font-weight: bold;
        color: white;
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
      display: flex;
      justify-content: flex-end;
      .phoneDiv {
        width: 400px;
        img {
          width: 80%;
        }
      }
    }
  }
  .myfooter {
    ul {
      margin-left: 20%;
      width: 60%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-weight: 600;
    }
    p {
      text-align: center;
      margin-bottom: 10px;
    }
  }

  // background-image: url("../../assets/image/login/bg1.png");
}
</style>
