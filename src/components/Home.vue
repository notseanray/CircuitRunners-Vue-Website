<template>
    <div v-if="!isMobile" class="nooverflow">
        <navbarcustom />
        <!--<h1 class="text-center mt-10 text-6xl tracking-wide font-roboto font-bold"><span class="text-crgreen">Circuit</span>Runners Robotics</h1>-->

        <q-carousel
            class="mt-3.5 mb-4 mx-[15%]"
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="3000"
            arrows
            height="24rem"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
        >
            <q-carousel-slide
                :name="1"
                img-src="https://cdn.discordapp.com/attachments/966089783044628540/988844257534152704/image_6.png"
                class=""
            />
            <q-carousel-slide
                :name="2"
                img-src="https://i.imgur.com/juPRryg.jpg"
            />
        </q-carousel>

        <div class="mx-[15%]">
            <div class="flex flex-col min-h-screen bg-[#2b2b2b] text-white">
                <h1 class="text-center p-6 text-xl font-franklin mb-8">
                    CircuitRunners Robotics is 20 year old 501(c)(3) nonprofit
                    robotics organization working out of Wheeler High School in
                    Marietta, GA. CircuitRunners Robotics owns and operates 4
                    robotics teams, including an FRC team, two FTC teams, and a
                    BEST team
                </h1>

                <div class="grid grid-rows-3 gap-8">
                    <div class="flex">
                        <div class="basis-1/3 containerwrap">
                            <img src="../assets/FRC.png" class="" />
                        </div>
                        <div class="basis-2/3">
                            <div class="containerwrap px-2">
                                <div class="flex flex-row pb-4">
                                    <h2 class="text-3xl text-bold pr-6">FRC</h2>
                                    <q-btn
                                        label="To Site"
                                        color="blue"
                                        @click="
                                            goto(
                                                `https://www.firstinspires.org/robotics/frc`
                                            )
                                        "
                                    />
                                </div>
                                <p class="font-franklin">
                                    Under strict rules, limited time and
                                    resources, teams of students are challenged
                                    to raise funds, hone teamwork skills, and
                                    build and program industrial-size robots to
                                    play a difficult field game against
                                    like-minded competitors. It’s as close to
                                    real-world engineering as a student can get.
                                    Teams get 9 weeks to prototype, design,
                                    build, program, and test their robots before
                                    they travel to compete in a 3 on 3
                                    competition format for 3 days against other
                                    teams, fighting for a chance to advance to
                                    the world championship.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="containerwrap bg-[#333333]">
                        <div class="basis-2/3">
                            <div class="containerwrap px-4">
                                <div class="flex flex-row py-4">
                                    <h2 class="text-3xl text-bold pr-6">FTC</h2>
                                    <q-btn
                                        label="To Site"
                                        color="orange"
                                        @click="
                                            goto(
                                                `https://www.firstinspires.org/robotics/ftc`
                                            )
                                        "
                                    />
                                </div>
                                <p class="font-franklin">
                                    It’s way more than building robots. FIRST
                                    Tech Challenge teams (up to 15 team members,
                                    grades 7-12) are challenged to design,
                                    build, program, and operate robots to
                                    compete in a head-to-head challenge in an
                                    alliance format. Guided by adult coaches and
                                    mentors, students develop STEM skills and
                                    practice engineering principles, while
                                    realizing the value of hard work,
                                    innovation, and working as a team.
                                </p>
                            </div>
                        </div>
                        <div class="basis-1/3 containerwrap">
                            <img src="../assets/FTC.png" class="" />
                        </div>
                    </div>

                    <div class="containerwrap">
                        <div class="basis-1/3 containerwrap">
                            <img src="../assets/BEST.png" class="" />
                        </div>
                        <div class="basis-2/3">
                            <div class="containerwrap px-2">
                                <div class="flex flex-row pb-4">
                                    <h2 class="text-3xl text-bold pr-8">
                                        BEST
                                    </h2>
                                    <q-btn
                                        label="To Site"
                                        color="green"
                                        @click="
                                            goto(
                                                `https://www.bestrobotics.org/site/`
                                            )
                                        "
                                    />
                                </div>
                                <p class="font-franklin">
                                    BEST, a middle and high school robotics
                                    competition whose mission is to engage and
                                    excite students about engineering, science,
                                    and technology as well as inspire them to
                                    pursue careers in these fields. Through
                                    participation in our project-based STEM
                                    program, students learn to analyze and solve
                                    problems utilizing the Engineering Design
                                    Process, which helps them develop
                                    technological literacy skills. It is these
                                    skills that industry seeks in its workforce.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterComp />
    </div>

    <div v-else>
        <navbarcustom />
        <!--<h1 class="text-center mt-10 text-6xl tracking-wide font-roboto font-bold"><span class="text-crgreen">Circuit</span>Runners Robotics</h1>-->

        <q-carousel
            class="mt-3.5 mb-4"
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="3000"
            arrows
            height="24rem"
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
        >
            <q-carousel-slide
                :name="1"
                img-src="https://cdn.discordapp.com/attachments/966089783044628540/988844257534152704/image_6.png"
                class=""
            />
            <q-carousel-slide
                :name="2"
                img-src="https://i.imgur.com/juPRryg.jpg"
            />
        </q-carousel>

        <div class="">
            <div class="flex flex-col min-h-screen bg-[#2b2b2b] text-white">
                <h1 class="text-center p-6 text-xl font-franklin mb-8">
                    CircuitRunners Robotics is 20 year old 501(c)(3) nonprofit
                    robotics organization working out of Wheeler High School in
                    Marietta, GA. CircuitRunners Robotics owns and operates 4
                    robotics teams, including an FRC team, two FTC teams, and a
                    BEST team
                </h1>

                <div class="grid grid-rows-3 gap-8">
                    <div class="flex">
                        <div class="basis-1/3 containerwrap">
                            <img src="../assets/FRC.png" class="" />
                        </div>
                        <div class="basis-2/3">
                            <div class="containerwrap px-2">
                                <div class="flex flex-row pb-4">
                                    <h2 class="text-3xl text-bold pr-6">FRC</h2>
                                    <q-btn
                                        label="To Site"
                                        color="blue"
                                        @click="
                                            goto(
                                                `https://www.firstinspires.org/robotics/frc`
                                            )
                                        "
                                    />
                                </div>
                                <p class="font-franklin">
                                    Under strict rules, limited time and
                                    resources, teams of students are challenged
                                    to raise funds, hone teamwork skills, and
                                    build and program industrial-size robots to
                                    play a difficult field game against
                                    like-minded competitors. It’s as close to
                                    real-world engineering as a student can get.
                                    Teams get 9 weeks to prototype, design,
                                    build, program, and test their robots before
                                    they travel to compete in a 3 on 3
                                    competition format for 3 days against other
                                    teams, fighting for a chance to advance to
                                    the world championship.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="containerwrap bg-[#333333]">
                        <div class="basis-2/3">
                            <div class="containerwrap px-4">
                                <div class="flex flex-row py-4">
                                    <h2 class="text-3xl text-bold pr-6">FTC</h2>
                                    <q-btn
                                        label="To Site"
                                        color="orange"
                                        @click="
                                            goto(
                                                `https://www.firstinspires.org/robotics/ftc`
                                            )
                                        "
                                    />
                                </div>
                                <p class="font-franklin">
                                    It’s way more than building robots. FIRST
                                    Tech Challenge teams (up to 15 team members,
                                    grades 7-12) are challenged to design,
                                    build, program, and operate robots to
                                    compete in a head-to-head challenge in an
                                    alliance format. Guided by adult coaches and
                                    mentors, students develop STEM skills and
                                    practice engineering principles, while
                                    realizing the value of hard work,
                                    innovation, and working as a team.
                                </p>
                            </div>
                        </div>
                        <div class="basis-1/3 containerwrap">
                            <img src="../assets/FTC.png" class="" />
                        </div>
                    </div>

                    <div class="containerwrap">
                        <div class="basis-1/3 containerwrap">
                            <img src="../assets/BEST.png" class="" />
                        </div>
                        <div class="basis-2/3">
                            <div class="containerwrap px-2">
                                <div class="flex flex-row pb-4">
                                    <h2 class="text-3xl text-bold pr-8">
                                        BEST
                                    </h2>
                                    <q-btn
                                        label="To Site"
                                        color="green"
                                        @click="
                                            goto(
                                                `https://www.bestrobotics.org/site/`
                                            )
                                        "
                                    />
                                </div>
                                <p class="font-franklin">
                                    BEST, a middle and high school robotics
                                    competition whose mission is to engage and
                                    excite students about engineering, science,
                                    and technology as well as inspire them to
                                    pursue careers in these fields. Through
                                    participation in our project-based STEM
                                    program, students learn to analyze and solve
                                    problems utilizing the Engineering Design
                                    Process, which helps them develop
                                    technological literacy skills. It is these
                                    skills that industry seeks in its workforce.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterComp />
    </div>
</template>

<script>
import { ref } from "vue";

import FooterComp from "./FooterComp.vue";
import navbarcustom from "./navbarcustom.vue";

export default {
    data() {
        return {
            isMobile: false,
        };
    },
    setup() {
        return {
            slide: ref(1),
            autoplay: ref(true),
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
        goto(link) {
            window.location.href = `${link}`;
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
.containerwrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-size: medium;
}

.middle {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}

.nooverflow {
    overflow-x: hidden;
}
</style>
