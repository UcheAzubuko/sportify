<template>
  <div class="main-wrapper">
    <desktop-nav  />
    <mobile-header />
    <router-view />
    <mobile-nav />
  </div>
</template>

<script>
import DesktopNav from "@/components/DesktopNav.vue";
import MobileNav from "@/components/MobileNav.vue";
import MobileHeader from "../components/MobileHeader.vue";

export default {
  name: "Main",

  components: {
    DesktopNav,
    MobileNav,
    MobileHeader,
  },
};
</script>