<template>
    <div class="h-screen w-screen bg-[url('./assets/Backdrop1.png')]">
        <navbarcustom />
        <div class="grid grid-flow-row">
            <h1 class="">Login</h1>
            <h2 class="mx-[400px] p-3 border-4 bg-black relative top-20 text-medium">
            <q-btn color="primary" text-color="black" label="Sign In With Google" v-on:click="signInWithGoogle"/>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="">Email</label>

                <div class="col-md-6">
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

              <div class="form-group row">
                <label for="password" class="">Password</label>

                <div class="col-md-6">
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

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
            Don't have an account?
            <q-btn color="primary" text-color="black" label="register" v-on:click="toRegister"/>
            </h2>
        </div>
        <FooterComp class="fixed bottom-0 w-screen" />

    </div>

</template>

<script>
import FooterComp from "../FooterComp.vue";
import navbarcustom from "../navbarcustom.vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence } from "firebase/auth";
import { useStore } from "../../store";
export default {
    data() {
        return {
            email: "",
            password: "",
        }
    },
    components: {
        FooterComp: FooterComp,
        navbarcustom: navbarcustom,
    },
    methods: {
        toLogin() {
            this.$router.push('/login');
        },
        toRegister() {
            this.$router.push('/register');
        },
        signInWithGoogle() {
            const auth = getAuth();
            setPersistence(auth, browserLocalPersistence);
            signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("google authed")
                console.log(user)
                const userData = useStore();
                userData.auth = true;
                userData.email = user.email;
                userData.displayName = user.displayName;
                this.$router.push("/dashboard");
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        },
        submit() {
            const auth = getAuth();
            setPersistence(auth, browserLocalPersistence);
            signInWithEmailAndPassword(auth, this.email, this.password).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                console.log("test");
                const userData = useStore();
                userData.auth = true;
                userData.email = user.email;
                userData.displayName = user.displayName;
                this.$router.push("/dashboard");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
    },
}
</script>