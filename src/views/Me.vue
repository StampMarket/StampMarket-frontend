<script setup>
import { NCard, NButton, NDivider, NPopselect, NInputNumber } from "naive-ui";
import { ref } from "vue";

const username = ref("张三");
const balance = ref(100);
const value = ref(null);
const topupCount = ref(0);
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
            <span class="">{{ username }}</span>
          </div>
          <div class="flex flex-row my-1">
            <span>余额：</span>
            <span>{{balance}}</span>
          </div>
          <div class="flex justify-center my-1">
            <n-popselect v-model:value="value" :options="[{label:'确认', value:''}]" trigger="click">
              <n-button>充值</n-button>
              <template #empty>
                Enter Topup Count
              </template>
              <template #action>
                <n-input-number v-model:value="topupCount" clearable :precision="2" />
              </template>
            </n-popselect>
          </div>
        </div>
      </n-card-body>
    </n-card>
  </div>
</template>

<style scoped>

</style>