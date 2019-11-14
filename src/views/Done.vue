<template>
  <div>
    <ul>
      <!-- <li v-for="item in items">{{ item.task | done(item.status) }}</li> -->
      <li v-for="item in items" v-if="item.status">
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
  },
  filters: {
    done: function(task, status) {
      return status ? null : task;
    }
  }
};
</script>
