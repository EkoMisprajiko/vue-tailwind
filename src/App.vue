<template>
  <div id="app" class="antialiased text-gray-900 bg-gray-100">
    <router-view />
    <div id="nav" class="flex items-center justify-center">
      <router-link class="m-1 font-semibold hover:text-gray-600 p-4" to="/"
        >Home</router-link
      >
      |
      <router-link class="m-1 font-semibold hover:text-gray-600 p-4" to="/about"
        >About</router-link
      >
    </div>
  </div>
</template>

<script></script>

<style></style>
