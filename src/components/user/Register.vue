<template>
    <div class="h-screen w-screen bg-[url('./assets/Backdrop1.png')]">
        <navbarcustom />
        <div class="grid grid-flow-row">
            <h1 class="">Register</h1>
            <h2 class="mx-[400px] p-3 border-4 bg-black relative top-20 text-medium">test
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
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
              </h2>
        </div>
        <FooterComp class="fixed bottom-0 w-screen" />

    </div>

</template>

<script>
import FooterComp from "../FooterComp.vue";
import navbarcustom from "../navbarcustom.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
        submit() {
            console.log("s")
            console.log(this.email + ":" + this.password);
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                console.log("signed")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        },
        gotoabout() {
            this.$router.push('/register');
        },
        login() {

        }
    },
}
</script>