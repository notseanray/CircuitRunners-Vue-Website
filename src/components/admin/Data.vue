<template>
    <div>
        <Navbarcustom />
        <div v-if="render && auth" class="mx-[15%]">
            <div class="flex flex-wrap justify-center text-center">
                <div class="w-4/12">
                    <h1 class="text-slate-100 text-[20px]">First Pick</h1>
                    <Pie
                        :width="w - 3 / 12"
                        :height="w - 3 / 12"
                        :chartData="chartDataFirstPick"
                    />
                </div>
                <div class="w-4/12">
                    <h1 class="text-slate-100 text-[20px]">Second Pick</h1>
                    <Pie
                        :width="w - 3 / 12"
                        :height="w - 3 / 12"
                        :chartData="chartDataSecondPick"
                    />
                </div>
                <div class="w-4/12">
                    <h1 class="text-slate-100 text-[20px]">Third Pick</h1>
                    <Pie
                        :width="w - 3 / 12"
                        :height="w - 3 / 12"
                        :chartData="chartDataThirdPick"
                    />
                </div>
                <div class="w-4/12">
                    <h1 class="text-slate-100 text-[20px]">Graduation Year</h1>
                    <Pie
                        :width="w - 3 / 12"
                        :height="w - 3 / 12"
                        :chartData="graduationYear"
                    />
                </div>
            </div>
            <br />
            <div class="grid grid-cols-4 gap-1">
                <h1 class="text-slate-100 text-[18px]">
                    Missing Permission Form
                </h1>
                <h1 class="text-slate-100 text-[18px]">Missing Student COC</h1>
                <h1 class="text-slate-100 text-[18px]">Missing Parent COC</h1>
                <h1 class="text-slate-100 text-[18px]">Unpaid Dues</h1>
                <div>
                    <div v-for="item in missingPermission">
                        <div v-html="item" />
                    </div>
                </div>
                <div>
                    <div v-for="item in missingStudentCOC">
                        <div v-html="item" />
                    </div>
                </div>
                <div>
                    <div v-for="item in missingParentCOC">
                        <div v-html="item" />
                    </div>
                </div>
                <div>
                    <div v-for="item in missingPay">
                        <div v-html="item" />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-1">
                <h1 class="text-slate-100 text-[18px]">Has Permission Form</h1>
                <h1 class="text-slate-100 text-[18px]">Has Student COC</h1>
                <h1 class="text-slate-100 text-[18px]">Has Parent COC</h1>
                <h1 class="text-slate-100 text-[18px]">Paid Dues</h1>
                <div>
                    <div v-for="item in hasPermission">
                        <div v-html="item" />
                    </div>
                </div>
                <div>
                    <div v-for="item in hasStudentCOC">
                        <div v-html="item" />
                    </div>
                </div>
                <div>
                    <div v-for="item in hasParentCOC">
                        <div v-html="item" />
                    </div>
                </div>
                <div>
                    <div v-for="item in hasPay">
                        <div v-html="item" />
                    </div>
                </div>
            </div>
            <h1 class="text-slate-100 text-[24px] text-center">
                Completed Registration
            </h1>
            <div class="grid grid-cols-6 gap-2">
                <div v-for="item in completeRegistration">
                    <div v-html="item" />
                </div>
            </div>
        </div>
        <div v-if="auth">
            <q-btn
                color="primary"
                size="large"
                text-color="black"
                label="Fetch Data"
                v-on:click="fetchData"
                class="btn btn-primary my-10 mx-[20%]"
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
import { useStore } from "../../store";

const date = new Date().getFullYear();

