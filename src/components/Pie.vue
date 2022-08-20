<template>
    <Pie :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>
import { Pie } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
	ArcElement,
} from "chart.js";

ChartJS.register(
	ArcElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

function colorize(opaque, hover, ctx) {
  const v = ctx.parsed;
  const c = v < -50 ? '#D60000'
    : v < 0 ? '#F46300'
    : v < 50 ? '#0358B6'
    : '#44DE28';

  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

  return opaque ? c : Utils.transparentize(c, opacity);
}

function hoverColorize(ctx) {
  return colorize(true, true, ctx);
}

export default {
    name: "PieChart",
    components: { Pie },
    props: {
        chartData: {
            type: Object,
            required: true,
        },
        chartOptions: {
            type: "pie",
            options: {
                plugins: {
                    legend: true,
                    tooltip: true,
                },
                elements: {
                    arc: {
                        backgroundColor: colorize.bind(null, false, false),
                        hoverBackgroundColor: hoverColorize,
                    },
                },
            },
        },
    },
};
</script>
