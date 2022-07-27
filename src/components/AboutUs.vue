<template>
  <div class="nooverflow">
    <navbarcustom />
    <div class="flex flex-center containerwrap">
      <h1 class="text-bold mt-8 mb-6">About Us</h1>
      <h2 class="mx-[400px] font-franklin p-3 border-4 bg-black top-20 text-lg">
      CircuitRunners Robotics is a nonprofit robotics organization at Wheeler High School in Marietta, Georgia. While we compete as FRC Team 1002, BEST Team 703 and FTC Teams 1002 and 11347, we do more than just robots. We seek to promote equitable access to STEM experiences and instill important values of engineering, business, and so much more to our members, our community, and the world to inspire and create innovators and future leaders necessary for advancing society. We have been competing for almost 20 years across FIRST Robotics Competition, VEX Robotics, FIRST Tech Challenge, BEST Robotics, and Zero Robotics. Hundreds of students have used their CircuitRunners experience to be the foundation for a strong STEM career. We have and continue to help teams from around the world become better through mentoring and competition, and we show students around the world what is possible through a STEM education. But while we have two decades of experience under our belt, we are not finished yet – we aim to keep shooting higher and higher!
      </h2>
      <h2 class="container text-center mt-5">
      Executive Leadership  
      </h2>
      <div class="flex divide-x-[10rem] mx-[25%] divide-black flex-row my-10">
        <div class="text-center flex flex-col">
          Executive Director – Graeme Flaherty
        <img src="../assets/graeme.jpg" class="mt-4 w-[150px] self-center borderw" />
        </div>
        <div class="text-center flex flex-col">
          Director of Operations – Cody Goh
          <img src="../assets/mrgoh.png" class="mt-4 w-[150px] self-center borderw" />
        </div>
      </div>

      <div class="flex divide-x-[10rem] mx-[16%] divide-black flex-row mb-10">
        <div class="text-center flex flex-col">
          Director of Fundraising – Declan Amerault
        <img src="../assets/dez.png" class="mt-4 w-[150px] self-center borderw" />
        </div>
        <div class="text-center flex flex-col">
          Director of Outreach – Paloma Carignano
          <img src="../assets/plaoma.png" class="mt-4 w-[150px] self-center " />
        </div>
        <div class="text-center flex flex-col">
          Director of Marketing – Saahas Swaroop
          <img src="../assets/SAAAAAAAAAAAHAAAAAAAAAAAAS.png" class="mt-4 w-[150px] self-center borderw" />
        </div>

      </div>
      <h2 class="container text-center mt-5">
      History
      </h2>
      <h2
        class="my-8 mx-[400px] font-franklin p-3 border-4 bg-black top-20 text-lg"
      >
      In 2002, CircuitRunners Robotics joined the robotics community with a mission of giving high school students the best hands-on opportunities to begin a lifelong journey in the fields of Science, Technology, Engineering, and Math. Since then, CircuitRunners Robotics has become an integral part of the Georgia competition robotics community and has always taken pride in our strong outreach base, our competitive spirit, and our tight-knit community that spans decades.
      </h2>
        

    </div>


  </div>
</template>

<script>
import FooterComp from "./FooterComp.vue";
import navbarcustom from "./navbarcustom.vue";
export default {
  components: {
    FooterComp: FooterComp,
    navbarcustom: navbarcustom,
  },
  methods: {
    gotoabout() {
      this.$router.push("/about");
    },
    gotofacebook() {
      window.open("https://www.facebook.com/circuitrunners/", "_blank");
    },
    gototwitter() {
      window.open("https://twitter.com/circuitrunners", "_blank");
    },
    gotoinsta() {
      window.open("https://www.instagram.com/circuitrunners/", "_blank");
    },
  },
};
</script>

<style>
.containerwrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: medium;
}

.middle {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.nooverflow {
  overflow-x: hidden;
}

.borderw {
  border: 4px solid #515155;
}
</style>

<!--https://quasar.dev/vue-components/menu-->
