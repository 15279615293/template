<template>
<div class="menu">
  <el-menu
    :default-active="nowPaths"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :router="true"
    :unique-opened="true"
  >
  <el-menu-item index="/dashboard">
    <i class="iconfont icon-dashboard"></i>
      <template #title>数据概览</template>
    </el-menu-item>
    <template v-for="item in newRoutes" :key="item.name">
      <el-sub-menu :index="item.path"  v-if="item.children">
      <template #title>
        <i :class="`iconfont ${item.meta.icon}`"></i>
        <span>{{ item.meta.title }}</span>
      </template>
        <el-menu-item :index="item.path+'/'+items.path" v-for="items in item.children" :key="items.name" >
          <i class="iconfont icon-component"></i>
          {{ items.meta.title }}
        </el-menu-item>
    </el-sub-menu>
    <el-menu-item :index="item.path" v-else>
      <i :class="`iconfont ${item.meta.icon}`"></i>
      <template #title>{{ item.meta.title }}</template>
    </el-menu-item>
    </template>
  </el-menu>
</div>
</template>

<script lang="ts" setup>
import { ref,watch } from 'vue'
import emmitter from '@/utils/mitt';
import {newRoutes} from "@/router/index.ts"
let isCollapse = ref(false)
let nowPaths = ref('')

emmitter.on('isCollapse',()=>{
  isCollapse.value = !isCollapse.value
})

const props =  defineProps<{
  nowPath:string
}>()
// console.log(props.nowPath)
watch(()=>props.nowPath,(a)=>{
     nowPaths.value = a
})

</script>

<style scoped>
.menu {
    height: calc(100vh - 70px);
    float: left;
    position: sticky;
    top: 70px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100vh - 70px);
}
.iconfont{
  margin-right: 10px;
}
</style>
