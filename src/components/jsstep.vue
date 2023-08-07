<template>
  <div>{{ msg }}</div>
  <br />
  <el-button @click="log1()">点击</el-button>
  <el-button @click="log2">点击</el-button>
  <el-button @click="countfun">+点击</el-button>
  <p>{{ count }}</p>
  <p>{{ msg1 }}</p>
</template>

//加上了 setup 为组合式 api
<script setup >
import { ref } from "vue";

//引入 ref 后，ref值在模板中使用的时候会自动解包
const msg = "000";
const count = ref(6); //默认值为 6
const msg1 = ref(""); //默认值为 6

const log1 = () => {
  msg1.value += "h_";
};

function log2() {
  msg1.value += "h_";
}

function countfun() {
  ++count.value;
}
</script>
