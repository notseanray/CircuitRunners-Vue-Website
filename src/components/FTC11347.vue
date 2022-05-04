<template>
    <div class="h-screen w-screen bg-[url('./assets/Backdrop1.png')]">
        <div class="absolute inset-y-[40%] w-screen text-center">
            <h1 class="text-7xl font-bold font-mono uppercase">FTC 11347</h1>
        </div>
        
        <navbarcustom />

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