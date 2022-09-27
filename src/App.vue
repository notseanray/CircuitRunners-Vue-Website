<template class="App">
  <Navbar />
  <router-view />
  <FooterComp />
</template>

<script>
import navbarcustom from './components/navbarcustom.vue';
import FooterComp from './components/FooterComp.vue';
export default {
    components: {
        Navbar: navbarcustom,
        FooterComp: FooterComp,
    },
}
</script>
