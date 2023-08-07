<template>
  <hello />
  <jsstep />
  <login />
</template>

<script>
import hello from "./components/hello.vue";
import jsstep from "./components/jsstep.vue";
import login from "./components/login.vue";

export default {
  data() {
    return {};
  },
  components: {
    hello,
    jsstep,
    login
  },
};

</script>
