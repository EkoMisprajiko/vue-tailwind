<template>
  <div class="flex bg-white">
    <div
      class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
    >
      <div class="xl:max-w-lg xl:ml-auto">
        <div class="w-full mx-auto">
          <a
            href="#"
            class="text-2xl leading-none font-dosis font-medium sm:text-center"
          >
            <img
              class="inline-block align-middle h-10 mr-2 sm:h-15 sm:mr-4 md:h-15 md:mr-3"
              alt="Vue Small Logo"
              src="../assets/img/logo.png"
            />
            <span class="sm:hidden md:inline-block md:text-4xl md:align-middle"
              >Vue.js</span
            >
          </a>
        </div>
        <img
          class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-88 sm:w-full md:h-100 lg:hidden"
          alt="Vue Big Logo"
          src="../assets/img/vue-logo.png"
        />
        <h1
          class="mt-6 text-2xl font-bold text-blue-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"
        >
          Vue (pronounced like view) is:
          <br class="hidden lg:inline" /><span class="text-green-700"
            >a progressive framework for building user interfaces.</span
          >
        </h1>
        <p class=" mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Unlike other monolithic frameworks, Vue is designed from the ground up
          to be incrementally adoptable. The core library is focused on the view
          layer only, and is easy to pick up and integrate with other libraries
          or existing projects.
        </p>
        <div class="mt-4 sm:mt-6">
          <a
            href="#"
            class="inline-block px-5 py-3 rounded-lg shadow-lg bg-green-600 hover:bg-green-400 focus:outline-none focus:shadow-outline active:bg-green-800 text-sm text-white uppercase tracking-wider font-semibold sm:text-base"
            >Get Started Here!</a
          >
        </div>
      </div>
    </div>
    <div class="hidden lg:block lg:w-1/2 lg:relative">
      <img
        class="absolute inset-0 m-auto mr-8 xl:inset-0 xl:m-auto xl:mr-20"
        alt="Vue Logo"
        src="../assets/img/vue-logo.png"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
