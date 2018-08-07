var axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8848/api/"
});

axiosInstance.interceptors.response.use(
  function(response) {
    // Do something with response data
    // console.log("from interceptor");
    return response;
  },
  async function(error) {
    return Promise.reject(error);
  }
);

function get(url, headers = {}, params = {}) {
  return axiosInstance({
    method: "get",
    url: url,
    headers,
    params
  });
}

function post(url, data, params = {}) {
  return axiosInstance({
    method: "post",
    url,
    data,
    params
  });
}

exports.get = get;
exports.post = post;
