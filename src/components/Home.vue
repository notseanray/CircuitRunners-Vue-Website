<template>
    <navbarcustom></navbarcustom>
    <div class="h-screen w-screen bg-[url('./assets/Backdrop1.png')]"></div>
    <div class="absolute inset-y-[40%] w-screen text-center">
        <h1 class="text-7xl font-bold font-mono uppercase">From <span class="cyan">Potential</span> To <span class="red">Kinetic</span></h1>
    </div>
    <FooterComp></FooterComp>
</template>

<script>
import FooterComp from "./FooterComp.vue";
import navbarcustom from "./navbarcustom.vue";
export default {
    components: {
    FooterComp: FooterComp,
    navbarcustom: navbarcustom,
},
    methods: {
        gotoabout() {
            this.$router.push('/about');
        }
    },
}
</script>