<template>
  <div class="col-10 col-sm-7 col-lg-7">
    <img
      :alt="alt"
      class="d-block mx-lg-auto img-fluid"
      loading="lazy"
      :src="require(`@/assets/images/${src}`)"
    />
  </div>
</template>
<script>
export default {
  props: ["src", "alt"],
};
</script>
<style></style>
