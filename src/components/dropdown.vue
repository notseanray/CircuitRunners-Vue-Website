<template>
  <div class="group top-10 text-white">
    <p class="absolute visible group-hover:invisible">Competition Teams</p>
    <a class="absolute grid top-3 grid-flow-row">
      <button v-on:click="toFRC" class="invisible group-hover:visible">
        FRC 1002
      </button>
      <button v-on:click="toFTC1002" class="invisible group-hover:visible">
        FTC 1002
      </button>
      <button v-on:click="toFTC11347" class="invisible group-hover:visible">
        FTC 11347
      </button>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    toFRC() {
      this.$router.push("/frc1002");
    },
    toFTC1002() {
      this.$router.push("/ftc1002");
    },
    toFTC11347() {
      this.$router.push("/ftc11347");
    },
  },
};
</script>
