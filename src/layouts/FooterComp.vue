<template>
  <div class="p-5">
    <router-link :to="{name: data.link}">
      <button class="w-100">
        <img :src=" resolve_img_url(data.url)" alt="" width="20px">
        {{ data.title }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
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
