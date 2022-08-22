<template>
  <BaseContainer title="I work on...">
    <SingleSkill v-for="skill in skills" :key="skill.id" :skill="skill" />
  </BaseContainer>
</template>
<script>
import SingleSkill from "./SingleSkill.vue";
import skills from "../../data/skills";
import BaseContainer from "../reusable/BaseContainer.vue";

export default {
  name: "SkillsGrid",
  components: { SingleSkill, BaseContainer },
  data: () => {
    return {
      skills,
    };
  },
};
</script>
<style scoped></style>
