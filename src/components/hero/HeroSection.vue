<template>
  <hero-container>
    <template v-slot:picture><hero-image :src="pic" /></template>
    <hero-text delay="200">
      <template v-slot:welcome><slot name="welcome"></slot></template>
      <slot></slot>
      <template v-slot:buttons>
        <slot name="buttons"></slot>
      </template>
    </hero-text>
  </hero-container>
</template>
<script>
import HeroContainer from "./HeroContainer.vue";
import HeroText from "./HeroText.vue";
import HeroImage from "./HeroImage.vue";

export default {
  name: "HeroSection",
  props: ["pic"],
  components: {
    HeroText,
    HeroImage,
    HeroContainer,
  },
};
</script>
<style></style>
