<template>
    <div v-if="!mobile" class="overflow-x-hidden">
        <footer>
            <div class="bottom-0 text-center w-screen p-5 bg-[#131314] z-10">
                <span className="copyright"
                    >&copy; 2002-2022 CircuitRunners Robotics Inc.</span
                >
            </div>
        </footer>
    </div>
</template>
<script>
import { useStore } from "../store";
import { MOBILE_WIDTH } from "./navbarcustom.vue";

export default {
    data() {
        return {
            mobile: useStore().mobile ||  window.innerWidth < MOBILE_WIDTH,
        };
    },
};
</script>

<style></style>
