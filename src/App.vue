<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-4 has-text-black">
    <RouterView />
  </div>
</template>


<script setup>
// Imports
import NavBar from "@/components/Layout/NavBar.vue";
import { onMounted } from "vue";
import { useStoreAuth } from "./stores/storeAuth";

// store notes

const storeAuth = useStoreAuth()

// mounted

onMounted(() => {
  storeAuth.init()
})
</script>

<style>
@import 'D:\Programming\Projects\UdemyCourses\udemy-course-noteball-project\node_modules\bulma\css\bulma.min.css';
</style>