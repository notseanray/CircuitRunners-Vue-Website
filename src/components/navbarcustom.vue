<template>
    <div v-if="!isMobile">
        <img class="top-5 absolute w-screen h-20" src="../assets/logo.svg" />
    </div>
    <div
        v-if="!isMobile"
        class="flex flex-center justify-between border-b-[.5px] bg-black border-[#20d54d]"
    >
        {{ relogin() }}

        <div class="q-pa-md q-gutter-sm">
            <q-btn class="mr-10" round v-on:click="tohome">
                <q-icon size="81px">
                    <img src="../assets/running-man.png" />
                </q-icon>
            </q-btn>

            <q-btn
                color="primary"
                size="small"
                text-color="black"
                label="About Us"
                v-on:click="toabout"
            />

            <q-btn
                color="primary"
                size="small"
                text-color="black"
                label="Teams"
            >
                <q-menu class="text-black">
                    <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup v-on:click="toFRC">
                            <q-item-section text-color="black"
                                >FRC 1002</q-item-section
                            >
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC1">
                            <q-item-section text-color="black"
                                >FTC 1002</q-item-section
                            >
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC2">
                            <q-item-section text-color="black"
                                >FTC 11347</q-item-section
                            >
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>

            <q-btn
                color="primary"
                size="small"
                text-color="black"
                label="Sponsors"
                v-on:click="tosponsors"
            />

        </div>

        <div class="flex flex-center q-gutter-md mr-10">
            <div v-if="!authed">
                <q-btn
                    v-on:click="tocontact"
                    class="mr-5"
                    color="primary"
                    text-color="black"
                    icon="fa-solid fa-address-card"
                    label="Contact"
                />
                <q-btn
                    v-on:click="twitter"
                    round
                    color="primary"
                    text-color="black"
                    icon="fa-brands fa-twitter"
                />
                <q-btn
                    v-on:click="instagram"
                    round
                    color="primary"
                    text-color="black"
                    icon="fa-brands fa-instagram"
                />
                <q-btn
                    v-on:click="facebook"
                    round
                    color="primary"
                    text-color="black"
                    icon="fa-brands fa-facebook"
                />
            </div>
            <h1 class="text-sm text-bold">{{ displayName() }}</h1>
            <div v-if="authed">
                <div v-if="admin" class="inline mx-2">
                    <q-btn
                        class=""
                        color="primary"
                        text-color="black"
                        label="data"
                        v-on:click="dataview"
                    />
                </div>
                <q-btn
                    class="mx-2"
                    color="primary"
                    text-color="black"
                    label="dashboard"
                    v-on:click="dashboard"
                />
                <q-btn
                    class="mx-2"
                    color="primary"
                    text-color="black"
                    label="signout"
                    v-on:click="signout"
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

    <div
        v-else
        class="flex flex-col flex-center justify-center border-b-[.5px] bg-black border-[#20d54d]"
    >
        <div class="q-pa-md q-gutter-sm">
            <div class="navbar">
                <div class="container nav-container mb-10">
                    <input
                        v-model="hamburger"
                        class="checkbox"
                        type="checkbox"
                        name=""
                        id=""
                    />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <div class="menu-items font-bold">
                        <q-item clickable v-close-popup v-on:click="tohome">
                            <q-item-section text-color="black"
                                >HOME</q-item-section
                            >
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toabout">
                            <q-item-section text-color="black"
                                >ABOUT US</q-item-section
                            >
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="tosponsors">
                            <q-item-section text-color="black"
                                >SPONSORS</q-item-section
                            >
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFRC">
                            <q-item-section text-color="black"
                                >FRC 1002</q-item-section
                            >
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC1">
                            <q-item-section text-color="black"
                                >FTC 1002</q-item-section
                            >
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC2">
                            <q-item-section text-color="black"
                                >FTC 11347</q-item-section
                            >
                        </q-item>
                        <div v-if="authed">
                            <q-item
                                clickable
                                v-close-popup
                                v-on:click="dashboard"
                            >
                                <q-item-section text-color="black"
                                    >DASHBOARD</q-item-section
                                >
                            </q-item>
                            <q-item
                                clickable
                                v-close-popup
                                v-on:click="signout"
                            >
                                <q-item-section text-color="black"
                                    >SIGNOUT</q-item-section
                                >
                            </q-item>
                            <div v-if="admin && authed">
                                <q-item
                                    clickable
                                    v-close-popup
                                    v-on:click="dataview"
                                >
                                    <q-item-section text-color="black"
                                        >VIEW DATA</q-item-section
                                    >
                                </q-item>
                            </div>
                        </div>
                        <div v-else>
                            <q-item
                                clickable
                                v-close-popup
                                v-on:click="toLogin"
                            >
                                <q-item-section text-color="black"
                                    >LOGIN</q-item-section
                                >
                            </q-item>
                        </div>
                    </div>
                </div>
                <img
                    v-on:click="tohome"
                    class="h-20"
                    src="../assets/logo.svg"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import dropdown from "primevue/dropdown";
import { getAuth, signOut } from "firebase/auth";
import { store_login, clear_login } from "../database";
import { useStore } from "../store";

