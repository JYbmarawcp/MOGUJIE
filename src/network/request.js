import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://106.54.54.237:8000/api/wh',
        timeout: 5000
    })

    //2.axios的拦截器
    //请求拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {})

    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    //发送真正的网络请求
    return instance(config)
}

// 全局注册axios qs
// window.axios = _axios;