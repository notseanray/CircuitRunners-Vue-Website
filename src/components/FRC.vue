<template>
<div class="nooverflow">
    <navbarcustom/>

    <div class="titlecontainer h-screen">
        <h1 class="mt-6 font-roboto text-bold">FRC 1002</h1>

        <div class="flex flex-row justify-around w-screen my-6">
            <div class="w-96">
                <h2 class="text-2xl text-bold text-center mb-2">About FRC 1002</h2>
                <p class="text-xl">
                    Founded in 2003, FRC 1002 is our largest and oldest team in CircuitRunners Robotics, containing over 40 members. FRC 1002 was originally CircuitRunners only robotics team, but since 2003 the organization has grown to encompass many more groups and competitions
                </p>
                <img src="../assets/2018.png" class="borderg"/>
                <p class="mt-2 ml-2 borderg border-[2px] w-fit px-2"> – Our 2018 Power Up robot in our pit</p>
            </div>
            <div class="flex flex-col justify-around">
                <div class="w-[400px]">
                    <h2 class="text-2xl text-bold text-center mb-2 ">News</h2>
                    <p class="text-center ">FRC 1002 finished 1st at their offseason meet in North Carolina. Nice job!</p>
                    <img src="https://cdn.discordapp.com/attachments/966089783044628540/988844257534152704/image_6.png" class="borderg"/>
                </div>
                <div>
                    <h2 class="text-2xl text-bold text-center mb-2">Awards</h2>
                    <div class="grid grid-flow-row grid-rows-2 gap-2 text-center w-[400px]">
                        <div class="borderg p-1 flex flex-row justify-around">
                            <p>
                                Creativity in Design Award
                            </p>
                            <p>
                                2022 PCH District Albany Event
                            </p>
                        </div>
                        <div class="borderg p-1 flex flex-row justify-around">
                            <p>
                                Event Finalist
                            </p>
                            <p>
                                2022 PCH District Albany Event
                            </p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        <!--
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
        -->

    </div>
    
    <FooterComp />

  </div>

</template>

<script>
import FooterComp from "./FooterComp.vue";
import navbarcustom from "./navbarcustom.vue";


import { ref } from 'vue'
import.meta.hot

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
    border: 4px solid #515155;
}
</style>
