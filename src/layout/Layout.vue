<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template class="relative">
  <div class="flex flex-col min-h-screen">
    <Header/>
    <router-view class="flex-grow bg-gray-100"/>
    <Footer/>
  </div>

</template>

<style scoped>

</style>