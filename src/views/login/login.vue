<template>
    <div>
        <div class="images">
            <div class="login">
                <div class="logo">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAFKq9WqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNWVhODVhMy04ODdmLTM3NGQtYTA0MS1kMTg3YTg0MmMwZDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjVEMDY2MDIzOEY0MTFFOTlCRTJFNUYxNERBMjM4NjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjVEMDY2MDEzOEY0MTFFOTlCRTJFNUYxNERBMjM4NjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRhYTQ1Y2NmLTQzN2UtNmU0Mi1hN2Q4LTI4YmEwMDM3NzZjMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjcxMDc3YWI5LTAzZmMtMTFlOS04MDA2LTkyOTJj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"
                        alt="">
                    <p>用户登录</p>
                </div>

                <!-- :rules="rules"  -->
                <div class="loginform">
                    <el-form ref="ruleFormRef" :model="ruleForm" class="demo-ruleForm" :rules="rules">
                        <el-form-item prop="userName">
                            <el-input v-model="ruleForm.userName" type="test" autocomplete="off" size="large"
                                input-style="height:47px" placeholder="请输入账号">
                                <template #prefix>
                                    <i class="iconfont icon-yonghuming"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="ruleForm.password" type="password" autocomplete="off" size="large"
                                input-style="height:47px" placeholder="请输入密码">
                                <template #prefix>
                                    <i class="iconfont icon-ziyuanxhdpi"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" class="btn" @click="login()">登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs,ref } from 'vue'
import {getToken,getAdminMenu} from '@/api'
import { sha256 } from 'js-sha256';
import {useRouter} from 'vue-router'


const state = reactive({
    ruleForm: {
        userName: 'demo',
        password: 'hm#qd@mm!'
    }
})
const { ruleForm } = toRefs(state)

const router = useRouter()

const validate = (rule: any, value: any, callback: any)=>{
    if (value === '') {
    callback(new Error('请输入账号'))
    }else{
        callback()
    }
    console.log(rule)
}
const validate2 = (rule: any, value: any, callback: any)=>{
    if (value === '') {
    callback(new Error('请输入密码'))
    }else{
        callback()
    }
    console.log(rule)
}
const rules = reactive({
    userName: [{ validator: validate, trigger: 'blur' }],
    password: [{ validator: validate2, trigger: 'blur' }],
})

const ruleFormRef = ref()
const login =  ()=>{
    ruleFormRef.value.validate().then((res:boolean)=>{
       if(res){
        const newPsw = sha256(ruleForm.value.password)
        getToken({username:ruleForm.value.userName,password:newPsw}).then(res=>{
            if(res.token){
                if(!window.localStorage.getItem('token')){
                    window.localStorage.setItem('token',res.token)
                }
                getAdminMenu().then(res=>{
                    console.log(res)
                })
                router.push('/dashboard')
            }        
        })
       }
    },(err:{})=>{
        console.log('错误',err)
    })
}

</script>

<style scoped>
.images {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/login.jpg') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login {
    width: 440px;
    height: 271px;
    background-color: white;
    padding: 40px;
}

.logo {
    width: 100%;
    height: 41px;
    display: flex;
    align-items: center;
}

.logo img {
    width: 35px;
    height: 26px;
}

.logo p {
    font-size: 22px;
    margin-left: 10px;
}

.loginform {
    margin-top: 20px;
    width: 100%;
    height: 200px;
}
.btn{
    width: 200px;
    height: 40px;
    margin: 20px auto;
}
</style>