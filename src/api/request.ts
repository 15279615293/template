import axios from "axios";

const request = axios.create({
    baseURL:'http://hmmm-api.itheima.net',
    timeout:1000
})

request.interceptors.request.use(config=>{
    if(window.localStorage.getItem('token')){
        config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`
    }
    return config
},error=>{
    return Promise.reject(error)
})

request.interceptors.response.use(result=>{
    return result.data
},error=>{
    return Promise.reject(error)
})

export default request