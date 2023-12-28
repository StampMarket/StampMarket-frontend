import {createPinia, defineStore} from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

export const MainStore = defineStore("main", {
        state: () => ({
            isAdmin: false,
            isLogin: false,
            userName: "",
            token: "",
            userID: 0,
            password: "",
            balance: 0,
        }),
        persist: true,
    },
);