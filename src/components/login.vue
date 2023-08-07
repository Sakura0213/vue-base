<template>
    <el-button @click="login" type="primary" plain>请求</el-button>
    <el-button @click="clear" type="primary" plain>清空</el-button>
    <el-button @click="open" type="primary" plain>Click</el-button>
    <p v-show="show">


        <el-space wrap>
            <el-card v-for="res1 in myjson" class="box-card" style="width: 250px">
                <template #header>
                    <div class="card-header">
                        <span>{{ index }}</span>
                        <span>{{ res1.age }}</span>
                        <span>{{ res1.secretIdentity }}</span>
                    </div>
                </template>
                <div v-for=" res2 in res1.powers" class="text item">
                    {{ res2 }}
                </div>
            </el-card>
        </el-space>



    </p>
</template>
   
<script >
import { ElButton, ElMessage, ElMessageBox } from 'element-plus'
// import type { Action } from 'element-plus'

export default {
    data() {
        return {
            myjson: "",
            show: true
        }
    },
    methods: {
        async login() {
            if (!this.show) {
                this.show = true
            }
            try {
                let response = await this.$axios.get('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
                // 处理接口响应
                this.myjson = response.data.members
            } catch (error) {
                console.error(error)
            }
        },
        open() {
            ElMessageBox.alert("提示信息", '弹出框标题', {
                // if you want to disable its autofocus
                // autofocus: false,
                confirmButtonText: '确认按钮'
                ,
                //回调函数
                callback: (action) => {
                    ElMessage({
                        type: 'info',
                        message: `返回信息: ${action}`,
                    })
                },
            })
        },
        clear() {
            this.show = false

        }
    }
}
</script>