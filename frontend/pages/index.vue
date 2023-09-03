<script setup lang="ts">
import HeroImage from "@/assets/images/HeroImage.svg";
import Google from "@/assets/images/Google.svg";
import Microsoft from "@/assets/images/Microsoft.svg";
import Spotify from "@/assets/images/Spotify.svg";
import Mailchimp from "@/assets/images/Mailchimp.svg";
import Airbnb from "@/assets/images/Airbnb.svg";
import Uber from "@/assets/images/Uber.svg";
import WaterFlask from "@/assets/images/WaterFlask.svg";
import DevfestTShirt from "@/assets/images/DevfestTShirt.svg";
import ProductCard from "~/components/productCard/ProductCard.vue";

const sponsors = [
  Google,
  Microsoft,
  Spotify,
  Mailchimp,
  Airbnb,
  Uber,
  Uber,
  Uber,
];

components: {
  ProductCard;
}

const products = [
  {
    image: DevfestTShirt,
    category: "tshirt",
    title: "DevFest Tshirt",
    price: 600000,
  },
  {
    image: DevfestTShirt,
    category: "tshirt",
    title: "DevFest Tshirt",
    price: 600000,
  },
  {
    image: DevfestTShirt,
    category: "tshirt",
    title: "DevFest Tshirt",
    price: 600000,
  },
  {
    image: DevfestTShirt,
    category: "tshirt",
    title: "DevFest Tshirt",
    price: 600000,
  },

  {
    image: WaterFlask,
    category: "Water Flask",
    title: "White Aluminum Water Bottle",
    price: 600000,
  },
  {
    image: WaterFlask,
    category: "Water Flask",
    title: "White Aluminum Water Bottle",
    price: 600000,
  },
  {
    image: DevfestTShirt,
    category: "tshirt",
    title: "DevFest Tshirt",
    price: 600000,
  },
  {
    image: DevfestTShirt,
    category: "tshirt",
    title: "DevFest Tshirt",
    price: 600000,
  },
  {
    image: WaterFlask,
    category: "Water Flask",
    title: "White Aluminum Water Bottle",
    price: 600000,
  },
  {
    image: WaterFlask,
    category: "Water Flask",
    title: "White Aluminum Water Bottle",
    price: 600000,
  },
  {
    image: WaterFlask,
    category: "Water Flask",
    title: "White Aluminum Water Bottle",
    price: 600000,
  },
  {
    image: WaterFlask,
    category: "Water Flask",
    title: "White Aluminum Water Bottle",
    price: 600000,
  },
];

const tshirts = products.filter((product) => product.category === "tshirt");
const waterFlask = products.filter(
  (product) => product.category === "Water Flask"
);
</script>

<template>
  <div>
    <Header />
    <!-- Hero section -->
    <div class="bg-customWhite px-20 py-28">
      <div class="flex justify-between items-center">
        <div class="w-[45%]">
          <h2 class="text-5xl leading-normal">
            Elevate Your Style with our Exclusive
            <span class="font-bold">Tech-Inspired Merch!</span>
          </h2>
          <p class="py-6 text-lg">
            Explore a curated collection of cutting-edge apparel and accessories
            that fuse technology with fashion, designed to reflect your love for
            innovation and community
          </p>
          <a
            href="#shop"
            class="bg-customBlue rounded-md py-3 px-6 text-white font-medium hover:opacity-80"
          >
            Shop now
          </a>
        </div>
        <div class="w-[38]">
          <img :src="HeroImage" class="w-full h-full" alt="Hero Image" />
        </div>
      </div>
    </div>

    <!-- Sponsors -->
    <div class="px-20 py-20 flex justify-between items-center">
      <div class="w-[38%]">
        <h3 class="text-4xl mb-4">
          Meet our <span class="font-bold">Partners</span>
        </h3>
        <p class="text-base">
          Introducing the incredible minds and collaborators who fuel our
          journey and passion.
        </p>
      </div>
      <div class="w-[58%] grid grid-cols-4 grid-flow-row gap-4">
        <div v-for="(item, index) in sponsors" :key="index" class="h-9">
          <img :src="item" class="w-full h-full" alt="" />
        </div>
      </div>
    </div>

    <!-- Shops -->
    <div class="px-14 py-20" id="shop">
      <div class="w-full mb-20">
        <h3 class="text-4xl mb-8">
          Water <span class="font-bold">Flasks</span>
        </h3>
        <div class="grid grid-cols-3 grid-flow-row gap-6 w-full">
          <ProductCard
            v-for="(item, index) in waterFlask"
            :key="index"
            :product="item"
          />
        </div>
      </div>

      <div class="w-full mb-20">
        <h3 class="text-4xl mb-8">
          Custom <span class="font-bold">Shirts</span>
        </h3>
        <div class="grid grid-cols-3 grid-flow-row gap-6 w-full">
          <ProductCard
            v-for="(item, index) in tshirts"
            :key="index"
            :product="item"
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
