import { defineStore } from "pinia";

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
});