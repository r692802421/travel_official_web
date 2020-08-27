import axios from "@/utils/axios";
import qs from "qs";

export function imageUpload(data) {
  return axios({
    url: `upload/imageUpload`,
    method: "post",
    data: qs.stringify(data)
  });
}

//合同列表
export function omscontractList(data) {
  return axios({
    url: "sys/omscontract/list",
    method: "get",
    params: data
  });
}
//送达项目下拉
export function getItemsList() {
  return axios({
    url: "sys/omsorderm/getItemsList",
    method: "get"
  });
}
//新增提货单的地址下拉
export function getAddress() {
  return axios({
    url: "sys/omsaddress/getAddress",
    method: "get"
  });
}
