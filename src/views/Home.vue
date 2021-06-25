<template>
  <fill />
</template>

<script lang="ts">
import Vue from "vue";
import fill from "../components/fill.vue";

export default Vue.extend({
  name: "Home",

  components: {
    fill,
  },
});
</script>
