<template>
  <div>
    <v-date-picker v-on:change="picked()" range v-model="dates"></v-date-picker>
  </div>
</template>

<script>
import Vue from "vue";
import { addDays } from "date-fns";

const DEFAULT_DAY_QTY = 10;

export default Vue.extend({
  name: "dates",
  methods: {
    picked: function () {
      this.$emit("dates-picked", this.dates);
    },
  },
  data: function () {
    const today = new Date();
    const storedQty = localStorage.getItem("DAY_QTY");
    const qty = storedQty ? parseInt(storedQty) : DEFAULT_DAY_QTY;
    const end = addDays(today, qty);
    const date1 = today.toISOString().substr(0, 10);
    const date2 = end.toISOString().substr(0, 10);
    const dates = [date1, date2];
    this.$emit("dates-picked", dates);
    return { dates };
  },
});
</script>