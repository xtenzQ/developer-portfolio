<template>
  <span class="word"><slot></slot></span>
</template>
<script>
export default {
  name: "HiWord",
};
</script>
<style lang="scss" scoped>
.word {
  position: relative;
}

.word:after {
  background-color: #ededed;
  content: " ";
  height: 40%;
  position: absolute;
  left: 0;
  top: 65%;
  width: 90%;
  z-index: -1;
}
</style>
