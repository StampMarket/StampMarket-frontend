<script setup>
import { NCard, NButton, NDivider, NPopselect, NInputNumber } from "naive-ui";
import { ref } from "vue";
import {MainStore} from "../store/store.js";
import request from "../utils/request.js";
import api from "../utils/api.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = MainStore()

const username = ref("张三");
const balance = ref(100);
const value = ref(null);
const showTopup = ref(false);
const topupCount = ref(0);

const handleTopup = () => {
  store.balance += topupCount.value;
  showTopup.value = false;

  request.put(api.recharge, {}, {
    params: {
      id: store.userID,
      amount: topupCount.value * 100
    }
  }).then((_) => {
    topupCount.value = 0;
    alert("充值成功")
  }).catch((err) => {
    console.log(err);
  });
}

const handleLogout = () => {
  store.userId = 0;
  store.username = null;
  store.password = null;
  store.balance = 0;
  store.isLogin = false;
  window.location.href = "/";
}
</script>

<template>
  <div class="h-full w-full flex flex-col">
    <n-card
        embedded
        :bordered="false"
        size="huge"
        class="w-[50%] mx-auto mt-4"
    >
      <n-card-header>
        <span class="text-2xl">个人信息</span>
        <n-divider></n-divider>
      </n-card-header>
<n-card-body>
        <div class="flex flex-col">
          <div class="flex flex-row my-1">
            <span>用户名：</span>
            <span class="">{{ store.username||"未登录" }}</span>
          </div>
          <div class="flex flex-row my-1">
            <span>余额：</span>
            <span>{{ store.balance }}</span>
          </div>
          <div class="flex flex-col justify-center my-1">
              <n-button @click="showTopup = true">充值</n-button>

              <n-card class="relative top-2"  title="Enter Top up amount" size="small" v-show="showTopup" closable @close="showTopup = false">
                <div class="flex-col flex">
                <n-input-number class="py-2" v-model:value="topupCount" clearable :precision="2" />
                <n-button class="py-2" @click="handleTopup">确认</n-button>
                </div>
              </n-card>
            <div class="flex justify-between">
              <n-button class="mt-2" @click="handleLogout">登出</n-button>
              <n-button class="mt-2" @click="router.push('/login')">登入</n-button>
            </div>

          </div>
        </div>
      </n-card-body>
    </n-card>
  </div>
</template>

<style scoped>

</style>