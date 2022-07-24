<template>
  <div class="nooverflow">
      <navbarcustom />

      <!--<h1 class="text-center mt-10 text-6xl tracking-wide font-roboto font-bold"><span class="text-crgreen">Circuit</span>Runners Robotics</h1>-->      
      <q-carousel class="mt-3.5 mb-4 mx-60"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        height="24rem"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="https://cdn.discordapp.com/attachments/966089783044628540/988844257534152704/image_6.png" />
        <q-carousel-slide :name="2" img-src="https://i.imgur.com/juPRryg.jpg" />
      </q-carousel>

    <div class="mx-60">
      <div class="container flex-wrap min-h-screen bg-[#ffffff] text-black">
         <h1 class="text-center p-8 text-xl font-franklin ">CircuitRunners is 20 year old 501(c)(3) nonprofit robotics organization working out of Wheeler High School, containing 4 robotics teams</h1>
      </div>
    </div>
      <FooterComp/>
  </div>
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

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  justify-content: center;
  color: black;
  background: #f1f1f1;
}

.nooverflow {
  overflow-x: hidden;
}
</style>