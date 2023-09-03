<template>
  <div
    class="bg-[#EBECEF] w-full flex justify-between items-center py-6 px-20 drop-shadow-md"
  >
    <a class="w-72" href="/">
      <img :src="navLogo" class="w-full h-full" alt="Logo" />
    </a>

    <div class="flex items-center" :class="{ 'is-active': isActive }">
      <a
        v-for="(item, index) in navLinks"
        :key="index"
        class="mx-2 hover:opacity-60"
        :href="item.href"
        ><img :src="item.icon" alt="" class="w-6 h-6"
      /></a>
    </div>
  </div>
</template>

<script>
import GDGLogo from "../assets/images/gdgLogo.svg";
import Github from "../assets/icons/Github.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Dribble from "../assets/icons/Dribble.svg";
import Facebook from "../assets/icons/Facebook.svg";

export default {
  name: "Footer",
  data() {
    return {
      navLogo: GDGLogo,
      navLinks: [
        { icon: Github, href: "https://github.com/" },
        { icon: Twitter, href: "https://twitter.com/" },
        { icon: Dribble, href: "https://dribble.com/" },
        { icon: Facebook, href: "https://facebook.com/" },
      ],
    };
  },
};
</script>
