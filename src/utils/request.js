// axios

import axios from 'axios'
import { MainStore } from '../store/store.js'

export const baseURL = 'http://localhost:8080'
export const CONTENT_TYPE = 'Content-Type'

export const FORM_URLENCODED = 'application/x-www-form-urlencoded; charset=UTF-8'

export const APPLICATION_JSON = 'application/json; charset=UTF-8'
export const TEXT_PLAIN = 'text/plain; charset=UTF-8'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://
    baseURL: baseURL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 60000 // request timeout
})

const store = MainStore()
// request拦截器
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (store.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
            config.headers['Authorization'] = 'Bearer ' + store.token
        }
        return config
    },
    error => {
    // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
    // console.log(response)
    // const res = response.data
        const res = response
        return res.data
        // if the custom code is not 20000, it is judged as an error.
        // if (res.code !== 200) {
        // // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //
        //     }
        //     return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        //     return res
        // }
    },
    error => {
    // console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service