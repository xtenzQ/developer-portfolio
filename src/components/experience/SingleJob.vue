<template>
  <li class="timeline-item">
    <div class="timeline-info">
      <span>{{ job.date }}</span>
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h5 class="timeline-title mb-md-3">
        {{ job.position }} @
        <a v-if="job.url" :href="job.url" target="_blank">{{ job.company }}</a>
        <a v-if="!job.url">{{ job.company }}</a>
      </h5>
      <ul data-aos="fade-left">
        <li v-for="desc in job.description" :key="desc.id">
          {{ desc.description }};
        </li>
      </ul>
    </div>
  </li>
</template>
<script>
export default {
  name: "SingleJob",
  props: ["job"],
};
</script>
<style></style>
