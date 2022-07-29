<template>
<div class="nooverflow">
    <navbarcustom/>

    <div class="titlecontainer ">
        <h1 v-if="!isMobile" class="mt-6 font-roboto text-bold">FTC 11347</h1>

        <div class="flex flex-row justify-around w-screen my-6">
            <div class="w-96">
                <h2 class="text-2xl text-bold text-center mb-2">About FTC 11347</h2>
                <p class="text-xl">
                    Founded in 2016, FTC 11347 is our second FTC team. Due to the success of FTC 1002, the popularity of FTC among our students, and the limited team size of FTC teams, we decided to form a second FTC team to meet demand.
                </p>
                <img src="../assets/madi.png" class="borderg mb-2"/>
                <p class="mt-2 ml-2 borderg border-[2px] w-fit px-2"> – FTC 11347 Team Lead Madi working on her teams robot at their league meet</p>
            </div>
            <div class="flex flex-col justify-around">
                <div class="w-[400px]">
                    <h2 class="text-2xl text-bold text-center">News</h2>
                    <p class="text-center ">FTC 11347 finished 3rd at their offseason meet in North Carolina, just behind FTC 1002. Nice job!</p>
                    <img src="../assets/11347atfieldPt2.png" class="borderg"/>
                </div>
                <div>
                    <h2 class="text-2xl text-bold text-center mb-2 mt-8">Awards</h2>
                    <div class="grid grid-flow-row grid-rows-2 gap-2 text-center w-[400px]">
                        <div class="borderg p-1 flex flex-row justify-around">
                            <p>
                                Rank #11 at Worlds Divison
                            </p>
                            <p>
                                2019 Georgia World Championship
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
    
    

  </div>

</template>

<script>
import FooterComp from "./FooterComp.vue";
import navbarcustom from "./navbarcustom.vue";


import { ref } from 'vue'
import.meta.hot

export default {
    data () {
        return {
            isMobile: false,
        }
    },
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
        },
        onResize() {
        this.isMobile = window.innerWidth < 600;
      },


    },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
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
