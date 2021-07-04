<template>
  <div>
    <div class="people-row">
      <v-col class="col-width mb-1 head">{{ person.name }}</v-col>

      <v-checkbox hint="Remember this" v-model="pin"></v-checkbox>

      <v-text-field v-model="desc" label="Ticket / Meeting etc"></v-text-field>

      <v-text-field v-model="hours" type="number" label="Hours"></v-text-field>

      <v-btn class="butt" v-on:click="add()" x-small elevation="2" fab icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>

    </div>

    <div
      class="people-row"
      v-for="(personTime, personTimeIndex) in person.times"
      v-bind:key="personTimeIndex"
    >
      <span></span>
      <v-checkbox hint="Remember this" v-model="personTime.pin"></v-checkbox>
      <v-text-field
        v-model="personTime.desc"
        label="Ticket / Meeting etc"
      ></v-text-field>
      <v-text-field
        v-model="personTime.hours"
        type="number"
        label="Hours"
      ></v-text-field>
      <v-btn
        class="butt"
        v-on:click="take(person.name, personTimeIndex)"
        x-small
        elevation="2"
        fab
        icon
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <div></div>
    </div>
    <div class="people-row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="total">Total</div>
      <div class="total">{{ total(person.times) }}</div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Ticket } from "./doit.types";
import "./peopleTicket.css";
import total from "./totals";

export default Vue.extend({
  name: "people-ticket",
  props: ["person"],
  methods: {
    add: function () {
      const desc = "" + this.desc;
      const pin = this.pin ? true : false;
      const hours = 0 + this.hours;
      if (!desc || hours <= 0) {
        // No data.... toast?
        return;
      }

      const ticket: Ticket = { pin, desc, hours };
      this.person.times.push(ticket);
      const hi = desc.indexOf("-");
      const prefix = hi > -1 ? desc.substring(0, hi + 1) : "";
      this.desc = prefix;
      this.pin = false;
      this.hours = 0;
    },
    take: function (name: string, index: number) {
      this.person.tickets.splice(index);
    },

    total: function (tickets: Array<Ticket>) {
      return total(tickets);
    },
  },
  data: function () {
    const desc = "";
    const pin = false;
    const hours = 0;
    return { desc, pin, hours };
  },
});
</script>