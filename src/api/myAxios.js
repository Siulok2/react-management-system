import axios from 'axios'

import qs from 'querystring'

import {message} from 'antd'

import {BASE_URL} from '../config'

import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

axios.defaults.baseURL = BASE_URL

axios.interceptors.request.use((config) => {
    NProgress.start()
    const {method,data} = config
    if(method.toLowerCase() === 'post' && data instanceof Object){
        config.data = qs.stringify(data)
    }
    return config
})

axios.interceptors.response.use(
    (response) => {
        NProgress.done()
        return response.data
    },
    (err) => {
        NProgress.done()
        message.warning('请求失败，请联系管理猿')
        return new Promise(()=>{})
    }
)

export default axios