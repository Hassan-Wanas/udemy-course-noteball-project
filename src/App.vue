<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>
</template>


<script setup>
// Imports
import NavBar from "@/components/Layout/NavBar.vue";
</script>

<style>
@import url(node_modules\bulma\css\bulma.min.css);
</style>