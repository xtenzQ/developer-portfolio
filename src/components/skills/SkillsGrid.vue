<template>
  <BaseContainer title="I work on...">
    <SingleSkill v-for="skill in skills" :key="skill.id" :skill="skill" />
  </BaseContainer>
</template>
<script>
import SingleSkill from "./SingleSkill.vue";
import BaseContainer from "../reusable/BaseContainer.vue";

export default {
  props: ["skills"],
  name: "SkillsGrid",
  components: { SingleSkill, BaseContainer },
};
</script>
<style scoped></style>
