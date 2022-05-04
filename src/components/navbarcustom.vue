<template>
    <div class="p-8 border-4 bg-black grid grid-flow-col gap-10 justify-start border-[#2b2a2a]">
        <button v-on:click="tohome">Home</button> <button v-on:click="toabout">About</button> <dropdown />
    </div>
</template>

<script>
import dropdown from "./dropdown.vue"

export default {
    components: {
        dropdown: dropdown,
    },
    methods: {
        toabout() {
            this.$router.push('/about');
        },
        tohome(){
            this.$router.push('/');
        }
    }
}
</script>
