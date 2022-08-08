<template>
    <div class="">
        <navbarcustom />
        <div class="titlecontainer">
            <h1 class="">Login</h1>
            <h2
                class="grid gap-[20px] text-center mx-[400px] p-3 border-4 bg-black relative top-10 text-medium"
            >
                <q-btn
                    class="mx-[100px]"
                    color="primary"
                    text-color="black"
                    label="Sign In With Google"
                    v-on:click="signInWithGoogle"
                />
                <form class="grid gap-0" action="#" @submit.prevent="submit">
                    <div class="">
                        <label for="email" class="text-3xl">Email</label>

                        <div class="">
                            <input
                                id="email"
                                type="email"
                                class="form-control bg-slate-300"
                                name="email"
                                value
                                required
                                autofocus
                                v-model="email"
                            />
                        </div>
                    </div>

                    <div class="">
                        <label for="password" class="text-3xl">Password</label>

                        <div class="">
                            <input
                                id="password"
                                type="password"
                                class="form-control bg-slate-300"
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
                Don't have an account?
                <q-btn
                    class="mx-[100px]"
                    color="primary"
                    text-color="black"
                    label="register"
                    v-on:click="toRegister"
                />
            </h2>
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
export default {
    data() {
        return {
            email: "",
            password: "",
			message: "",
        };
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
                    const credential =
                        GoogleAuthProvider.credentialFromResult(result);
                    const _token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
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

<style>
.titlecontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 600px;
}

.border {
    border: 3px solid white;
}
</style>
