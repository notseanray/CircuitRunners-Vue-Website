<template>
    <navbarcustom />
    <div class="flex flex-center containerwrap">
        <h1 class="text-bold mt-8 mb-6">Sponsors</h1>
            <h2
                class="mx-[15%] font-franklin p-3 border-4 bg-black top-20 text-lg rounded-lg"
            >
            Filler
            </h2>
    </div>
</template>

<script>
import navbarcustom from "./navbarcustom.vue";
import FooterComp from "./FooterComp.vue";

export default {

    components: {
        FooterComp: FooterComp,
        navbarcustom: navbarcustom,
    },
}
</script>
