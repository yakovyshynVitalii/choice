<template>
  <TheHeader />
  <main>
    <router-view></router-view>
  </main>
  <TheFooter />
</template>

<script setup>
// import components

import TheHeader from "@/components/The/TheHeader";
import TheFooter from "@/components/The/TheFooter";
</script>
