import Home from "../components/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../components/AboutUs.vue";
import FRC from "../components/FRC.vue";
import FTC1002 from "../components/FTC1002.vue";
import FTC11347 from "../components/FTC11347.vue";
import Login from "../components/user/Login.vue";
import Dashboard from "../components/member/Dashboard.vue";
import Register from "../components/user/Register.vue";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Outreach from "../components/Outreach.vue";
import Sponsors from "../components/Sponsors.vue";
import CadStart from "../components/CadStart.vue";
import Donate from "../components/Donate.vue";
import Data from "../components/admin/Data.vue";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
//const analytics = getAnalytics(app);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },

    {
        path: "/about",
        name: "about",
        component: AboutUs,
    },

    {
        path: "/sponsors",
        name: "sponsors",
        component: Sponsors,
    },

    {
        path: "/donate",
        name: "Donate",
        component: Donate,
    },

    {
        path: "/cad",
        name: "cad",
        component: CadStart,
    },

    {
        path: "/FRC1002",
        name: "FRC 1002",
        component: FRC,
    },

    {
        path: "/FTC1002",
        name: "FTC 1002",
        component: FTC1002,
    },
    {
        path: "/FTC11347",
        name: "FTC 11347",
        component: FTC11347,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/outreach",
        name: "Outreach",
        component: Outreach,
    },
    {
        path: "/sponsors",
        name: "Sponsors",
        component: Sponsors,
    },
	{
		path: "/data",
		name: "Data",
		component: Data,
	},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
