<template>
  <div class="m-auto">
    <a
      href="#"
      class="inline-block rounded-xl hover:outline-none hover:shadow-xl"
    >
      <div class="relative pb-4/5">
        <div class="">
          <img
            class="absolute rounded-t-xl h-full w-full object-cover"
            :src="property.imageUrl"
            :alt="property.imageAlt"
          />
        </div>
        <div class="absolute right-0 mx-2 sm:m-4">
          <button
            class="inline-flex px-2 py-1 rounded-sm shadow-lg bg-green-500 hover:bg-green-600 focus:outline-none active:bg-green-800 text-xxxs text-white uppercase font-semibold sm:text-base"
          >
            PRODUCT TYPE
          </button>
        </div>
      </div>

      <div class="bg-white p-6 rounded-b-xl">
        <div class="flex items-baseline">
          <span
            class="bg-teal-200 text-teal-800 text-xs px-2 rounded font-semibold uppercase tracking-wide hidden sm:flex"
            >New</span
          >
          <div
            class="ml-2 text-gray-600 text-xs font-semibold uppercase tracking-wide"
          >
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
        <h4 class="mt-1 font-semibold text-lg ">{{ property.title }}</h4>
        <div class="mt-1">
          {{ property.formattedPrice }}
          <span class="text-gray-600 text-sm "> / week </span>
        </div>
        <div class="mt-2 flex items-center">
          <svg
            v-for="i in 5"
            :key="i"
            :class="i <= property.rating ? 'text-teal-500' : 'text-gray-400'"
            class="h-4 w-4 fill-current"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
            />
          </svg>
          <span class="ml-2 text-gray-600 text-sm hidden sm:flex"
            >{{ property.reviewCount }} reviews</span
          >
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "PropertyCard",
  props: ["property"]
};
</script>
