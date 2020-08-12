<template>
  <header
    class="fixed w-full max-w-full bg-green-400 z-10 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <nav
      class="px-2 pt-2 pb-4 bg-green-300 hidden sm:flex sm:p-0 sm:bg-green-400"
    >
      <router-link
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-green-500"
        to="/"
        >Home</router-link
      >
      <router-link
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-500 sm:mt-0 sm:ml-2"
        to="/about"
        >About</router-link
      >
    </nav>
    <div class="flex items-center justify-between px-5 py-3 sm:p-0">
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-900 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
      <div>
        <a
          href="#"
          class="text-2xl leading-none font-dosis font-medium sm:text-center"
        >
          <img
            class="inline-block align-middle h-10 mr-2 sm:h-15 sm:mr-4 md:h-15 md:mr-3"
            alt="Vue Small Logo"
            src="../assets/img/logo.png"
          />
          <span class="text-white font-dosis items-center">Vue.js</span>
        </a>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 bg-green-300"
    >
      <router-link
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-green-500"
        to="/"
        >Home</router-link
      >
      <router-link
        class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-green-500 sm:mt-0 sm:ml-2"
        to="/about"
        >About</router-link
      >
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>
