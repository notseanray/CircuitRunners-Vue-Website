<template>

<div v-if="!isMobile" class="flex flex-center justify-between border-b-[.5px] bg-black border-[#20d54d]">
    <div class="q-pa-md q-gutter-sm">
        <q-btn class="mr-10" round v-on:click="tohome">
            <q-icon size="81px">
                <img src="https://cdn.discordapp.com/attachments/966089783044628540/988834097277317200/CircuitRunner-Logo-680x843_1.png">
            </q-icon>
        </q-btn>

        <q-btn color="primary" size="small" text-color="black" label="About Us" v-on:click="toabout"/>

            <q-btn color="primary" size="small" text-color="black" label="Teams">
                <q-menu class="text-black">
                    <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup v-on:click="toFRC">
                            <q-item-section text-color="black">FRC 1002</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC1">
                            <q-item-section text-color="black">FTC 1002</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC2">
                            <q-item-section text-color="black">FTC 11347</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>

    </div>
    <img class="h-20" src="../assets/logo.svg" />

    <div class="flex flex-center q-gutter-md mr-10">
        <q-btn v-on:click="tocontact" class="mr-5" color="primary" text-color="black" icon="fa-solid fa-address-card" label="Contact"/>
        <q-btn v-on:click="twitter" round color="primary" text-color="black" icon="fa-brands fa-twitter"/>
        <q-btn v-on:click="instagram" round color="primary" text-color="black" icon="fa-brands fa-instagram"/>
        <q-btn v-on:click="facebook" round color="primary" text-color="black" icon="fa-brands fa-facebook"/>
        <h1 class="text-sm text-bold">{{ this.displayName() }}</h1>
        <div v-if="this.authed" class="grid">
          <q-btn
            color="primary"
            text-color="black"
            label="signout"
            v-on:click="signout"
          />
          <q-btn
            color="primary"
            text-color="black"
            label="dashboard"
            v-on:click="dashboard"
          />
        </div>
        <div v-else>
          <q-btn
            color="primary"
            text-color="black"
            label="login"
            v-on:click="toLogin"
          />
        </div>
    </div>
</div>

<div v-else class="flex flex-col flex-center justify-center border-b-[.5px] bg-black border-[#20d54d]">
    <div class="q-pa-md q-gutter-sm">

        <img v-on:click="tohome" class="h-20" src="../assets/logo.svg" />

        <q-btn color="primary" size="small" text-color="black" label="About Us" v-on:click="toabout"/>

            <q-btn color="primary" size="small" text-color="black" label="Teams">
                <q-menu class="text-black">
                    <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup v-on:click="toFRC">
                            <q-item-section text-color="black">FRC 1002</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC1">
                            <q-item-section text-color="black">FTC 1002</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC2">
                            <q-item-section text-color="black">FTC 11347</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>




        <q-btn v-on:click="twitter" round color="primary" text-color="black" icon="fa-brands fa-twitter"/>
        <q-btn v-on:click="instagram" round color="primary" text-color="black" icon="fa-brands fa-instagram"/>
        <q-btn v-on:click="facebook" round color="primary" text-color="black" icon="fa-brands fa-facebook"/>
        <h1 class="text-sm text-center text-bold">{{ this.displayName() }}</h1>

    </div>
</div>

</template>

<script>
import dropdown from "primevue/dropdown";
import axios from "axios";
import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { store_login, clear_login } from "../database";
import { useStore } from "../store";

export default {
  data() {
    return {
      authed: useStore().auth,
      isMobile: false,
    };
  },
  setup() {
    if (!useStore().auth && !useStore().userdata) {
      const auth = getAuth();
      auth.onAuthStateChanged((u) => {
        if (u && !useStore().auth) {
          console.log("wasn't logged in, is now");
          useStore().userdata = false;
          store_login(u);
          // change page
        } else if (u && useStore().auth && useStore().userdata) {
          console.log("already logged in");
          store_login(u);
        } else {
          console.log("not logged in");
          clear_login();
        }
      });
    } else if (!useStore().userdata) {
      useStore().userdata = true;
    }
  },
  components: {
    dropdown: dropdown,
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    displayName() {
      return useStore().auth ? "Welcome " + useStore().displayName : "";
    },
    toabout() {
      this.$router.push("/about");
    },
    tohome() {
      this.$router.push("/");
    },
    toFRC() {
      this.$router.push("/frc1002");
    },
    toFTC1() {
      this.$router.push("/ftc1002");
    },
    toFTC2() {
      this.$router.push("/ftc11347");
    },
    toLogin() {
      if (useStore().auth) {
        this.$router.push("/dashboard");
      } else {
        this.$router.push("/login");
      }
    },
    isAuthed() {
      return useStore().auth;
    },
    dashboard() {
      this.$router.push("/dashboard");
    },
    signout() {
      const auth = getAuth();
      console.log("signed out");
      useStore().auth = false;
      console.log(useStore().auth);
      signOut(auth).then(() => {
        // set unlogged in store
        this.$router.push("/");
		window.location.reload();
      });
    },
    login() {
      axios
        .get("https://api.coinbase.com/v2/prices/spot?currency=USD")
        .then((response) => {
          console.log(response.data.data.amount);
        });
    },
    twitter() {
      window.location.href = "http://twitter.com/circuitrunners";
    },
    instagram() {
      window.location.href = "http://instagram.com/circuitrunners";
    },
    facebook() {
      window.location.href = "http://facebook.com/circuitrunners";
    },
    tosponsors(){
        this.$router.push('/sponsors')
    },
    tooutreach(){
        this.$router.push('/outreach')
    },
    tocontact(){
        window.location.href = 'mailto:info@circuitrunners.com'
    },
    onResize() {
        this.isMobile = window.innerWidth < 600;
      },
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  }
};
</script>

<style>

</style>
