<template>
  <div>
    <img class="inline-flex" alt="Vue logo" src="../assets/img/logo.png" />
    <HelloWorld msg="Hello World!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
