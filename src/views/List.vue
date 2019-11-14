<template>
  <div>
    <ul>
      <li v-for="item in items">
        <ContentComp :data="item"></ContentComp>
      </li>
    </ul>
  </div>
</template>

<script>
import ContentComp from "../layouts/ContentComp.vue";
export default {
  data() {
    return {
      items: this.$store.state.items
    };
  },
  components: {
    ContentComp
  }
};
</script>
