<template>
    {{this.club_events()}}
</template>

<script>
import { club_events } from "../../database";
export default {
    methods: {
        events() {
            await club_events();
        },
    }
}
</script>