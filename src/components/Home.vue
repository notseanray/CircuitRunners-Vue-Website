<template>
    <navbarcustom />
    
    <div class="q-pa-md">
    <q-carousel class="mt-10 mx-[200px]"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.discordapp.com/attachments/966089783044628540/988844257534152704/image_6.png" />
      <q-carousel-slide :name="2" img-src="https://i.imgur.com/juPRryg.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
    
    <FooterComp></FooterComp>

</template>

<script>
import { ref } from 'vue'

import FooterComp from "./FooterComp.vue";
import navbarcustom from "./navbarcustom.vue";

export default {
    setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  },
    components: {
    FooterComp: FooterComp,
    navbarcustom: navbarcustom,
},
    methods: {
        gotoabout() {
            this.$router.push('/about');
        }
    }
}
</script>