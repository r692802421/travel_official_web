import axios from "axios";
import router from "@/router";
import { Message } from "element-ui";
// import store from "@/store"; // 引入组件
const request = axios.create({
  timeout: 60000,
  withCredentials: true,
  // baseURL: "http://192.168.3.115:8091/transaction-admin/"
  baseURL: "http://202.168.189.159:8091/transaction-admin/"
  // baseURL: 'http://localhost:8091/transaction-admin/' // 测试
  // baseURL: "http://202.168.189.159:8089/transaction-admin/"
});

request.interceptors.response.use(
  function(res) {
    if (res.request && JSON.stringify(res.request.response) !== "{}") {
      let timeOut = res.request.response.indexOf("人人权限系统");
      if (timeOut > -1) {
        Message.error("登录超时,请重新登录!");
        store.commit("SET_CLEARLOGIN");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }
    }
    return res.data;
  },
  function(error) {
    if (error.toString() === "Error: Network Error") {
      Message({
        type: "error",
        message: "网络错误,请重试!",
        duration: 1000
      });
      store.commit("SET_CLEARLOGIN");
      router.push("/login");
    }
    error = error.response;
    if (error.status === 403 && error.status) {
      Message({
        type: "error",
        message: error.data.msg,
        duration: 1000
      });
      setTimeout(() => {
        store.commit("SET_CLEARLOGIN");
        router.push("/login");
      }, 1000);
    }
    if (error.status === 404 && error.status) {
      console.log("404");
    }
    if (error.status === 400 && error.status) {
      Message({
        type: "warning",
        message: error.data.msg,
        duration: 2000
      });
    }
    if (error.status === 500 && error.status && error.data.msg) {
      Message({
        type: "warning",
        message: error.data.msg,
        duration: 1000
      });
    }
    if (error.status === 503) {
      Message.error("503错误");
    }
    if (error.status === 504) {
      Message.error("504错误");
    }
    return Promise.reject(error);
  }
);
export default request;
