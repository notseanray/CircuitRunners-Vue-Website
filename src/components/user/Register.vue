<template>
    <navbarcustom />
    <div class="grid grid-flow-row pb-48">
        {{ load_input() }}
        <h1 class="text-center text-[30px] mt-6">Club Registration</h1>
        <h2
            class="grid gap-[10px] text-center mx-[10%] border-4 bg-black relative top-10 text-medium"
        >
            <div v-if="!acknowledge">
                <div class="mt-8 font-franklin">
                    <div class="text-[20px]">
                        <ul>
                            <li>
                                Club dues are $250 and must be paid to
                                participate. We use Paypal to pay for convience,
                                if you are unable to pay with this method please
                                contact
                                <a
                                    class="text-green-300"
                                    href="mailto:info@circuitrunners.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    info@circuitrunners.com </a
                                >.
                            </li>
                            <li>
                                The Club Permission form, Student Code of
                                Conduct, and Parent Code of Conduct forms must
                                be signed by both the student and parent to
                                participate.
                            </li>
                        </ul>
                    </div>
                    <div class="mt-4">
                        <div class="text-[15px]">
                            I have read this information:
                        </div>
                        <input
                            id="accept_acknowledge"
                            type="checkbox"
                            v-on:change="save_input"
                            class="bg-slate-500 w-8/12 h-8"
                            name="accept_acknowledge"
                            value
                            autofocus
                            v-model.trim="accept_acknowledge"
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
                            >Fields marked with a * MUST be filled out to
                            register.</label
                        >
                        <br />
                        <label for="first_name" class="text-[24px]"
                            >First Name*</label
                        >
                        <div class="font-franklin">
                            <input
                                id="first_name"
                                type="first_name"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                name="first_name"
                                value
                                required
                                autofocus
                                v-on:keyup="save_input"
                                v-model.trim="first_name"
                            />
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="last_name" class="text-[24px]"
                            >Last Name*</label
                        >
                        <div class="font-franklin">
                            <input
                                id="last_name"
                                type="last_name"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                name="last_name"
                                value
                                required
                                autofocus
                                v-on:keyup="save_input"
                                v-model.trim="last_name"
                            />
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="email" class="text-[24px] font-franklin"
                            >Email*</label
                        >
                        <div class="text-[15px] font-franklin mx-[10%]">
                            Preferably use your Wheeler High/Magnet email. If
                            this is unavailable any Google account will work.
                            Once the club begins everyone will recieve their own
                            club emails.
                        </div>
                        <div class="">
                            <div class="">
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                    name="email"
                                    value
                                    required
                                    autofocus
                                    v-on:keyup="save_input"
                                    v-model.trim="email"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="password" class="text-[24px]"
                            >Password*</label
                        >
                        <div class="text-[15px] mx-[10%]">
                            Must be at least 8 long, contain 1 captial letter, 1
                            lowercase, and 1 number. Once this is set you can
                            login either with either these credentials or
                            through your Google account.
                        </div>
                        <div class="">
                            <input
                                id="password"
                                type="password"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                name="password"
                                required
                                v-on:keyup="save_input"
                                v-model.trim="password"
                            />
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="password" class="text-[24px]"
                            >Confim Password*</label
                        >
                        <div class="text-[15px] mx-[10%]">
                            Retype your password.
                        </div>
                        <div class="">
                            <input
                                id="password2"
                                type="password"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                name="password2"
                                required
                                v-model.trim="password2"
                            />
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="password" class="text-[24px]"
                            >Parent Name*</label
                        >
                        <div class="">
                            <input
                                id="parent_name"
                                type="parent_name"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                name="parent_name"
                                required
                                v-on:keyup="save_input"
                                v-model.trim="parent_name"
                            />
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="password" class="text-[24px]"
                            >Parent Phone Number*</label
                        >
                        <div class="text-[15px]">
                            Format the number as 123-123-1234. Do not include
                            the country code.
                        </div>
                        <div class="">
                            <input
                                id="parent_phone"
                                type="parent_phone"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                name="parent_phone"
                                required
                                v-on:keyup="save_input"
                                v-model.trim="parent_phone"
                            />
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="password" class="text-[24px]"
                            >Parent Email*</label
                        >
                        <div class="">
                            <input
                                id="parent_email"
                                type="parent_email"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                name="parent_email"
                                required
                                v-on:keyup="save_input"
                                v-model.trim="parent_email"
                            />
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="phone" class="text-[24px]"
                            >Phone Number</label
                        >
                        <div class="font-franklin">
                            <div class="text-[15px]">
                                If you do not have a phone number, leave this
                                field blank. Otherwise format the number as
                                123-123-1234. Do not include the country code.
                            </div>
                            <div class="">
                                <input
                                    id="phone"
                                    type="phone"
                                    v-on:keyup="save_input"
                                    class="form-control bg-slate-500 w-4/12 h-8 text-[18px] min-w-[200px]"
                                    name="phone"
                                    value
                                    autofocus
                                    v-model.trim="phone"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="grad_year" class="text-[24px]"
                            >Graduation Year*</label
                        >
                        <div class="text-[15px]">
                            The year you are graduating/graduated High School.
                        </div>
                        <div class="">
                            <input
                                id="grad_year"
                                type="grad_year"
                                class="form-control bg-slate-500 w-3/12 h-8 text-[18px] min-w-[100px]"
                                name="grad_year"
                                v-on:keyup="save_input"
                                value
                                autofocus
                                v-model.trim="grad_year"
                            />
                        </div>
                    </div>
                    <div class="font-franklin">
                        <label for="previous_experience" class="text-[24px]"
                            >Have you been in CR before?</label
                        >
                        <div class="text-[15px]">
                            Only returning members should check this.
                        </div>
                        <div class="">
                            <input
                                id="previous_experience"
                                type="checkbox"
                                class="form-control bg-slate-500 w-4/12 h-8 text-[18px]"
                                name="previous_experience"
                                v-on:change="save_input"
                                value
                                autofocus
                                v-model="previous_experience"
                            />
                        </div>
                    </div>
                    <div v-if="!previous_experience">
                        <div class="font-franklin">
                            <label for="first_experience" class="text-[24px]"
                                >Have you been in FIRST before?</label
                            >
                            <div class="text-[15px]">
                                Please check if you've participated in
                                <a
                                    class="text-green-300"
                                    href="https://www.firstinspires.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    FIRST
                                </a>
                                events before.
                            </div>
                            <div class="">
                                <input
                                    id="first_experience"
                                    type="checkbox"
                                    v-on:change="save_input"
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
                            <div class="text-[15px] mx-[10%]">
                                Please drag the teams in the order you wish to
                                join, with the first position being the team you
                                want to be placed in the most. These are
                                preferences and are not guaranteed to be
                                fufilled.
                            </div>
                            <div class="flex justify-center">
                                <div>
                                    <draggable
                                        :list="team_preference"
                                        ghost-class="opacity-0.5"
                                        class="dragArea list-group w-full"
                                        v-on:change="save_input"
                                    >
                                        <div
                                            class="p-3 select-none"
                                            v-for="(
                                                element, i
                                            ) in team_preference"
                                            :key="element.order"
                                        >
                                            {{ i + 1 + ". " + element.name }}
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>
                        <div class="font-franklin">
                            <label
                                for="useful_skills"
                                class="text-[15px] mx-[10%]"
                            >
                                For the following section rank each entry on a
                                scale of 1-5, with 5 being experienced in and 1
                                being inexperienced in.
                            </label>
                            <br />
                            <label for="useful_skills" class="text-[24px]"
                                >Please check any applicable CAD software
                                experience here</label
                            >
                            <div
                                class="p-1 select-none"
                                v-for="e in cad_skills"
                                :key="e.name"
                            >
                                <div class="text-[18px] mt-2">
                                    <div class="grid grid-cols-2">
                                        {{ e.name }}
                                        <input
                                            id="cad_skill"
                                            type="checkbox"
                                            v-on:change="save_input"
                                            class="bg-slate-500 w-4/12 h-6 text-[16px] float-right mr-36"
                                            name="cad_skill"
                                            value
                                            autofocus
                                            v-model="e.check"
                                        />
                                    </div>
                                </div>
                                <div v-if="e.check" class="text-sm mx-[10%]">
                                    <q-slider
                                        v-model="e.level"
                                        inner-track-color="green-8"
                                        v-on:change="save_input"
                                        track-color="grey-2"
                                        markers
                                        marker-labels
                                        :min="1"
                                        :max="5"
                                    />
                                </div>
                            </div>
                            <br />
                            <label
                                for="useful_skills"
                                class="text-[18px] mx-[10%]"
                                >If you have any additional CAD experience you
                                would like to mention please list it here</label
                            >
                            <br />
                            <input
                                id="cad_fill_in"
                                type="cad_fill_in"
                                class="form-control bg-slate-500 w-8/12 h-6 text-[16px] min-w-[200px]"
                                name="cad-fill_in"
                                value
                                autofocus
                                v-on:keyup="show_slider_cad"
                                v-model.trim="cad_fill_in"
                            />
                            <div
                                v-if="cad_fill_in_slider"
                                class="text-sm mx-[10%]"
                            >
                                <q-slider
                                    v-model="cad_fill_in_skill"
                                    inner-track-color="green-8"
                                    v-on:change="save_input"
                                    track-color="grey-2"
                                    markers
                                    marker-labels
                                    :min="1"
                                    :max="5"
                                />
                            </div>
                            <br />
                            <label for="useful_skills" class="text-[24px]"
                                >Please check any applicable Programming
                                experience here</label
                            >
                            <div
                                class="p-1 select-none"
                                v-for="e in programming_skills"
                                :key="e.name"
                            >
                                <div class="text-[18px] mt-2">
                                    <div class="grid grid-cols-2">
                                        {{ e.name }}
                                        <input
                                            id="programming_skill"
                                            type="checkbox"
                                            class="bg-slate-500 w-4/12 h-6 float-right mr-36"
                                            name="programming_skill"
                                            value
                                            autofocus
                                            v-on:change="save_input"
                                            v-model="e.check"
                                        />
                                    </div>
                                </div>
                                <div v-if="e.check" class="text-sm mx-[10%]">
                                    <q-slider
                                        v-model="e.level"
                                        inner-track-color="green-8"
                                        track-color="grey-2"
                                        v-on:change="save_input"
                                        markers
                                        marker-labels
                                        :min="1"
                                        :max="5"
                                    />
                                </div>
                            </div>
                            <br />
                            <label
                                for="useful_skills"
                                class="text-[18px] mx-[10%]"
                                >Please fill in here if you have any additional
                                programming experience you would like to
                                mention</label
                            >
                            <br />
                            <input
                                id="programming_fill_in"
                                type="programming_fill_in"
                                class="form-control bg-slate-500 w-8/12 h-8 text-[18px]"
                                name="programming_fill_in"
                                value
                                autofocus
                                v-on:keyup="show_slider_programming"
                                v-model.trim="programming_fill_in"
                            />
                            <div
                                v-if="programming_fill_in_slider"
                                class="text-sm mx-[10%]"
                            >
                                <q-slider
                                    v-model="programming_fill_in_skill"
                                    inner-track-color="green-8"
                                    track-color="grey-2"
                                    v-on:keyup="save_input"
                                    markers
                                    marker-labels
                                    :min="1"
                                    :max="5"
                                />
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="font-franklin">
                            <label for="first_experience" class="text-[24px]"
                                >Would you like to change your team?</label
                            >
                            <div class="text-[15px]">
                                Returning members will stay on the same team
                                unless they request it here.
                            </div>
                            <div class="">
                                <input
                                    id="change_teams"
                                    type="checkbox"
                                    v-on:change="save_input"
                                    class="form-control bg-slate-500 w-8/12 h-8 text-[18px]"
                                    name="change_teams"
                                    value
                                    autofocus
                                    v-model="change_teams"
                                />
                            </div>
                            <div v-if="change_teams">
                                <div class="font-franklin">
                                    <label
                                        for="useful_skills"
                                        class="text-[24px]"
                                        >Team Preference</label
                                    >
                                    <div class="text-[15px] mx-[10%]">
                                        Please drag the teams in the order you
                                        wish to join, with the first position
                                        being the team you want to be placed in
                                        the most. These are preferences and are
                                        NOT guaranteed to be fufilled.
                                    </div>
                                    <div class="flex justify-center">
                                        <div>
                                            <draggable
                                                :list="team_preference"
                                                v-on:change="save_input"
                                                ghost-class="opacity-0.5"
                                                class="dragArea list-group w-full"
                                            >
                                                <div
                                                    class="p-3 select-none"
                                                    v-for="(
                                                        element, i
                                                    ) in team_preference"
                                                    :key="element.order"
                                                >
                                                    {{
                                                        i +
                                                        1 +
                                                        ". " +
                                                        element.name
                                                    }}
                                                </div>
                                            </draggable>
                                        </div>
                                    </div>
                                    <div class="text-[15px]">
                                        Why do you want to change teams?*
                                    </div>
                                    <input
                                        id="change_reason"
                                        type="change_reason"
                                        class="form-control bg-slate-500 w-8/12 h-8 text-[18px]"
                                        name="password"
                                        required
                                        v-on:keyup="save_input"
                                        v-model.trim="change_reason"
                                    />
                                </div>
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
import {
    SavableFormData,
    register,
    cad_skills,
    programming_skills,
} from "../../types";
import { VueDraggableNext } from "vue-draggable-next";
import { useStore } from "../../store";
import { is_registered, register_user, store_login } from "../../database";
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
            parent_name: "",
            parent_phone: "",
            parent_email: "",
            grad_year: new Date().getUTCFullYear() + 4,
            previous_experience: false,
            first_experience: false,
            team_preference: TEAMS,
            cad_skills: cad_skills,
            // if someone wants the change the team they are on
            change_teams: false,
            change_reason: "",

            cad_fill_in: "",
            cad_fill_in_skill: 0,
            cad_fill_in_slider: false,

            programming_skills: programming_skills,

            programming_fill_in: "",
            programming_fill_in_skill: 0,
            programming_fill_in_slider: false,
            password2: "",
            // error message to show people if they do invalid input
            message: "",
            // activate when dragging the teams in order
            drag: false,
            // we want to make sure that anyone registering understands that
            // they will have to pay $250 before being able to actually do anything
            acknowledge: false,
            // this is to make sure people actually read the message
            accept_acknowledge: false,
            already_loaded: false,
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
        show_slider_cad() {
            this.save_input();
            this.cad_fill_in_slider = this.cad_fill_in.length > 1;
        },
        show_slider_programming() {
            this.save_input();
            this.programming_fill_in_slider =
                this.programming_fill_in.length > 1;
        },
        // can add debounce
        save_input() {
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                phone: this.phone,
                parent_name: this.parent_name,
                parent_email: this.parent_email,
                grad_year: this.grad_year,
                parent_phone: this.parent_phone,
                previous_experience: this.previous_experience,
                first_experience: this.first_experience,
                team_preference: this.team_preference,
                cad_skills: this.cad_skills,
                change_teams: this.change_teams,
                change_reason: this.change_reason,
                cad_fill_in: this.cad_fill_in,
                cad_fill_in_skill: this.cad_fill_in_skill,
                cad_fill_in_slider: this.cad_fill_in_slider,
                programming_skills: this.programming_skills,
                programming_fill_in: this.programming_fill_in,
                programming_fill_in_skill: this.programming_fill_in_skill,
                programming_fill_in_slider: this.programming_fill_in_slider,
                acknowledge: this.acknowledge,
                accept_acknowledge: this.accept_acknowledge,
            };
            const string_data = "data_tag:" + JSON.stringify(data);
            localStorage.setItem(btoa("form_data"), btoa(string_data));
        },
        load_input() {
            const data = localStorage.getItem(btoa("form_data"));
            if (data && data.length > 0 && !this.already_loaded) {
                try {
                    const string_data = localStorage.getItem(btoa("form_data"));
                    const decoded = atob(string_data);
                    if (!decoded.startsWith("data_tag:")) {
                        localStorage.removeItem(btoa("form_data"));
                        return;
                    }
                    const json: SavableFormData = JSON.parse(decoded.slice(9));
                    this.first_name = json.first_name;
                    this.last_name = json.last_name;
                    this.email = json.email;
                    this.password = json.password;
                    this.phone = json.phone;
                    this.parent_phone = json.parent_phone;
                    this.parent_name = json.parent_name;
                    this.parent_email = json.parent_email;
                    this.grad_year = json.grad_year;
                    this.previous_experience = json.previous_experience;
                    this.first_experience = json.first_experience;
                    this.team_preference = json.team_preference;
                    this.cad_skills = json.cad_skills;
                    this.change_teams = json.change_teams;
                    this.change_reason = json.change_reason;
                    this.cad_fill_in = json.cad_fill_in;
                    this.cad_fill_in_skill = json.cad_fill_in_skill;
                    this.cad_fill_in_slider = json.cad_fill_in_slider;
                    this.programming_skills = json.programming_skills;
                    this.programming_fill_in = json.programming_fill_in;
                    this.programming_fill_in_skill =
                        json.programming_fill_in_skill;
                    this.programming_fill_in_slider =
                        json.programming_fill_in_slider;
                    this.acknowledge = json.acknowledge;
                    this.accept_acknowledge = json.accept_acknowledge;
                } catch {
                    localStorage.removeItem(btoa("form_data"));
                }
            }
            this.already_loaded = true;
        },
        validate_input() {
            console.log("test");
        },
        accept_message() {
            this.save_input();
            this.acknowledge = true;
        },
        async submit() {
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
                change_teams: this.change_teams,
                parent_email: this.parent_email,
                parent_phone: this.parent_phone,
                parent_name: this.parent_name,
                validated: false,
                cad_skills: this.cad_skills,
                programming_skills: this.programming_skills,
                cad_fill_in: this.cad_fill_in,
                programming_fill_in: this.programming_fill_in,
                team_change_reason: this.change_reason,
            };
            if (this.password != this.password2) {
                this.message =
                    "Passwords must match. Please retype your password and reconfirm it.";
                return;
            }
            const validated = register(info);
            // this means that there's an error message, so we should report it
            // otherwise we can ago ahead and submit to firebase
            if (typeof validated === "string") {
                this.message = validated as string;
            } else {
                this.message = "";
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        store_login(user);
                        register_user(validated);
                        // no top level await
                        is_registered(user.email).then((_: any) => {
                            this.$router.push("/dashboard");
                            localStorage.removeItem(btoa("form_data"));
                        });
                        // ...
                    })
                    .catch((_) => {
                        // already logged in so we failed to create an account, but we can push the data
                        if (useStore().auth) {
                            register_user(validated);
                            // no top level await
                            is_registered(this.email).then((_: any) => {
                                this.$router.push("/dashboard");
                                localStorage.removeItem(btoa("form_data"));
                            });
                            return;
                        }
                        this.message =
                            "Unable to create account, do you already have one? Please contact club staff.";
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