export const MOBILE_WIDTH = 1600;

export default {
    data() {
        return {
            authed: useStore().auth,
            admin: false,
            show_media: true,
            isMobile: screen.width < MOBILE_WIDTH,
            first_reload: false,
            hamburger: false,
        };
    },
    components: {
        dropdown: dropdown,
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.debounce(this.onResize, 100), {
            passive: true,
        });
    },
    methods: {
        onResize() {
            const mobile = window.innerWidth < MOBILE_WIDTH;
            useStore().mobile = mobile;
            this.isMobile = mobile;
        },
        debounce(fn: Function, interval: number) {
            let timer: any;
            return function debounced(...args: any) {
                clearTimeout(timer);
                timer = setTimeout(function call() {
                    fn(...args);
                }, interval);
            };
        },
        relogin() {
            if (!useStore().auth && !useStore().user_data) {
                const auth = getAuth();
                auth.onAuthStateChanged((u) => {
                    const updateAdmin = () => {
                        let counter = 0;
                        const interval = setInterval(() => {
                            if (
                                useStore().userdata &&
                                useStore().userdata.admin
                            ) {
                                clearInterval(interval);
                                this.admin = true;
                            }
                            if (counter > 50) {
                                clearInterval(interval);
                            }
                            counter++;
                        }, 100);
                    };
                    if (u && !useStore().auth) {
                        // wasn't logged in, is now
                        useStore().user_data = false;
                        this.authed = true;
                        store_login(u);
                        updateAdmin();
                    } else if (u && useStore().auth && useStore().user_data) {
                        // already logged in
                        this.authed = true;
                        store_login(u);
                        updateAdmin();
                    } else {
                        // not logged in
                        if (this.first_reload) {
                            this.first_reload = false;
                            this.$router.push("/");
                        }
                        clear_login();
                        return;
                    }
                });
            } else if (!useStore().user_data) {
                useStore().user_data = true;
            }
        },
        displayName() {
            let display_name = "";
            if (useStore().userdata == null) {
                display_name = useStore().displayName;
            } else {
                display_name = `${useStore().userdata.first_name} ${
                    useStore().userdata.last_name
                }`;
                this.admin = useStore().userdata.admin;
            }
            // if there isn't a display name (happens when not signing up with google oauth),
            // show the email in the navbar
            if (display_name == null || !display_name) {
                const email = useStore().email;
                if (email.length < 1) {
                    // if nothing is set, just say Welcome!
                    display_name = "!";
                } else {
                    display_name = " " + email;
                }
            } else {
                display_name = " " + display_name;
            }
            this.show_media = false;
            return useStore().auth ? "Welcome" + display_name + "!" : "";
        },
        toabout() {
            this.hamburger = false;
            this.$router.push("/about");
        },
        tosponsors() {
            this.hamburger = false;
            this.$router.push("/sponsors");
        },
        tohome() {
            this.hamburger = false;
            this.$router.push("/");
        },
        toFRC() {
            this.hamburger = false;
            this.$router.push("/frc1002");
        },
        toFTC1() {
            this.hamburger = false;
            this.$router.push("/ftc1002");
        },
        toFTC2() {
            this.hamburger = false;
            this.$router.push("/ftc11347");
        },
        toLogin() {
            this.hamburger = false;
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
        dataview() {
            this.$router.push("/data");
        },
        signout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                useStore().auth = false;
                this.hamburger = false;
                if (this.$route.name == "/") {
                    window.location.reload();
                } else {
                    this.$router.push("/");
                }
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
        tosponsors() {
            this.$router.push("/sponsors");
        },
        tooutreach() {
            this.$router.push("/outreach");
        },
        tocontact() {
            window.location.href = "mailto:info@circuitrunners.com";
        },
        beforeDestroy() {
            if (window) {
                window.removeEventListener("resize", this.onResize, {
                    passive: true,
                });
            }
        },
    },
};
</script>
<style scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar .menu-items {
    z-index: 10;
    display: flex;
}

.navbar .nav-container li {
    list-style: none;
}

.navbar .nav-container a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 0.7rem;
}

.navbar .nav-container a:hover {
    font-weight: bolder;
}

.nav-container {
    display: block;
}

.nav-container .checkbox {
    position: absolute;
    display: block;
    height: 32px;
    width: 32px;
    top: 20px;
    left: 20px;
    z-index: 500;
    opacity: 0;
    cursor: pointer;
}

.nav-container .hamburger-lines {
    display: block;
    height: 26px;
    width: 32px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.nav-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #20d54d;
}

.nav-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
    box-shadow: inset 00 2000px rgba(0, 0, 0, 0.8);
    margin-top: 120px;
    height: fit-content;
    width: 50%;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    transition: transform 0.5s ease-in-out;
    text-align: center;
    position: fixed;
    margin-right: 0px;
}

.navbar .menu-items li {
    margin-bottom: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
}

.logo {
    position: absolute;
    top: 5px;
    right: 15px;
    font-size: 1.2rem;
    color: #fff;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo {
    display: none;
}
</style>
