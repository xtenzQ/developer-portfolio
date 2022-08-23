<template>
  <a class="btn btn-floating m-1" target="_blank" :href="url" role="button"
    ><font-awesome-icon :icon="icon.split(' ')"
  /></a>
</template>
<script>
export default {
  props: ["url", "icon"],
};
</script>
<style></style>
