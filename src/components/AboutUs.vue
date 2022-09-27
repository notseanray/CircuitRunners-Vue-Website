<template>
    <div v-if="!isMobile" class="nooverflow">
        <div class="flex flex-center containerwrap">
            <h1 class="text-bold mt-8 mb-6 text-6xl">About Us</h1>
            <h2
                class="mx-[15%] font-franklin p-3 border-4 bg-black top-20 text-lg rounded-lg"
            >
                CircuitRunners Robotics is a nonprofit robotics organization at
                Wheeler High School in Marietta, Georgia. While we compete as
                FRC Team 1002, BEST Team 703 and FTC Teams 1002 and 11347, we do
                more than just robots. We seek to promote equitable access to
                STEM experiences and instill important values of engineering,
                business, and so much more to our members, our community, and
                the world to inspire and create innovators and future leaders
                necessary for advancing society. We have been competing for
                almost 20 years across FIRST Robotics Competition, VEX Robotics,
                FIRST Tech Challenge, BEST Robotics, and Zero Robotics. Hundreds
                of students have used their CircuitRunners experience to be the
                foundation for a strong STEM career. We have and continue to
                help teams from around the world become better through mentoring
                and competition, and we show students around the world what is
                possible through a STEM education. But while we have two decades
                of experience under our belt, we are not finished yet – we aim
                to keep shooting higher and higher!
            </h2>
            <h2 class="container text-center mt-5 mb-5">Executive Leadership</h2>
            <div
                class="flex mx-[20%] divide-black flex-row justify-evenly my-10 text-[10px]"
            >
                <div class="text-center flex flex-col rounded-lg p-2">
                    Executive Director – Graeme Flaherty
                    <img
                        src="../assets/graeme.jpg"
                        class="mt-4 w-[150px] self-center borderw rounded-lg"
                    />
                </div>
                <div class="text-center flex flex-col p-2">
                    Director of Operations – Cody Goh
                    <img
                        src="../assets/mrgoh.png"
                        class="mt-4 w-[150px] self-center borderw rounded-lg"
                    />
                </div>
                <div class="text-center flex flex-col p-2">
                    Director of Fundraising – Declan Amerault
                    <img
                        src="../assets/dez.png"
                        class="mt-4 w-[150px] self-center borderw rounded-lg"
                    />
                </div>
                <div class="text-center flex flex-col p-2">
                    Director of Outreach – Paloma Carignano
                    <img
                        src="../assets/paloma.png"
                        class="mt-4 w-[150px] borderw self-center rounded-lg"
                    />
                </div>
                <div class="text-center flex flex-col p-2">
                    Director of Marketing – Saahas Swaroop
                    <img
                        src="../assets/SAAAAAAAAAAAHAAAAAAAAAAAAS.png"
                        class="mt-4 w-[150px] self-center borderw rounded-lg"
                    />
                </div>
            </div>
            <h2 class="container text-center mt-5">History</h2>
            <h2
                class="my-8 mx-[15%] font-franklin p-3 border-4 bg-black top-20 text-lg rounded-lg"
            >
                In 2002, CircuitRunners Robotics joined the robotics community
                with a mission of giving high school students the best hands-on
                opportunities to begin a lifelong journey in the fields of
                Science, Technology, Engineering, and Math. Since then,
                CircuitRunners Robotics has become an integral part of the
                Georgia competition robotics community and has always taken
                pride in our strong outreach base, our competitive spirit, and
                our tight-knit community that spans decades.
            </h2>
        </div>

    </div>

    <div v-else class="nooverflow">
        <div class="flex flex-center containerwrap">
            <h1 class="text-bold text-4xl mt-8 mb-6">About Us</h1>
            <h2 class="font-franklin p-3 border-4 bg-black top-20 text-lg">
                CircuitRunners Robotics is a nonprofit robotics organization at
                Wheeler High School in Marietta, Georgia. While we compete as
                FRC Team 1002, BEST Team 703 and FTC Teams 1002 and 11347, we do
                more than just robots. We seek to promote equitable access to
                STEM experiences and instill important values of engineering,
                business, and so much more to our members, our community, and
                the world to inspire and create innovators and future leaders
                necessary for advancing society. We have been competing for
                almost 20 years across FIRST Robotics Competition, VEX Robotics,
                FIRST Tech Challenge, BEST Robotics, and Zero Robotics. Hundreds
                of students have used their CircuitRunners experience to be the
                foundation for a strong STEM career. We have and continue to
                help teams from around the world become better through mentoring
                and competition, and we show students around the world what is
                possible through a STEM education. But while we have two decades
                of experience under our belt, we are not finished yet – we aim
                to keep shooting higher and higher!
            </h2>
            <h2 class="container text-center mt-5">Executive Leadership</h2>
            <div class="flex divide-black flex-row justify-evenly w-1/2 my-10">
                <div class="text-center flex flex-col">
                    Executive Director Graeme Flaherty
                    <img
                        src="../assets/graeme.jpg"
                        class="mt-4 w-[150px] self-center borderw"
                    />
                </div>
                <div class="text-center flex flex-col mt-2">
                    Director of Operations Cody Goh
                    <img
                        src="../assets/mrgoh.png"
                        class="mt-4 w-[150px] self-center borderw"
                    />
                </div>
            </div>

            <div class="flex w-1/2 justify-evenly divide-black flex-row mb-10">
                <div class="text-center flex flex-col">
                    Director of Fundraising Declan Amerault
                    <img
                        src="../assets/dez.png"
                        class="mt-4 w-[150px] self-center borderw"
                    />
                </div>
                <div class="text-center flex flex-col mt-2">
                    Director of Outreach Paloma Carignano
                    <img
                        src="../assets/paloma.png"
                        class="mt-4 w-[150px] self-center borderw"
                    />
                </div>
                <div class="text-center flex flex-col mt-2">
                    Director of Marketing Saahas Swaroop
                    <img
                        src="../assets/SAAAAAAAAAAAHAAAAAAAAAAAAS.png"
                        class="mt-4 w-[150px] self-center borderw"
                    />
                </div>
            </div>
            <h2 class="container text-center mt-5">History</h2>
            <h2 class="my-8 font-franklin p-3 border-4 bg-black top-20 text-lg">
                In 2002, CircuitRunners Robotics joined the robotics community
                with a mission of giving high school students the best hands-on
                opportunities to begin a lifelong journey in the fields of
                Science, Technology, Engineering, and Math. Since then,
                CircuitRunners Robotics has become an integral part of the
                Georgia competition robotics community and has always taken
                pride in our strong outreach base, our competitive spirit, and
                our tight-knit community that spans decades.
            </h2>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isMobile: false,
        };
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
    methods: {
        gotoabout() {
            this.$router.push("/about");
        },
        gotofacebook() {
            window.open("https://www.facebook.com/circuitrunners/", "_blank");
        },
        gototwitter() {
            window.open("https://twitter.com/circuitrunners", "_blank");
        },
        gotoinsta() {
            window.open("https://www.instagram.com/circuitrunners/", "_blank");
        },
        onResize() {
            this.isMobile = window.innerWidth < 600;
        },
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

.borderw {
    border: 4px solid #515155;
}
</style>

<!--https://quasar.dev/vue-components/menu-->
