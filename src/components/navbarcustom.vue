<template>
<div class="absolute inset-x-0 top-4 flex flex-center">
    <img class="h-20" src="../assets/cr white-svg.svg" />
</div>
<div class="flex flex-center justify-between border-4 bg-black border-[#20d54d]">
    <div class="q-pa-md q-gutter-sm">
        <q-btn class="mr-10" round v-on:click="tohome">
            <q-icon size="81px">
                <img src="https://cdn.discordapp.com/attachments/966089783044628540/988834097277317200/CircuitRunner-Logo-680x843_1.png">
            </q-icon>
        </q-btn>

        <q-btn color="primary" size="small" text-color="black" label="About Us" v-on:click="toabout"/>
            
            <q-btn color="primary" size="small" text-color="black" label="Teams">
                <q-menu class="text-black">
                    <q-list style="min-width: 100px">
                        <q-item clickable v-close-popup v-on:click="toFRC">
                            <q-item-section text-color="black">FRC 1002</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC1">
                            <q-item-section text-color="black">FTC 1002</q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup v-on:click="toFTC2">
                            <q-item-section text-color="black">FTC 11347</q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-btn>

            <q-btn v-on:click="tooutreach" color="primary" size="small" text-color="black" label="Outreach" />
            <q-btn v-on:click="tosponsors" color="primary" size="small" text-color="black" label="Sponsors" />
    </div>
    <div class="flex flex-center q-gutter-md mr-10">
        <q-btn v-on:click="twitter" class="mr-5" color="primary" text-color="black" icon="fa-solid fa-address-card" label="Contact"/>
        <q-btn v-on:click="twitter" round color="primary" text-color="black" icon="fa-brands fa-twitter"/>
        <q-btn v-on:click="instagram" round color="primary" text-color="black" icon="fa-brands fa-instagram"/>
        <q-btn v-on:click="facebook" round color="primary" text-color="black" icon="fa-brands fa-facebook"/>
    </div>
</div>
        
</template>

<script>
import dropdown from 'primevue/dropdown'
import axios from "axios";
import {ref} from 'vue';

export default {
    setup() {
        const quote = ref('');

        axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD').then(response => {
            quote.value = response.data.data.amount;
        });

        return {
            quote
        }
    },
    components: {
        dropdown: dropdown,
    },
    methods: {
        toabout() {
            this.$router.push('/about');
        },
        tohome(){
            this.$router.push('/');
        },
        toFRC(){
            this.$router.push('/frc1002');
        },
        toFTC1(){
            this.$router.push('/ftc1002');
        },
        toFTC2(){
            this.$router.push('/ftc11347');
        },
        login(){
            axios.get('https://api.coinbase.com/v2/prices/spot?currency=USD').then(response => {
                console.log(response.data.data.amount);
            });
        },
        twitter(){
            window.location.href = 'http://twitter.com/circuitrunners'
        }
        ,
        instagram(){
            window.location.href = 'http://instagram.com/circuitrunners'
        }
        ,
        facebook(){
            window.location.href = 'http://facebook.com/circuitrunners'
        },
        tosponsors(){
            this.$router.push('/sponsors')
        },
        tooutreach(){
            this.$router.push('/outreach')
        }
        
    }
}
</script>

<style>

</style>
