<template>
<div class="nooverflow">
    <navbarcustom/>

    <div class="titlecontainer">
        <h1 class="mt-6 font-roboto text-bold">FRC 1002</h1>

        <div class="justify-center grid grid-rows-2 grid-flow-col gap-[400px] my-10">

            <div class="row-span-2 titlecontainer">
                <h1 class="text-4xl">About FRC 1002</h1>
                <h1 class="text-2xl">We are FRC 1002, a high school robotics team based out of Wheeler High School in Marietta, GA. We strive to spread STEM throughout the community through our efforts.</h1>

            </div>

            <div class="titlecontainer p-10">
                <h1 class="text-4xl">News</h1>
                <h1 class="text-2xl">Did stuff.</h1>
            </div>

            <div class="titlecontainer p-10">
                <h1 class="text-4xl">Awards</h1>
                <h1 class="text-2xl">Won some things.</h1>
            </div>

        </div>

        <div class="text-center">
            Leadership
            <div class="grid grid-cols-3 grid-flow-row gap-40 my-10">
                <div>
                    person 1
                </div>
                <div>
                    person 2
                </div>
                <div>
                    person 3
                </div>
            </div>
        </div>

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

  </div>

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
