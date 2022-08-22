<template>
  <base-container title="Awards">
    <single-award v-for="award in awards" :key="award.id" :award="award" />
  </base-container>
</template>
<script>
import awards from "../../data/awards";
import SingleAward from "./SingleAward.vue";
import BaseContainer from "../reusable/BaseContainer.vue";

export default {
  name: "AwardsGrid",
  components: {
    SingleAward,
    BaseContainer,
  },
  data: () => {
    return {
      awards,
    };
  },
};
</script>
<style lang=""></style>
