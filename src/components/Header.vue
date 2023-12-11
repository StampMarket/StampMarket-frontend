<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();


const siteTitle = ref('Stamp Collection Store');
const navLinks = ref([
  {text: 'Home',
    onClick: () => router.push('/')
  },
  {text: 'Order'},
  {text: 'About'},
  {text: 'Contact'}
]);
</script>

<template>
  <header class="sticky top-0 w-full bg-gray-800 text-white p-4 z-50">
    <div class="container flex justify-between items-center">
      <h1 class="text-3xl align-middle">{{ siteTitle }}</h1>
      <nav>
        <ul class="flex space-x-4">
          <li v-for="link in navLinks" :key="link.text">
            <a href="#" class="hover:text-gray-300" @click="router.push(link.text)">{{ link.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>