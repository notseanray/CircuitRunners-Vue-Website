<template>
    <div class="">
        <navbarcustom />
        <div class="titlecontainer">
            <h1 class="text-[30px]">Login</h1>
            <h2
                class="grid gap-[20px] text-center mx-[10%] p-3 border-4 bg-black relative top-10"
            >
                <q-btn
                    class="mx-[10%]"
                    color="primary"
                    text-color="black"
                    label="Sign In With Google"
                    v-on:click="signInWithGoogle"
                />
                <form
                    class="grid text-center mx-[5%]"
                    action="#"
                    @submit.prevent="submit"
                >
                    <div class="">
                        <label for="email" class="text-[30px]">Email</label>

                        <div class="">
                            <input
                                id="email"
                                type="email"
                                class="bg-slate-900 text-[24px] w-11/12"
                                name="email"
                                value
                                required
                                autofocus
                                v-model="email"
                            />
                        </div>
                    </div>

                    <div class="">
                        <label for="password" class="text-[30px]"
                            >Password</label
                        >

                        <div class="">
                            <input
                                id="password"
                                type="password"
                                class="bg-slate-900 text-[24px] w-11/12"
                                name="password"
                                required
                                v-model="password"
                            />
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="col-md-8 offset-md-4">
                            <div class="text-[20px] text-red-200">
                                {{ message }}
                            </div>
                            <q-btn
                                color="primary"
                                size="large"
                                text-color="black"
                                label="Login"
                                v-on:click="submit"
                                class="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
                <div class="text-sm">Don't have an account?</div>
                <q-btn
                    class="mx-[10%]"
                    color="primary"
                    text-color="black"
                    label="register"
                    v-on:click="toRegister"
                />
            </h2>
            <div class="pb-48" />
        </div>
        <FooterComp class="fixed bottom-0 w-screen" />
    </div>
</template>

<script>
import FooterComp from "../FooterComp.vue";
import navbarcustom from "../navbarcustom.vue";
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    browserLocalPersistence,
} from "firebase/auth";
import { useStore } from "../../store";
import { store_login } from "../../database";
export default {
    data() {
        return {
            email: "",
            password: "",
            message: "",
        };
    },
	mounted() {
        checkPage(true, () => {
            this.$router.push("/login");
        });
        const checkUpdated = setInterval(() => {
            if (useStore().fetched) {
                this.auth = useStore().auth;
                clearInterval(checkUpdated);
            }
        }, 200);
	},
    components: {
        FooterComp: FooterComp,
        navbarcustom: navbarcustom,
    },
    methods: {
        toLogin() {
            this.$router.push("/login");
        },
        toRegister() {
            this.$router.push("/register");
        },
        signInWithGoogle() {
            const auth = getAuth();
            setPersistence(auth, browserLocalPersistence);
            signInWithPopup(auth, new GoogleAuthProvider())
                .then((result) => {
                    this.message = "";
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    // const credential =
                    //    GoogleAuthProvider.credentialFromResult(result);
                    // token const _ = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    store_login(user);
                    const userData = useStore();
                    userData.auth = true;
                    userData.email = user.email;
                    userData.displayName = user.displayName;
                    this.$router.push("/dashboard");
                    // ...
                })
                .catch((_) => {
                    this.message = "Invalid username or password";
                });
        },
        submit() {
            const auth = getAuth();
            setPersistence(auth, browserLocalPersistence);
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    this.message = "";
                    // Signed in
                    const user = userCredential.user;
                    store_login(user);
                    const userData = useStore();
                    userData.auth = true;
                    userData.email = user.email;
                    userData.displayName = user.displayName;
                    this.$router.push("/dashboard");
                    // ...
                })
                .catch((_) => {
                    this.message = "Invalid username or password";
                });
        },
    },
};
</script>
