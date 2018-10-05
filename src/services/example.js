import request from "../utils/request";

export default function query() {
  let a = request("/rQ");
  console.log(a);
  return a;
}
