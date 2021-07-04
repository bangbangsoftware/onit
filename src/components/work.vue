<template>
  <div>
    <v-row class="link">
      <v-text-field label="Ticket link"></v-text-field>
      <v-btn class="butt" v-on:click="reset()" elevation="2" text>
        Clear All
      </v-btn>
    </v-row>

    <div v-if="times[0]" class="people-lines">
      <div
        v-for="(personTicket, personIndex) in peopleTimes"
        v-bind:key="personIndex"
      >
        <people-ticket v-bind:person="personTicket"></people-ticket>
      </div>
      <br />
      <br />
      <div class="people-row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="total">Grand</div>
        <div class="total">{{ grandTotal() }}</div>
        <div></div>
      </div>
      <div class="people-row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="total">Continuity</div>
        <div class="total">{{ continuity() }}</div>
        <div></div>
      </div>
      <div class="gap"></div>
    </div>
  </div>
</template>

<script lang="ts">
import PeopleTicket from "./peopleTicket.vue";

import Vue from "vue";
import { Ticket, PeopleTime } from "./doit.types";
import total from "./totals";

import "./work.css";

const addAll = function (peopleTimes: Array<PeopleTime>) {
  let grand = 0;
  peopleTimes.forEach((personTime: PeopleTime) => {
    grand = grand + total(personTime.times);
  });
  return grand;
};

const storeThis = (peopleTimes: Array<PeopleTime>) => {
  localStorage.setItem("fill", JSON.stringify(peopleTimes));
};

export default Vue.extend({
  name: "work",
  components: { "people-ticket": PeopleTicket },
  props: ["times", "timeBudget"],
  methods: {
    grandTotal: function () {
      const grand = addAll(this.peopleTimes);
      return grand;
    },
    continuity: function () {
      storeThis(this.peopleTimes);
      const gt = addAll(this.peopleTimes);
      return this.timeBudget - gt;
    },
    reset: function () {
      this.peopleTimes = this.peopleTimes.map((peopleTime) => {
        const tickets = peopleTime.times.filter((ticket: Ticket) => ticket.pin);
        peopleTime.times = tickets;
        return peopleTime;
      });
    },
  },
  watch: {
    times: function (times) {
      const storedString = localStorage.getItem("fill");
      const defaultPerson = times[0].people.map((p) => {
        const name = p.name;
        const role = p.role;
        const times = new Array<Ticket>();
        return { name, role, times };
      });
      const storedMap = storedString
        ? JSON.parse(storedString)
        : this.peopleTimes;
      this.peopleTimes =
        storedMap && storedMap.length > 0 ? storedMap : defaultPerson;
    },
  },
  data: function () {
    const peopleTimes = new Array<PeopleTime>();
    return {
      peopleTimes,
    };
  },
});
</script>
