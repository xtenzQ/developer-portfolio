<template>
  <footer class="bg-dark text-white text-center">
    <!-- Grid container -->
    <div class="container p-3 pb-0">
      <!-- Section: Social media -->
      <section>
        <!-- Linkedin -->
        <icon-link
          v-for="link in links"
          :key="link.id"
          :url="link.url"
          :icon="link.icon"
          class="text-white"
        />
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3">© {{ copyright }}</div>
    <!-- Copyright -->
  </footer>
</template>
<script>
import IconLink from "../reusable/IconLink.vue";
export default {
  props: ["links", "copyright"],
  components: {
    IconLink,
  },
  name: "AppFooter",
};
</script>
<style></style>
