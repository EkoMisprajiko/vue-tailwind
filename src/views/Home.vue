<template>
  <div>
    <div class="flex bg-white">
      <div
        class="px-8 py-12 max-w-xl mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:w-2/3 lg:py-12 lg:px-12 xl:pr-0"
      >
        <div class="xl:max-w-full xl:ml-auto">
          <img
            class="mt-0 h-88 w-full mx-auto max-w-md lg:hidden"
            alt="Vue Big Logo"
            src="../assets/img/vue-logo.png"
          />
          <h1
            class="mt-8 text-2xl font-bold text-blue-900 leading-tight sm:mt-8 sm:text-4xl lg:mt-0 lg:text-3xl xl:text-4xl"
          >
            Vue (pronounced like view) is:
            <br class="hidden lg:inline" /><span class="text-green-700"
              >a progressive framework for building user interfaces.</span
            >
          </h1>
          <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            Unlike other monolithic frameworks, Vue is designed from the ground
            up to be incrementally adoptable. The core library is focused on the
            view layer only, and is easy to pick up and integrate with other
            libraries or existing projects.
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
      <div class="hidden py-1/50 lg:block lg:w-1/2 lg:pr-6 xl:w-1/3">
        <div class="relative h-full lg:max-w-md xl:mx-auto">
          <img
            class="absolute h-full w-full"
            alt="Vue Logo"
            src="../assets/img/vue-logo.png"
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-300 px-3 py-2 m-auto sm:px-3 md:px-3 lg:px-4 xl:px-4">
      <div class="flex flex-wrap m-auto">
        <div
          class="flex flex-col px-3 pt-4 pb-2 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
          v-for="property in properties"
          :key="property"
        >
          <PropertyCard :property="property" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PropertyCard from "../components/PropertyCard";

export default {
  components: {
    PropertyCard
  },
  data() {
    return {
      properties: [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1497398276231-94ff5dc90217?w=900",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1503863937795-62954a3c0f05?w=900",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1511084901824-1c57f5a16c98?w=900",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1525935944571-4e99237764c9?w=900",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1562280482-3847fb9b0b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1486927819089-e4d82c5e2444?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1536336540266-b5c9866d0489?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          imageAlt: "Rear view of modern home with pool",
          beds: 3,
          baths: 2,
          title: "Modern executive home in the heart of historic Los Angeles",
          priceInCents: 190000,
          formattedPrice: "$1,900.00",
          reviewCount: 34,
          rating: 4
        }
      ]
    };
  }
};
</script>
