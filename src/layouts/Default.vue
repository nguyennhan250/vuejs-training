<template>
  <div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../partials/Header";
import Footer from "../partials/Footer";
export default {
  data() {
    var items = [
      {
        task: "task1",
        status: true
      },
      {
        task: "task2",
        status: false
      }
    ];
    this.$store.commit("add", items);
    return {};
  },
  components: {
    Header,
    Footer
  },
  methods: {},
  watch: {
    add() {
      this.$store.commit("add", this.items);
    }
  }
};
</script>
