<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();


const siteTitle = 'Stamp Collection Store';
const navLinks = ref([
  {text: 'Home'},
  {text: 'Order'},
  {text: 'Me'},
]);
</script>

<template>
  <header class="sticky top-0 w-full bg-indigo-500 text-white p-4 z-50">
    <div class="flex justify-between items-center w-full">
      <h1 class="text-3xl align-middle font-bold font-serif ">{{ siteTitle }}</h1>
      <nav>
        <ul class="flex space-x-4">
          <li v-for="link in navLinks" :key="link.text">
            <a href="#" class="hover:text-gray-300 text-xl font-medium" @click="router.push('/' + link.text)">{{ link.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>

</style>