export default {
    data() {
        return {
            isMobile: false,
            updating: false,
            render: false,
            auth: false,
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
            missingPermission: [],
            missingParentCOC: [],
            missingStudentCOC: [],
            missingPay: [],
            hasPermission: [],
            hasParentCOC: [],
            hasStudentCOC: [],
            hasPay: [],
            completeRegistration: [],
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
        const checkUpdated = setInterval(() => {
            if (useStore().fetched) {
                this.auth = useStore().auth;
                clearInterval(checkUpdated);
            }
        }, 200);
        const saved_data = ls.get("graph_data", { decrypt: true });
        if (saved_data) {
            const data = saved_data as {
                one: Array<number>;
                two: Array<number>;
                three: Array<number>;
                grad: Array<number>;
                hasPermission: Array<string>;
                hasParentCOC: Array<string>;
                hasStudentCOC: Array<string>;
                hasPay: Array<string>;
                missingParentCOC: Array<string>;
                missingStudentCOC: Array<string>;
                missingPermission: Array<string>;
                missingPay: Array<string>;
                completeRegistration: Array<string>;
            };
            this.chartDataFirstPick.datasets[0].data = data.one;
            this.chartDataSecondPick.datasets[0].data = data.two;
            this.chartDataThirdPick.datasets[0].data = data.three;
            this.graduationYear.datasets[0].data = data.grad;
            this.hasPermission = data.hasPermission;
            this.hasParentCOC = data.hasParentCOC;
            this.hasStudentCOC = data.hasStudentCOC;
            this.hasPay = data.hasPay;
            this.missingParentCOC = data.missingParentCOC;
            this.missingStudentCOC = data.missingStudentCOC;
            this.missingPermission = data.missingPermission;
            this.missingPay = data.missingPay;
            this.completeRegistration = data.completeRegistration;
            this.render = true;
        }
    },
    methods: {
        async fetchData() {
            if (this.updating) {
                return;
            }

            this.updating = true;
            for (let i = 0; i < 3; i++) {
                this.chartDataFirstPick.datasets[0].data[i] = 0;
                this.chartDataSecondPick.datasets[0].data[i] = 0;
                this.chartDataThirdPick.datasets[0].data[i] = 0;
            }

            for (let i = 0; i < 4; i++) {
                this.graduationYear.datasets[0].data[i] = 0;
            }
            let hasParentCOC = [];
            let hasStudentCOC = [];
            let hasPermission = [];
            let hasPay = [];
            let missingParentCOC = [];
            let missingStudentCOC = [];
            let missingPermission = [];
            let missingPay = [];
            let completeRegistration = [];

            // keep track of the already used names, must keep caps insensitive
            let hasParentCOCAlready = [];
            let hasStudentCOCAlready = [];
            let hasPermissionAlready = [];
            let hasPayAlready = [];
            let missingParentCOCAlready = [];
            let missingStudentCOCAlready = [];
            let missingPermissionAlready = [];
            let missingPayAlready = [];

            const qSnap = await getDocs(
                collection(db, REGISTERED_DATA.collection)
            );
            qSnap.forEach((doc) => {
                const d = doc.data();
                if (!d.first_name || !d.last_name) {
                    return;
                }
                const name = `<a
                                    class="text-green-300"
                                    href="mailto:${d.email}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                               ${d.first_name} ${d.last_name} (${d.grad_year})
							   </a>`;
                const shortName =
                    `${d.first_name} ${d.last_name} ${d.grad_year}`.toLowerCase();
                if (
                    d.parent_coc &&
                    d.student_coc &&
                    d.permission_form &&
                    d.paid
                ) {
                    completeRegistration.push(name);
                }
                if (!!d.parent_coc) {
                    if (!hasParentCOCAlready.includes(shortName)) {
                        hasParentCOC.push(name);
                        hasParentCOCAlready.push(shortName);
                    }
                } else {
                    if (!missingParentCOCAlready.includes(shortName)) {
                        missingParentCOC.push(name);
                        missingParentCOCAlready.push(shortName);
                    }
                }
                if (!!d.student_coc) {
                    if (!hasStudentCOCAlready.includes(shortName)) {
                        hasStudentCOC.push(name);
                        hasStudentCOCAlready.push(shortName);
                    }
                } else {
                    if (!missingStudentCOCAlready.includes(shortName)) {
                        missingStudentCOC.push(name);
                        missingStudentCOCAlready.push(shortName);
                    }
                }
                if (!!d.permission_form) {
                    if (!hasPermissionAlready.includes(shortName)) {
                        hasPermission.push(name);
                        hasPermissionAlready.push(shortName);
                    }
                } else {
                    if (!missingPermissionAlready.includes(shortName)) {
                        missingPermission.push(name);
                        missingPermissionAlready.push(shortName);
                    }
                }
                if (!!d.paid) {
                    if (!hasPayAlready.includes(shortName)) {
                        hasPay.push(name);
                        hasPayAlready.push(shortName);
                    }
                } else {
                    if (!missingPayAlready.includes(shortName)) {
                        missingPay.push(name);
                        missingPayAlready.push(shortName);
                    }
                }
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
            hasParentCOC.sort();
            hasStudentCOC.sort();
            hasPermission.sort();
            hasPay.sort();
            missingParentCOC.sort();
            missingStudentCOC.sort();
            missingPermission.sort();
            missingPay.sort();
            completeRegistration.sort();
            this.hasParentCOC = hasParentCOC;
            this.hasStudentCOC = hasStudentCOC;
            this.hasPermission = hasPermission;
            this.hasPay = hasPay;
            this.missingParentCOC = missingParentCOC;
            this.missingStudentCOC = missingStudentCOC;
            this.missingPermission = missingPermission;
            this.missingPay = missingPay;
            this.completeRegistration = completeRegistration;
            ls.remove("graph_data");
            ls.set(
                "graph_data",
                {
                    one: this.chartDataFirstPick.datasets[0].data,
                    two: this.chartDataSecondPick.datasets[0].data,
                    three: this.chartDataThirdPick.datasets[0].data,
                    grad: this.graduationYear.datasets[0].data,
                    hasParentCOC: this.hasParentCOC,
                    hasStudentCOC: this.hasStudentCOC,
                    hasPermission: this.hasPermission,
                    hasPay: this.hasPay,
                    missingParentCOC: this.missingParentCOC,
                    missingStudentCOC: this.missingStudentCOC,
                    missingPermission: this.missingPermission,
                    missingPay: this.missingPay,
                    completeRegistration: this.completeRegistration,
                },
                { encrypt: true, ttl: 86400 }
            );
            this.updating = false;
            this.render = true;
        },
    },
};
</script>
