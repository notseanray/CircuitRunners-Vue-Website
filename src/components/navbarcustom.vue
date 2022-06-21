<template>
    <div class="border-4 px-10 bg-black grid grid-flow-col gap-10 justify-start border-[#2b2a2a]">
        <div class="font-roboto q-pa-md q-gutter-md">
            <q-btn round class="mr-[80px]" v-on:click="tohome">
                <q-icon size="100px">
                    <img src="https://cdn.discordapp.com/attachments/966089783044628540/988834097277317200/CircuitRunner-Logo-680x843_1.png">
                </q-icon>
            </q-btn>
            
            <q-btn color="primary" text-color="black" label="About Us" v-on:click="toabout"/>
            
            <q-btn color="primary" text-color="black" label="Teams">
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

            <q-btn color="primary" text-color="black" label="Sponsors">

        
                
            </q-btn>

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
        }
        
    }
}
</script>
