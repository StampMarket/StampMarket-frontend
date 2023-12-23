<script setup>
import {onMounted, ref} from 'vue';
import {NCarousel, NCarouselItem, NDivider} from 'naive-ui';
import service from '../utils/request';
import api  from "../utils/api.js";
import {useRouter} from "vue-router";

const router = useRouter();

let topSellingStamps = ref();

onMounted(() => {
  console.log('onMounted')
  service.get(api.getStampList).then((res) => {
    topSellingStamps.value = res.data
    console.log(topSellingStamps.value)
  });
})

const currentSlide = ref(0);

let imageUrl = 'https://source.unsplash.com/300x300/?stamp'

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
</script>

<template>
  <main class="px-4">
    <section class="py-8">
      <div class="container mx-auto bg-opacity-80 bg-white p-6 stamp-border">
        <h2 class="text-2xl font-bold mb-4">Featured Stamps</h2>
        <n-divider />
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
        <h2 class="text-2xl font-bold mb-4">Selling Stamps</h2>
        <n-divider />
        <div class="grid grid-cols-3 gap-4">
          <div @click="router.push('/item/'+ stamp.id)" v-for="stamp in topSellingStamps" :key="stamp.id"
               class="bg-white shadow-lg rounded-lg overflow-hidden stamp-border">
            <img :src="imageUrl" :alt="stamp.name" class="w-full h-64 object-cover">
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