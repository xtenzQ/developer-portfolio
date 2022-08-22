<template lang="">
  <HeroSection id="hero" />
  <SkillsGrid id="skills" />
  <ExperienceTable id="edu-exp" />
  <AwardsGrid id="awards" />
  <ProjectsGrid id="projects" />
</template>
<script>
import HeroSection from "../components/hero/HeroSection.vue";
import SkillsGrid from "../components/skills/SkillsGrid.vue";
import ExperienceTable from "../components/experience/ExperienceTable.vue";
import AwardsGrid from "../components/awards/AwardsGrid.vue";
import ProjectsGrid from "../components/projects/ProjectsGrid.vue";

export default {
  name: "HomeView",
  data: () => {
    return {};
  },
  components: {
    HeroSection,
    SkillsGrid,
    ExperienceTable,
    AwardsGrid,
    ProjectsGrid,
  },
};
</script>
<style scoped></style>
