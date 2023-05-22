<template>
    <div>
        <div class="home">
            <Header v-show="isShow" @record="record" />
            <Menus v-show="isShow" :nowPath="nowPath"/>
            <div class="content">
                <el-card class="box-card" v-show="isShow">
                    <el-tag 
                    v-for="tag in recordTag" 
                    :key="tag.title" 
                    class="mx-1" 
                    closable 
                    @close="handleClose(tag.title)"
                    @click="handleClick(tag.path)"
                    >
                        {{ tag.title }}
                    </el-tag>
                </el-card>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { watch, ref, reactive, toRefs } from 'vue';
import Header from '@/components/header/header.vue'
import Menus from '@/components/menus/index.vue'

const router = useRouter()
let isShow = ref(false)
const state = reactive<{ recordTag: RecordTtf[];nowPath:string }>({
    recordTag: [],
    nowPath:''
})
let { recordTag,nowPath } = toRefs(state)

watch(() => router.currentRoute.value, () => {
    isShow.value = router.currentRoute.value.meta.isShow as boolean
})

const record = (content: RecordTtf) => {
    nowPath.value=content.path
    if (recordTag.value.findIndex(item=>item.title==content.title)==-1) {
        recordTag.value.push(content)
    }
}
const handleClose = (tag: string) => {
    recordTag.value.splice(recordTag.value.findIndex(item=>item.title==tag), 1)
}
const handleClick = (path: string) => {
    router.push(path)
}


</script>

<style scoped>
.home {
    width: 100%;
    height: 100vh;
}

.home .content {
    width: 100%;
    height: calc(100vh - 70px);
}

.box-card {
    line-height: 34px;
    height: 34px;
    margin-bottom: 20px;
}

.el-card {
    --el-card-padding: 0px !important;
}

.mx-1 {
    margin: 0 10px;
    cursor: pointer;
}
</style>