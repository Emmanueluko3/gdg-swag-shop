<script lang="ts">
import AddToCart from "@/assets/icons/AddToCart.svg";

export default {
  data() {
    return {
      AddToCartIcon: AddToCart,
    };
  },
  props: {
    product: Object,
  },
  methods: {
    // addToCart() {
    // },
  },
};
</script>

<template>
  <div class="border rounded-lg p-4">
    <div class="h-80 mb-3">
      <img :src="product?.image" class="w-full h-full" alt="Product" />
    </div>
    <div class="flex justify-between items-end">
      <div>
        <h3 class="text-lg font-medium mb-3">{{ product?.title }}</h3>
        <p>&#8358; {{ product?.price }}</p>
      </div>
      <button class="py-3 px-6 rounded-lg bg-customBlue hover:opacity-90">
        <img :src="AddToCartIcon" class="h-6 w-6" alt="" />
      </button>
    </div>
  </div>
</template>
