<script setup>
import {ref} from 'vue';
import {NCarousel, NCarouselItem, NDivider} from 'naive-ui';
import {useRouter} from 'vue-router';

const router = useRouter();

const searchKey = ref('');
const currentSlide = ref(0);

const topSellingStamps = ref([
  {
    name: 'Vintage Stamp',
    description: 'A classic addition to any collection.',
    imageUrl: 'https://source.unsplash.com/300x300/?stamp'
  },
  {
    name: 'Rare Postage Stamp',
    description: 'A rare find for enthusiasts.',
    imageUrl: 'https://source.unsplash.com/300x300/?postage'
  },
  {
    name: 'Philately Special',
    description: 'For those who appreciate the finer details.',
    imageUrl: 'https://source.unsplash.com/300x300/?philately'
  }
]);

const featuredStamps = ref([
  {
    name: 'Vintage Stamp',
    description: 'A classic addition to any collection.',
    imageUrl: 'https://source.unsplash.com/300x300/?stamp'
  },
  {
    name: 'Rare Postage Stamp',
    description: 'A rare find for enthusiasts.',
    imageUrl: 'https://source.unsplash.com/300x300/?postage'
  },
  {
    name: 'Philately Special',
    description: 'For those who appreciate the finer details.',
    imageUrl: 'https://source.unsplash.com/300x300/?philately'
  },
  {
    name: 'Vintage Stamp',
    description: 'A classic addition to any collection.',
    imageUrl: 'https://source.unsplash.com/300x300/?stamp'
  },
  {
    name: 'Rare Postage Stamp',
    description: 'A rare find for enthusiasts.',
    imageUrl: 'https://source.unsplash.com/300x300/?postage'
  }
]);

const nextSlide = () => {
  if (currentSlide.value < featuredStamps.value.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = featuredStamps.value.length - 1;
  }
};

const handleSearch = () => {
  console.log(searchKey.value);
};
</script>

<template>
  <main class="px-4">
    <!-- Search -->
    <div class='flex items-center justify-center mt-4'>
      <div class="flex w-full mx-8 bg-white">
        <input v-model="searchKey"  class="w-full text-xl bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none " type="search" name="search" placeholder="Search..." />
        <button @click="handleSearch" type="submit" class="m-2 rounded bg-blue-600 px-4 py-2 text-white">
          <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
        </button>
      </div>
    </div>
    <section class="py-8">
      <div class="container mx-auto bg-opacity-80 bg-white p-6 stamp-border">
        <h2 class="text-2xl font-bold mb-4 font-serif">Featured Stamps</h2>
        <n-divider/>
        <div class="relative overflow-hidden">
          <n-carousel
              effect="card"
              prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
              next-slide-style="transform: translateX(50%) translateZ(-800px);"
              style="height: 240px"
              :show-dots="true"
          >
            <n-carousel-item :style="{ width: '35%' }">
              <img
                  class="carousel-img"
                  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
              >
            </n-carousel-item>
            <n-carousel-item :style="{ width: '35%' }">
              <img
                  class="carousel-img"
                  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
              >
            </n-carousel-item>
            <n-carousel-item :style="{ width: '35%' }">
              <img
                  class="carousel-img"
                  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
              >
            </n-carousel-item>
            <n-carousel-item :style="{ width: '35%' }">
              <img
                  class="carousel-img"
                  src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
              >
            </n-carousel-item>
          </n-carousel>
        </div>
      </div>
    </section>
    <section class="py-8">
      <div class="container mx-auto bg-opacity-80 bg-white p-6 stamp-border">
        <h2 class="text-2xl font-bold mb-4 font-serif">Top Selling Stamps</h2>
        <n-divider/>
        <div class="grid grid-cols-3 gap-4">
          <div @click="router.push({ path: '/item', query: { id: stamp.name } })"
              v-for="stamp in topSellingStamps" :key="stamp.name"
               class="bg-white shadow-lg rounded-lg overflow-hidden stamp-border
transition ease-in-out delay-800 hover:-translate-y-3 hover:scale-105 hover:shadow-xl">
            <img :src="stamp.imageUrl" :alt="stamp.name" class="w-full h-64 object-cover">
            <div class="p-4">
              <h3 class="font-bold">{{ stamp.name }}</h3>
              <p class="text-gray-700">{{ stamp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

.stamp-border {
  border: 1px dashed black;
  padding: 10px;
}

.stamp-font {
  font-family: 'Courier New', Courier, monospace;
}

.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>