<script>
export default {
  name: "ProjectFilter",
  props: {
    select: {
      type: String,
      default: "projects",
      required: true,
    },
    selectOptions: {
      type: Array,
      default: () => ["Web Development", "Machine Learning"],
    },
  },
};
</script>

<template>
  <select
    @change="$emit('filter', $event.target.value)"
    :name="select"
    :id="select"
    class="form-select"
  >
    <option value class="text-sm sm:text-md">All Projects</option>
    <option
      v-for="option in selectOptions"
      :key="option"
      :value="option"
      class="sm:text-md"
    >
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
