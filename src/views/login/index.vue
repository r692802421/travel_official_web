<template>
  <div class="login">
    <div class="loginCube">
      <div class="imgDiv">
        <h2>Hello</h2>
        <p>欢迎登陆GO旅游后台系统</p>
        <!-- <img src="../../assets/image/login/login_cube.png" alt="" /> -->
      </div>
      <div class="rightCube">
        <div class="logoDiv">
          <img src="../../assets/image/download/logo.png" alt="" />
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账号登录" name="first">
            <el-form ref="form" :rules="rules" :model="form" class="loginForm">
              <el-form-item prop="username">
                <el-input
                  v-model="form.username"
                  placeholder="账号/邮箱"
                  size="small"
                  clearable
                >
                  <i slot="prefix">
                    <img src="@/assets/image/login/icon_user.png" alt />
                  </i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password" class="pwdDiv">
                <el-input
                  v-model="form.password"
                  type="password"
                  placeholder="密码"
                  size="small"
                  clearable
                  @keyup.enter.native="onSubmit"
                >
                  <i slot="prefix">
                    <img src="@/assets/image/login/icon_pwd.png" alt />
                  </i>
                </el-input>
              </el-form-item>
              <p>忘记密码</p>
              <div class="loginBtn" @click="onSubmit">立即登录</div>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="手机验证码" name="second">
            <el-form ref="form" :rules="rules2" :model="form" class="loginForm">
              <el-form-item prop="username">
                <el-input
                  v-model="form.username"
                  placeholder="手机号"
                  size="small"
                  clearable
                >
                  <i slot="prefix">
                    <img src="@/assets/image/login/icon_user.png" alt />
                  </i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password" class="pwdDiv">
                <el-input
                  v-model="form.password"
                  type="password"
                  placeholder="验证码"
                  size="small"
                  clearable
                  @keyup.enter.native="onSubmit"
                >
                  <i slot="prefix">
                    <img src="@/assets/image/login/icon_pwd.png" alt />
                  </i>
                  <el-button
                    slot="append"
                    type="primary"
                    v-if="isVisible"
                    round
                    :disabled="!isVisible"
                    @click="getCode"
                    >获取验证码</el-button
                  >
                  <el-button v-else slot="append" type="primary" round
                    >{{ count }}s</el-button
                  >
                </el-input>
              </el-form-item>
              <div class="loginBtn" @click="onSubmit">立即登录</div>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      count: "",
      activeName: "first",
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入您的账号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入您的密码", trigger: "change" }
        ]
      },
      rules2: {
        username: [
          { required: true, message: "请输入您的手机号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入验证码", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    getCode() {
      this.isVisible = !this.isVisible;
      this.count = 59;
      setInterval(() => {
        this.count--;
        if (this.count <= 0) {
          this.count = "重新获取";
        }
      }, 1000);
    },
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          sessionStorage.setItem("isLogin", true);
          this.$router.push("/download");
        } else {
          this.$message({
            message: "请输入正确的信息!",
            type: "error",
            duration: 1000
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../../assets/image/login/bg1.png");
  .loginCube {
    opacity: 0.85;
    width: 1049px;
    height: 540px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -52%);
    .imgDiv {
      h2 {
        font-size: 38px;
        font-family: Roboto;
        font-weight: normal;
        color: rgba(255, 255, 255, 1);
        margin-bottom: 30px;
      }
      p {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
      color: white;
      padding: 100px;
      width: 755px;
      height: 540px;
      background: url("../../assets/image/login/login_cube.png");
    }
    .rightCube {
      width: 378px;
      height: 540px;
      background: white;
      position: absolute;
      left: 671px;
      padding: 60px 52px;
      .logoDiv {
        background: #2870e5;
      }
      .loginForm {
        margin-top: 60px;
        width: 100%;
        p {
          cursor: pointer;
          color: #157ff5;
          font-size: 14px;
          text-align: left;
        }
        .loginBtn {
          margin-top: 45px;
          text-align: center;
          cursor: pointer;
          width: 100%;
          height: 40px;
          line-height: 40px;
          margin-bottom: 60px;
          background: linear-gradient(
            90deg,
            rgba(20, 130, 247, 1),
            rgba(25, 93, 229, 1)
          );
          box-shadow: 0px 8px 18px 0px rgba(87, 147, 214, 0.44);
          border-radius: 27px;
          color: white;
        }
      }
    }
  }
}
</style>
