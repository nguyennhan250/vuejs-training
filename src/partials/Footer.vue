<template>
  <div class="app">
    <footer class="inline-flex">
      <FooterComp :data="all"></FooterComp>
      <FooterComp :data="borrow"></FooterComp>
      <FooterComp :data="paid"></FooterComp>
      <FooterComp :data="add"></FooterComp>
    </footer>
  </div>
</template>

<script>
import FooterComp from "../layouts/FooterComp.vue";
export default {
  data() {
    return {
      all: {
        link: "list",
        url: "list.png",
        title: "All"
      },
      borrow: {
        link: "todo",
        url: "list-view.png",
        title: "ToDo"
      },
      paid: {
        link: "done",
        url: "todo-list.png",
        title: "Done"
      },
      add: {
        link: "add",
        url: "add-list.png",
        title: "Add"
      }
    };
  },
  components: {
    FooterComp
  }
};
</script>

<style scoped>
.inline-flex {
  display: inline-flex;
}
</style>
