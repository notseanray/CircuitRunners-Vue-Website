import { defineStore } from "pinia";
import { RegistrationStatus } from "./database";

export const useStore = defineStore("user", {
  state: () => ({
    auth: false,
    admin: false,
    register_status: "Not Registered",
	// this just makes it easier to do conditional rendering, only true if RegistrationStatus is "Complete"
	registered: false,
    user_data: false,
    email: "",
    displayName: "",
	first_name: "",
	last_name: "",
	teams: [],
	userdata: null,
	loaded: false,
	fetched: false,
  }),
});
