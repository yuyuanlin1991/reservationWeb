import axios from 'axios'
//axios.defaults.baseURL = 'https://api.example.com';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const http = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'test'}
  });
  http.interceptors.response.use(function (response) {
    // 归一化处理数据
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
  export default http