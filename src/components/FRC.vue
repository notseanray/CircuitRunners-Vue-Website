<template>
<div class="nooverflow">
    <navbarcustom/>

    <div class="titlecontainer">
        <h1 class="mt-6 font-roboto text-bold">FRC 1002</h1>

        <div class="justify-center grid grid-rows-2 grid-flow-col gap-[400px] my-10">

            <div class="row-span-2 titlecontainer">
                <h1 class="text-4xl font-mono">About FRC 1002</h1>
                <h1 class="text-xl font-franklin text-left my-6">We are FRC 1002, a high school robotics team based out of Wheeler High School in Marietta, GA. We strive to spread STEM throughout the community through our efforts.</h1>
                <img src="../assets/2017.jpg" />
            </div>

            <div class="titlecontainer p-10">
                <h1 class="text-4xl">News</h1>
                <h1 class="text-2xl">Did stuff.</h1>
            </div>

            <div class="titlecontainer p-10">
                <h1 class="text-4xl font-mono">Awards</h1>
                <h1 class="text-2xl my-4">2022 Season:</h1>
                
                <div class="grid grid-flow-row grid-rows-2 gap-2 text-center w-[400px]">
                    <div class="borderg p-1 flex flex-row justify-around">
                        <p>
                            Creativity in Design Award
                        </p>
                        <p>
                            PCH District Albany Event
                        </p>
                    </div>
                    <div class="borderg p-1 flex flex-row justify-around">
                        <p>
                            Event Finalist
                        </p>
                        <p>
                            PCH District Albany Event
                        </p>
                    </div>
                    
                </div>

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

.borderg {
    border: 1px solid #515155;
}
</style>
