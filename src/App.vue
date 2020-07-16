<template>
  <div id="app" class="antialiased text-gray-900 bg-gray-100">
    <Navbar />
    <div id="nav" class="flex items-center justify-center p-6 md:p-8"></div>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>
<style></style>
