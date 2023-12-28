<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import { NModal, NResult, NButton } from "naive-ui";
import {useRouter} from "vue-router";
import {MainStore} from "../store/store.js";
import service from "../utils/request.js";
import api from "../utils/api.js";
const router = useRouter();

const store = MainStore()

var stampData = ref({
  "id": 1,
  "name": "Loading...",
  "description": "Loading...",
  "width": 30,
  "height": 40,
  "publishDate": "2000-01-00",
  "price": 0,
})
const showModal = ref(false)


onMounted(() => {
  const itemID = router.currentRoute.value.params.id
  service.get(api.getStampList).then((res) => {
    stampData.value = res.data[itemID-1]
  });
})

const submitCallback = () => {
  console.log('submit')
  showModal.value = false
}

function purchase() {
  // TODO: 购买
  // 没有登录，跳转到登录页面
  if (!store.isLogin) {
    router.push('/login')
    return
  }

  // 余额不足，提示
  if (store.balance < stampData.value.price) {
    alert('余额不足')
    return
  }

  // 创建订单
  service.put(api.createOrder,{
    userId: store.userID,
    stampId: stampData.value.id,
    count: 1,
    password: store.password
  }, ).then((res) => {
    if (res.code === 1) {

      // 订单创建成功后扣除余额
      service.put(api.deduct,{},{
        params: {
          id: store.userID,
          amount: stampData.value.price * 100,
          password: store.password
        }
      }).then((res) => {
        if (res.code === 1) {
          showModal.value = true
          store.balance -= stampData.value.price
        }
      })

    }
  }).catch((err) => {
    console.log(err)
    alert('购买失败')
  })

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
            {{ stampData.name }}
          </h1>
          <div class="flex mb-4">
            <span class="flex flex-col pl-3 py-1 border-l-2 border-gray-200">
                <div>
                  Width: {{ stampData.width }}
                </div>
                <div>
                  Publish date: {{ stampData.publishDate }}
                </div>
            </span>
          </div>
          <p class="leading-relaxed">
            Description: {{ stampData.description }}
          </p>
          <div class="flex mt-6 py-5 border-t-2">
            <span class="title-font font-medium text-2xl text-gray-900">$ {{ stampData.price }}</span>
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
        <n-button @click="showModal = false">好 (￣▽￣)و</n-button>
      </template>
    </n-result>
  </n-modal>

</template>

<style scoped>

</style>