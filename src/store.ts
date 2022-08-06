import { defineStore } from "pinia";

export const useStore = defineStore("user", {
  state: () => ({
    auth: false,
    admin: false,
    registered: false,
    userdata: false,
    email: "",
    displayName: "",
	first_name: "",
	last_name: "",
	teams: [],
	grad_year: 0,
  }),
});
