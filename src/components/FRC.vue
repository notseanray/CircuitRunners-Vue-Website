<template>
<div class="nooverflow">
    <navbarcustom class="w-screen" />

    <div class="titlecontainer">
        <h1 class="my-6 font-roboto text-bold">FRC 1002</h1>
        <q-pagination
        v-on:click="update"
        v-model="current"
        :min="2002"
        :max="2022"
        :max-pages="0"
        :ellipses="false"
        outline
        :boundary-numbers="false"
        

        />

    <img class="mt-10" v-bind:src="'src/assets/' + current + '.png'"/>
    <img class="mt-10" v-bind:src="'src/assets/' + current + '.jpg'"/>
    </div>
    
    <FooterComp />

    <navbarcustom />
  </div>

  <FooterComp></FooterComp>
</template>

<script>
import FooterComp from "./FooterComp.vue";
import navbarcustom from "./navbarcustom.vue";


import { ref } from 'vue'

export default {

    setup () {
        return {
        current: ref(2022)
        }
    },

    components: {
    FooterComp: FooterComp,
    navbarcustom: navbarcustom,
},
    methods: {
        gotoabout() {
            this.$router.push('/about');
        },
        update(){
            console.log(this.current)
        }

    }
}
</script>

<style>
.titlecontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
}
</style>
