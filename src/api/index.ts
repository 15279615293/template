import request from "./request";


export const getToken = (data:{username:string;password:string}):Promise<LoginItf>=>request.post('/frame/login',data)
export const getAdminMenu = ()=>request.post('/frame/profile')