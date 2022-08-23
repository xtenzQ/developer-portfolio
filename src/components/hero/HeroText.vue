<template>
  <div class="col-lg-5">
    <h1 class="display-5 fw-bold lh-1 mb-4">
      <slot name="welcome"></slot>
    </h1>
    <p class="lead mb-4">
      <slot></slot>
    </p>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["delay"],
};
</script>
<style lang=""></style>
