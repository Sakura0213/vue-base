<template>
  <hello />
  <jsstep />
  <login />
  <gpt />
</template>

<script>
import hello from "./components/hello.vue";
import jsstep from "./components/jsstep.vue";
import login from "./components/login.vue";
import gpt from "./components/gpt.vue";


export default {
  data() {
    return {};
  },
  components: {
    hello,
    jsstep,
    login,
    gpt
  },
};

</script>
