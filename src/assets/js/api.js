import axios from 'axios'

axios.defaults.baseURL = ''
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

export default {
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params
    }).catch(function (err) {
      console.log(err)
    })
  },
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data,
      transformRequest: [
        function (data) {
          let ret = ''
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret.slice(0, -1)
        }
      ]
    }).catch(function (err) {
      console.log(err)
    })
  }
}
