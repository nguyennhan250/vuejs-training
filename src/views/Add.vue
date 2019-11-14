<template>
  <div>
    <input type="text" v-model="item.task">
    <button @click="addItem">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        task: null,
        status: false
      },
      items: this.$store.state.items
    };
  },
  methods: {
    addItem() {
      this.items.push(this.item);
      this.$store.commit("add", this.items);
      // this.item.task = null;
    }
  }
};
</script>
