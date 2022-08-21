<template>
    <div class="nooverflow">
        <navbarcustom />

        <div class="titlecontainer">
            <h1 v-if="!isMobile" class="mt-6 font-roboto text-bold">
                FTC 1002
            </h1>

            <div class="flex flex-row justify-around w-screen my-6">
                <div class="w-96">
                    <h2 class="text-2xl text-bold text-center mb-2">
                        About FTC 1002
                    </h2>
                    <p class="text-xl">
                        Founded in 2007, FTC 1002 was our second robotics team,
                        and our first venture into the FIRST Tech Challenge.
                        They just recently qualified for the World Championship
                        in Houston, Texas, where they finished 42nd in their
                        divison out of 80.
                    </p>
                    <img src="../assets/cart.jpg" class="borderg mb-2" />
                    <p class="mt-2 ml-2 borderg border-[2px] w-fit px-2">
                        – The FTC 1002 robot traveling on its cart at the FTC
                        World Championship
                    </p>
                </div>
                <div class="flex flex-col justify-around">
                    <div class="w-[400px]">
                        <h2 class="text-2xl text-bold text-center">News</h2>
                        <p class="text-center">
                            FTC 1002 finished 42nd of 80 in their Jemison
                            divison at the World Championship in Houston, Texas.
                            Nice job!
                        </p>
                        <img src="../assets/meet.png" class="borderg" />
                    </div>
                    <div>
                        <h2 class="text-2xl text-bold text-center mb-2 mt-8">
                            Awards
                        </h2>
                        <div
                            class="grid grid-flow-row grid-rows-2 gap-2 text-center w-[400px]"
                        >
                            <div
                                class="borderg p-1 flex flex-row justify-around"
                            >
                                <p>Inspire Award Winner</p>
                                <p>Georgia State Championship</p>
                            </div>
                            <div
                                class="borderg p-1 flex flex-row justify-around"
                            >
                                <p>Compass Award Winner</p>
                                <p>Georgia State Championship</p>
                            </div>
                            <div
                                class="borderg p-1 flex flex-row justify-around"
                            >
                                <p>Winning Alliance 1st Pick</p>
                                <p>Western Georgia Tournament</p>
                            </div>
                            <div
                                class="borderg p-1 flex flex-row justify-around"
                            >
                                <p>Connect Award Winner</p>
                                <p>Western Georgia Tournament</p>
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
        --></div>
    </div>
</template>

<script>
import FooterComp from "./FooterComp.vue";
import navbarcustom from "./navbarcustom.vue";

import { ref } from "vue";
import.meta.hot;

export default {
    data() {
        return {
            isMobile: false,
        };
    },
    setup() {
        return {
            current: ref(2022),
        };
    },

    components: {
        FooterComp: FooterComp,
        navbarcustom: navbarcustom,
    },
    methods: {
        gotoabout() {
            this.$router.push("/about");
        },
        update() {
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
            window.removeEventListener("resize", this.onResize, {
                passive: true,
            });
        }
    },
};
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
