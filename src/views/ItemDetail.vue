<script setup>
import {onMounted, ref} from "vue";
import { NModal, NResult, NButton } from "naive-ui";
import {useRouter} from "vue-router";
const router = useRouter();

const showModal = ref(false)

onMounted(() => {
  const itemID = router.currentRoute.value.params.id
  console.log(itemID)
})

const submitCallback = () => {
  console.log('submit')
  showModal.value = false
}

function purchase() {
  showModal.value = true
}

</script>

<template>
  <!-- component -->
  <section class="text-gray-700 body-font bg-white flex-grow">
    <div class="px-5 py-24 mx-auto">
      <div class="mx-auto flex flex-col justify-center">
        <img alt="ecommerce" class="overflow-hidden max-h-96 mx-10 object-cover object-center rounded border border-gray-200" src="https://source.unsplash.com/1280x720/?stamp">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-2">
            {{ 'name' }}
          </h1>
          <div class="flex mb-4">
            <span class="flex pl-3 py-2 border-l-2 border-gray-200">
                <span>
                  width: 12.2cm
                </span>
              <br>
                <span>
                  height: 12.2cm
                </span>
            </span>
          </div>
          <p class="leading-relaxed">
            Description: {{ 'description'}}
          </p>
          <div class="flex mt-6 py-5 border-t-2">
            <span class="title-font font-medium text-2xl text-gray-900">$ {{ 'price' }}</span>
            <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" @click="purchase">Buy</button>
<!--            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">-->
<!--              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">-->
<!--                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>-->
<!--              </svg>-->
<!--            </button>-->
          </div>
        </div>
      </div>
    </div>
  </section>
  <n-modal v-model:show="showModal" title="确认" transform-origin="center">
    <n-result class="bg-gray-50 p-16" status="success" title="购买成功">
      <template #footer>
        <n-button @click="showModal = false">我喜欢</n-button>
      </template>
    </n-result>
  </n-modal>

</template>

<style scoped>

</style>