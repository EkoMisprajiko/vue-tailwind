<template>
  <div id="app" class="antialiased text-gray-900">
    <router-view />
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="p-4 m-auto">
      <div class="flex flex-wrap">
        <div
        class="w-full sm:w-1/2 md:w-1/3 flex flex-col p-3 bg-white"
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
import PropertyCard from "./components/PropertyCard";

export default {
  name: "app",
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
            "https://source.unsplash.com/900x600",
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
            "https://source.unsplash.com/900x600",
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
            "https://source.unsplash.com/900x600",
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

<style></style>
