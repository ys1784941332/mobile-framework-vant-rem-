import axios from "axios";
export function request(config) {
  // 1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://agentsys.freelynet.com:9001/',
    timeout: 5000,
  });

  // 2.1 axios的拦截器
  instance.interceptors.request.use(
    (config) => {
      return config; // 处理完 配置 要传出去
    },
    (err) => {
      console.log(err);
    }
  );
  // 2.2 响应拦截
  instance.interceptors.response.use((res) => {
    return res.data; 
  });

  // 3. 发送真正网络请求
  // 因为instance(config) 本身是 promise, 所以 return 出去，使用时直接 .then() .catch()
  return instance(config);
}
