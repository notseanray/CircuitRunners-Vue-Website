<template>
    <div class="">
        <Navbarcustom />
        <div class="flex justify-center text-center">
            <div class="w-3/12">
                <div>
                    <h1 class="text-slate-100 text-[30px]">First Pick</h1>
                    <Pie
                        :width="w - 3 / 12"
                        :height="w - 3 / 12"
                        :chartData="chartDataFirstPick"
                    />
                </div>
                <div>
                    <h1 class="text-slate-100 text-[30px]">Second Pick</h1>
                    <Pie
                        :width="w - 3 / 12"
                        :height="w - 3 / 12"
                        :chartData="chartDataSecondPick"
                    />
                </div>
                <div>
                    <h1 class="text-slate-100 text-[30px]">Third Pick</h1>
                    <Pie
                        :width="w - 3 / 12"
                        :height="w - 3 / 12"
                        :chartData="chartDataThirdPick"
                    />
                </div>
                <div>
                    <h1 class="text-slate-100 text-[30px]">Graduation Year</h1>
                    <Pie
                        :width="w - 3 / 12"
                        :height="w - 3 / 12"
                        :chartData="graduationYear"
                    />
                </div>
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
import ls from "localstorage-slim";

const date = new Date().getFullYear();

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
            graduationYear: {
                labels: [
                    (date + 1).toString(),
                    (date + 2).toString(),
                    (date + 3).toString(),
                    (date + 4).toString(),
                ],
                datasets: [
                    {
                        data: [0, 0, 0, 0],
                        backgroundColor: [
                            "#a3be8c",
                            "#ebcb8b",
                            "#bf616a",
                            "#b48ead",
                        ],
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
        const saved_data = ls.get("graph_data", { decrypt: true });
        if (saved_data) {
            const data = saved_data as {
                one: Array<number>;
                two: Array<number>;
                three: Array<number>;
                grad: Array<number>;
            };
            this.chartDataFirstPick.datasets[0].data = data.one;
            this.chartDataSecondPick.datasets[0].data = data.two;
            this.chartDataThirdPick.datasets[0].data = data.three;
            this.graduationYear.datasets[0].data = data.grad;
        }
    },
    methods: {
        async fetchData() {
            if (this.updating) {
                return;
            }

            this.updating = true;
            this.chartDataFirstPick.datasets[0].data[0] = 0;
            this.chartDataFirstPick.datasets[0].data[1] = 0;
            this.chartDataFirstPick.datasets[0].data[2] = 0;
            this.chartDataSecondPick.datasets[0].data[1] = 0;
            this.chartDataSecondPick.datasets[0].data[2] = 0;
            this.chartDataSecondPick.datasets[0].data[3] = 0;
            this.chartDataThirdPick.datasets[0].data[1] = 0;
            this.chartDataThirdPick.datasets[0].data[2] = 0;
            this.chartDataThirdPick.datasets[0].data[3] = 0;
            this.graduationYear.datasets[0].data[0] = 0;
            this.graduationYear.datasets[0].data[1] = 0;
            this.graduationYear.datasets[0].data[2] = 0;
            this.graduationYear.datasets[0].data[3] = 0;

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
                    try {
                        const year = parseInt(d.grad_year);
                        switch (year) {
                            case date + 1:
                                this.graduationYear.datasets[0].data[0] += 1;
                                break;
                            case date + 2:
                                this.graduationYear.datasets[0].data[1] += 1;
                                break;
                            case date + 3:
                                this.graduationYear.datasets[0].data[2] += 1;
                                break;
                            case date + 4:
                                this.graduationYear.datasets[0].data[3] += 1;
                                break;
                        }
                    } catch (e) {}
                }
            });
            ls.remove("graph_data");
            ls.set(
                "graph_data",
                {
                    one: this.chartDataFirstPick.datasets[0].data,
                    two: this.chartDataSecondPick.datasets[0].data,
                    three: this.chartDataThirdPick.datasets[0].data,
                    grad: this.graduationYear.datasets[0].data,
                },
                { encrypt: true, ttl: 86400 }
            );
            this.updating = false;
        },
    },
};
</script>
