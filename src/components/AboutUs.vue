<template>
  <div class="h-screen w-screen bg-[url('./assets/Backdrop1.png')]">
    <navbarcustom />
    <div class="grid grid-flow-row">
      <h1 class="">About Us</h1>
      <h2 class="mx-[400px] p-3 border-4 bg-black relative top-20 text-medium">
        CircuitRunners Robotics is best known as a nonprofit FIRST robotics
        organization based at Wheeler High School. While we compete as FIRST
        Robotics Competition Team 1002, FIRST Tech Challenge Teams 1002 and
        11347, we are so much more than that. We have been competing and
        spreading STEM in Marietta, Georgia and beyond since 2002. We seek to
        instill important values of engineering, business, and so much more to
        our members, our community, and the world to inspire and create
        innovators and future leaders necessary for advancing society. We have
        been competing for almost 20 years across FIRST Robotics Competition,
        VEX Robotics, FIRST Tech Challenge, BEST Robotics, and Zero Robotics.
        Hundreds of students have used their CircuitRunner experience to be the
        foundation for a strong STEM career. We have and continue to help teams
        from around the world become better through mentoring and competition,
        and we do our best to show students what is possible through a STEM
        education. But while we have almost two decades of experience under our
        belt, we are not quite finished yet – we aim to keep shooting higher and
        higher!
      </h2>
      <h2
        class="my-8 mx-[400px] p-3 border-4 bg-black relative top-20 text-medium"
      >
        All the way back in 2002, CircuitRunners Robotics joined the robotics
        community with a mission of giving high school students the best
        hands-on opportunities to begin a lifelong journey in the fields of
        Science, Technology, Engineering, and Math. Since then, CircuitRunners
        Robotics has become an integral part of the Georgia competition robotics
        community. We have always taken pride in our strong outreach base, our
        competitive spirit, and our tight-knit community that spans decades.
      </h2>

      <div class="my-24 mx-[400px] bg-black border-4 p-3">
        <p class="text-2xl text-bold">Follow Us on Social Media!</p>
        <p class="my-3"></p>
        <h1>
          <span v-on:click="gotofacebook" class="cyan">@circuitrunners</span> on
          Facebook
        </h1>
        <h1>
          <span v-on:click="gototwitter" class="cyan">@circuitrunners</span> on
          Twitter
        </h1>
        <h1>
          <span v-on:click="gotoinsta" class="cyan">@circuitrunners</span> on
          Instagram
        </h1>
      </div>
    </div>
    <FooterComp class="fixed bottom-0 w-screen" />
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

<!--https://quasar.dev/vue-components/menu-->
