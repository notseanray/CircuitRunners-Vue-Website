<template>
    <navbarcustom />
    <div class="grid grid-flow-row pb-48">
        <h1 class="text-center mt-6">Club Registration</h1>
        <h2
            class="grid gap-[10px] pb-8 text-center mx-[400px] border-4 bg-black relative top-10 text-medium"
        >
            <form
                class="grid gap-0 font-roboto"
                action="#"
                @submit.prevent="submit"
            >
                <div class="font-franklin">
                    <label for="first_name" class="text-[24px]"
                        >First Name</label
                    >
                    <div class="font-franklin">
                        <input
                            id="first_name"
                            type="first_name"
                            class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                            name="first_name"
                            value
                            required
                            autofocus
                            v-model="first_name"
                        />
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="last_name" class="text-[24px]">Last Name</label>
                    <div class="font-franklin">
                        <input
                            id="last_name"
                            type="last_name"
                            class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                            name="last_name"
                            value
                            required
                            autofocus
                            v-model="last_name"
                        />
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="email" class="text-[24px] font-franklin"
                        >Email</label
                    >
                    <div class="text-xl font-franklin">
                        Preferably use your Wheeler High/Magnet email, or an
                        email accessible from gmail.
                    </div>
                    <div class="">
                        <div class="">
                            <input
                                id="email"
                                type="email"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                                name="email"
                                value
                                required
                                autofocus
                                v-model="email"
                            />
                        </div>
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="password" class="text-[24px]">Password</label>
                    <div class="text-[15px]">
                        Must be at least 8 long, contain 1 captial letter, 1
                        lowercase, and 1 number.
                    </div>
                    <div class="">
                        <input
                            id="password"
                            type="password"
                            class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                            name="password"
                            required
                            v-model="password"
                        />
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="phone" class="text-[24px]">Phone Number</label>
                    <div class="font-franklin">
                        <div class="text-[15px]">
                            Leave blank if you don't have one.
                        </div>
                        <div class="">
                            <input
                                id="phone"
                                type="phone"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                                name="phone"
                                value
                                autofocus
                                v-model="phone"
                            />
                        </div>
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="grad_year" class="text-[24px]"
                        >Graduation Year</label
                    >
                    <div class="text-[15px]">
                        The year you are graduating High School.
                    </div>
                    <div class="">
                        <input
                            id="grad_year"
                            type="grad_year"
                            class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                            name="grad_year"
                            value
                            autofocus
                            v-model="grad_year"
                        />
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="previous_experience" class="text-[24px]"
                        >Have you been in CR before?</label
                    >
                    <div class="text-[15px]">
                        Returning members should check this.
                    </div>
                    <div class="">
                        <input
                            id="previous_experience"
                            type="checkbox"
                            class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                            name="previous_experience"
                            value
                            autofocus
                            v-model="previous_experience"
                        />
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="first_experience" class="text-[24px]"
                        >Have you been in FIRST before?</label
                    >
                    <div class="text-[15px]">
                        Please check if you've participated in FIRST events
                        before.
                    </div>
                    <div class="">
                        <input
                            id="first_experience"
                            type="checkbox"
                            class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                            name="first_experience"
                            value
                            autofocus
                            v-model="first_experience"
                        />
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="useful_skills" class="text-[24px]"
                        >Team Preference</label
                    >
                    <div class="text-[15px]">
                        Please drag the teams in the order you wish to join.
                    </div>
                    <div class="flex flex-row justify-center">
                        <div class="flex justify-center align-center">
                            <img class="pr-5" src="../../assets/scale.png" />
                        </div>
                        <div>
                            <draggable
                                :list="team_preference"
                                ghost-class="opacity-0.5"
                                class="dragArea list-group w-full"
                            >
                                <div
                                    class="p-3"
                                    v-for="element in team_preference"
                                    :key="element.order"
                                >
                                    {{ element.name }}
                                </div>
                            </draggable>
                        </div>
                    </div>
                </div>
                <div class="font-franklin">
                    <label for="useful_skills" class="text-[24px]"
                        >Do you have any relevant skills?</label
                    >
                    <div class="font-franklin">
                        <div class="text-[15px]">
                            If you have any experience with shop tools or
                            related items, please list them here.
                        </div>
                        <div class="">
                            <input
                                id="useful_skills"
                                type="useful_skills"
                                class="form-control bg-slate-500 w-7/12 h-8 text-[18px]"
                                name="useful_skills"
                                value
                                autofocus
                                v-model="useful_skills"
                            />
                        </div>
                    </div>
                </div>
                <div class="text-red-200 text-[15px]">{{ message }}</div>
                <div class="mt-8 font-franklin">
                    <div class="col-md-8 offset-md-4">
                        <button type="submit" class="btn btn-primary">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </h2>
    </div>
    <FooterComp class="fixed bottom-0 w-screen" />
</template>

<script lang="ts">
import FooterComp from "../FooterComp.vue";
import navbarcustom from "../navbarcustom.vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { RegistrationInformation, register } from "../../types";
import { VueDraggableNext } from "vue-draggable-next";
import { useStore } from "../../store";
const TEAMS = [
    { name: "FRC1002", order: 1 },
    { name: "FTC1002", order: 2 },
    { name: "FTC11347", order: 3 },
];
// we can add more teams here if needed
export default {
    data() {
        return {
            first_name: "",
            last_name: "",
            email: useStore().email,
            password: "",
            phone: "",
            grad_year: new Date().getUTCFullYear() + 4,
            previous_experience: false,
            first_experience: false,
            team_preference: TEAMS,
            useful_skills: "",
            message: "",
            drag: false,
        };
    },
    components: {
        FooterComp: FooterComp,
        navbarcustom: navbarcustom,
        draggable: VueDraggableNext,
    },
    methods: {
        onUpdate(e: any) {
            this.team_preference.splice(
                e.newIndex,
                0,
                this.list.splice(e.oldIndex, 1)[0]
            );
            this.team_preference.forEach((item: any, index: number) => {
                item.order = index;
            });
        },
        checkMove: function (e: any) {
            window.console.log("Future index: " + e.draggedContext.futureIndex);
        },
        async submit() {
            console.log("s");
            console.log(this.email + ":" + this.password);
            const info = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                phone: this.phone,
                grad_year: this.grad_year,
                previous_experience: this.previous_experience,
                first_experience: this.first_experience,
                team_preference: this.team_preference,
                useful_skills: this.useful_skills,
            };
            const validated = register(info as RegistrationInformation);
            console.log(validated);
            if (typeof validated === "string") {
                this.message = validated as string;
                console.log(validated);
            } else {
                this.message = "";
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        console.log(user);
                        console.log("signed");
                        // ...
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        gotoabout() {
            this.$router.push("/register");
        },
        login() {},
    },
};
</script>
