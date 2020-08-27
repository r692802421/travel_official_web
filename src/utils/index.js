import { Message } from "element-ui";
// import store from '@/store' // 引入组件
export const exitLogin = () => {
  Message.success("退出成功!");
  store.commit("SET_CLEARLOGIN");
  setTimeout(() => {
    location.reload();
  }, 1000);
};

/**
 * 判断是否为空
 */
export function validatenull(val) {
  if (typeof val === "boolean") {
    return false;
  }
  if (typeof val === "number") {
    return false;
  }
  if (val instanceof Array) {
    if (val.length === 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === "{}") return true;
  } else {
    if (
      val === "null" ||
      val == null ||
      val === "undefined" ||
      val === undefined ||
      val === ""
    ) {
      return true;
    }
    return false;
  }
  return false;
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate(data, id = "id", pid = "parentId") {
  var res = [];
  var temp = {};
  for (var i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i];
  }
  for (var k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]["childrens"]) {
        temp[data[k][pid]]["childrens"] = [];
      }
      if (!temp[data[k][pid]]["_level"]) {
        temp[data[k][pid]]["_level"] = 1;
      }
      data[k]["_level"] = temp[data[k][pid]]._level + 1;
      temp[data[k][pid]]["childrens"].push(data[k]);
    } else {
      res.push(data[k]);
    }
  }
  return res;
}
