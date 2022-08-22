<template>
  <footer class="bg-dark text-white text-center">
    <!-- Grid container -->
    <div class="container p-3 pb-0">
      <!-- Section: Social media -->
      <section>
        <!-- Linkedin -->
        <a
          class="btn text-white btn-floating m-1"
          target="_blank"
          href="https://linkedin.com/in/xtenzq"
          role="button"
          ><font-awesome-icon :icon="['fab', 'linkedin-in']"
        /></a>

        <!-- Github -->
        <a
          class="btn text-white btn-floating m-1"
          target="_blank"
          href="https://github.com/xtenzQ"
          role="button"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3">© 2022 Nikita Rusetskii</div>
    <!-- Copyright -->
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
};
</script>
<style></style>
