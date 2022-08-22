<template>
  <a
    class="btn text-white mr-md-2"
    href="{{ url }}"
    role="button"
    target="_blank"
    ><font-awesome-icon :icon="icon.split(' ')" class="me-2" /> {{ title }}</a
  >
</template>
<script>
export default {
  props: ["title", "url", "icon"],
};
</script>
<style></style>
