<script setup>
import {NButton, NDataTable, NTag, useMessage} from "naive-ui";
import {h, onMounted, ref} from "vue";
import service from "../utils/request.js";
import api from "../utils/api.js";

const columns = ref([
  {
    title: "Name",
    key: "name"
  },
  {
    title: "Age",
    key: "age"
  },
  {
    title: "Address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    render(row) {
      const tags = row.tags.map((tagKey) => {
        return h(
            NTag,
            {
              style: {
                marginRight: "6px"
              },
              type: "info",
              bordered: false
            },
            {
              default: () => tagKey
            }
        );
      });
      return tags;
    }
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render(row) {
  //     return h(
  //         NButton,
  //         {
  //           onClick() {
  //             message.info("send mail to " + row.name);
  //           }
  //         },
  //         {
  //           default: () => "Send Mail"
  //         }
  //     )
  //   }
  // }
])
const orderData = ref([
  {
    key: 0,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: 1,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["wow"]
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
])

onMounted(() => {
  service.get(api.getOrderList).then((res) => {
    orderData.value = res.data.data
    console.log(orderData)
  });
})

</script>

<template>
  <main class="py-8">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold mb-6">Place Your Order</h2>
      <form @submit.prevent="placeOrder" class="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="Your Name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" placeholder="Your Email">
        </div>
        <!-- More fields like address, quantity, etc. -->
        <div class="flex items-center justify-between">
          <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
            Place Order
          </button>
        </div>
      </form>

      <!--  show order    -->
      <n-data-table
          size="large"
          :columns="columns"
          :data="orderData"
          :bordered="true"
          :single-line="false"

          class="shadow-md"
      />


    </div>
  </main>
</template>

<style scoped>

</style>