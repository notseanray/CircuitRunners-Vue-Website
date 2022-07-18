import { defineStore } from 'pinia'

export const useStore = defineStore('user', {
    state: () => ({
        auth: false,
        admin: false,
        registered: false,
        email: "",
        displayName: "",
    })
})