<template>
  <div>
    <el-input v-model="counterValue" :value="counterValue" readonly></el-input>
    <el-button type="primary" @click="increment">增加</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counterValue = ref(1);

function increment() {
  counterValue.value += 1;
}

</script>
