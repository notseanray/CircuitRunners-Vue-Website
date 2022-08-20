<template>
    <div class="">
        <Navbarcustom />
        <div class="flex justify-center text-center">
            <div class="w-3/12">
                <Pie
                    :width="w - 3 / 12"
                    :height="w - 3 / 12"
                    :chartData="chartDataFirstPick"
                />
                <Pie
                    :width="w - 3 / 12"
                    :height="w - 3 / 12"
                    :chartData="chartDataSecondPick"
                />
                <Pie
                    :width="w - 3 / 12"
                    :height="w - 3 / 12"
                    :chartData="chartDataThirdPick"
                />
            </div>
        </div>
        <br />
        <div class="mt-10">
            <q-btn
                color="primary"
                size="large"
                text-color="black"
                label="Fetch Data"
                v-on:click="fetchData"
                class="btn btn-primary mx-[20%]"
            />
        </div>
        <FooterComp />
    </div>
</template>
<script lang="ts">
import Pie from "../Pie.vue";
import FooterComp from "../FooterComp.vue";
import navbarcustom from "../navbarcustom.vue";
import { REGISTERED_DATA, checkPage } from "../../database";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../router/index";

export default {
    data() {
        return {
            isMobile: false,
            updating: false,
            chartDataFirstPick: {
                labels: ["FTC1002", "FRC1002", "FTC11347"],
                datasets: [
                    {
                        data: [0, 0, 0],
                        backgroundColor: ["#a3be8c", "#ebcb8b", "#bf616a"],
                    },
                ],
            },
            chartDataSecondPick: {
                labels: ["FTC1002", "FRC1002", "FTC11347"],
                datasets: [
                    {
                        data: [0, 0, 0],
                        backgroundColor: ["#a3be8c", "#ebcb8b", "#bf616a"],
                    },
                ],
            },
            chartDataThirdPick: {
                labels: ["FTC1002", "FRC1002", "FTC11347"],
                datasets: [
                    {
                        data: [0, 0, 0],
                        backgroundColor: ["#a3be8c", "#ebcb8b", "#bf616a"],
                    },
                ],
            },
        };
    },
    components: {
        FooterComp: FooterComp,
        Navbarcustom: navbarcustom,
        Pie: Pie,
    },
    mounted() {
        checkPage(true, () => {
            this.$router.push("/login");
        });
    },
    methods: {
        async fetchData() {
            if (this.updating) {
                return;
            }
            this.updating = true;
            const qSnap = await getDocs(
                collection(db, REGISTERED_DATA.collection)
            );
            qSnap.forEach((doc) => {
                const d = doc.data();
                if (d.team_preference) {
                    switch ((d.team_preference as Array<string>)[0]) {
                        case "FRC1002":
                            this.chartDataFirstPick.datasets[0].data[0] += 1;
                            break;
                        case "FTC1002":
                            this.chartDataFirstPick.datasets[0].data[1] += 1;
                            break;
                        case "FTC11347":
                            this.chartDataFirstPick.datasets[0].data[2] += 1;
                            break;
                    }
                    switch ((d.team_preference as Array<string>)[1]) {
                        case "FRC1002":
                            this.chartDataSecondPick.datasets[0].data[0] += 1;
                            break;
                        case "FTC1002":
                            this.chartDataSecondPick.datasets[0].data[1] += 1;
                            break;
                        case "FTC11347":
                            this.chartDataSecondPick.datasets[0].data[2] += 1;
                            break;
                    }
                    switch ((d.team_preference as Array<string>)[2]) {
                        case "FRC1002":
                            this.chartDataThirdPick.datasets[0].data[0] += 1;
                            break;
                        case "FTC1002":
                            this.chartDataThirdPick.datasets[0].data[1] += 1;
                            break;
                        case "FTC11347":
                            this.chartDataThirdPick.datasets[0].data[2] += 1;
                            break;
                    }
                }
            });
            this.updating = false;
            this.chartData.datasets[0] = this.chartData.datasets[0];
        },
    },
};
</script>
