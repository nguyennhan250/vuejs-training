<template>
  <div>
    <p>Task: {{ data.task }}</p>
    <p>Status
      <input type="checkbox" name="status" id="status" v-model="data.status">
    </p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style scoped>
.p-5 {
  padding: 5px;
}
.w-100 {
  width: 100px;
}
.border {
  border: 1px solid black;
}
</style>
