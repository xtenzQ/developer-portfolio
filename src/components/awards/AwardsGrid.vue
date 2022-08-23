<template>
  <base-container title="Awards">
    <single-award v-for="award in awards" :key="award.id" :award="award" />
  </base-container>
</template>
<script>
import SingleAward from "./SingleAward.vue";
import BaseContainer from "../reusable/BaseContainer.vue";

export default {
  name: "AwardsGrid",
  props: ["awards"],
  components: {
    SingleAward,
    BaseContainer,
  },
};
</script>
<style lang=""></style>
