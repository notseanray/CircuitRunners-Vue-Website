<template>
    <navbarcustom />
    <div class="grid grid-flow-row pb-48">
        <h1 class="text-center mt-6">Club Registration</h1>
        <h2
            class="grid gap-[10px] pb-8 text-center mx-[400px] border-4 bg-black relative top-10 text-medium"
        >
            <div v-if="!acknowledge">
                <div class="mt-8 font-franklin">
                    <div class="text-[20px]">
                        <ul>
                            <li>
                                Club dues are $250 and are required to
                                participate, we use Paypal to play but to
                                arrange alternative payment methods please
                                contact blah blah
                            </li>
                            <li>
                                In order to participate you must have your
                                parent sign the participation form
                            </li>
                        </ul>
                    </div>
                    <div class="mt-4">
                        <div class="text-[15px]">
                            I have read the information
                        </div>
                        <input
                            id="accept_acknowledge"
                            type="checkbox"
                            class="bg-slate-500 w-4/12 h-8"
                            name="accept_acknowledge"
                            value
                            autofocus
                            v-model="accept_acknowledge"
                        />
                    </div>
                    <div v-if="accept_acknowledge">
                        <div class="col-md-8 offset-md-4 text-[25px]">
                            <q-btn
                                color="primary"
                                size="large"
                                text-color="black"
                                label="I acknowledge this information"
                                v-on:click="accept_message"
                                class="btn btn-primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
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
                        <label for="last_name" class="text-[24px]"
                            >Last Name</label
                        >
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
                        <label for="password" class="text-[24px]"
                            >Password</label
                        >
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
                        <label for="phone" class="text-[24px]"
                            >Phone Number</label
                        >
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
                            Please drag the teams in the order you wish to join,
                            with the first position being the team you want to
                            be placed in the most. These are preferences and are
                            not guaranteed to be fufilled.
                        </div>
                        <div class="flex flex-row justify-center">
                            <div>
                                <draggable
                                    :list="team_preference"
                                    ghost-class="opacity-0.5"
                                    class="dragArea list-group w-full"
                                >
                                    <div
                                        class="p-3 select-none"
                                        v-for="(element, i) in team_preference"
                                        :key="element.order"
                                    >
                                        {{ i + 1 + ". " + element.name }}
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
                            <q-btn
                                color="primary"
                                size="large"
                                text-color="black"
                                label="Register"
                                v-on:click="submit"
                                class="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
            </div>
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
import { register_user } from "../../database";
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
            // we want to make sure that anyone registering understands that
            // they will have to pay $250 before being able to actually do anything
            acknowledge: false,
            // this is to make sure people actually read the message
            accept_acknowledge: false,
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
        accept_message() {
            this.acknowledge = true;
        },
        async submit() {
            const info: RegistrationInformation = {
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
                validated: false,
                registered: "",
            };
            const validated = register(info as RegistrationInformation);
            // this means that there's an error message, so we should report it
            // otherwise we can ago ahead and submit to firebase
            if (typeof validated === "string") {
                this.message = validated as string;
            } else {
                this.message = "";
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        this.message = "";
                        // Signed in
                        const user = userCredential.user;
                        register_user(validated);
                        console.log(user);
                        console.log("signed");
                        // ...
                    })
                    .catch((_) => {
                        this.message =
                            "Unable to create account, please contact club staff";
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
