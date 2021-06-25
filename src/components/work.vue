<template>
  <div>
    <v-row class="link">
      <v-text-field label="Ticket link"></v-text-field>
          <v-btn class="butt"
            v-on:click="reset()"
            elevation="2"
            text
          >
          Clear All
          </v-btn>

    </v-row>

    <div v-if="times[0]" class="people-lines">
      <div
        v-for="(person, personIndex) in times[0].people"
        v-bind:key="personIndex"
      >
        <div class="people-row">
          <v-col class="col-width mb-1 head">
            {{ person.name }}
          </v-col>
          <v-checkbox
            hint="Remember this"
            v-model="pins[person.name]"
          ></v-checkbox>
          <v-text-field
            v-model="descs[person.name]"
            label="Ticket / Meeting etc"
          ></v-text-field>
          <v-text-field
            v-model="hours[person.name]"
            type="number"
            label="Hours"
          ></v-text-field>
          <v-btn
            class="butt"
            v-on:click="add(person.name, person.role)"
            x-small
            elevation="2"
            fab
            icon
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <div></div>
        </div>

        <div v-if="peopleMap && peopleMap[person.name]">
          <div
            class="people-row"
            v-for="(personTime, personTimeIndex) in peopleMap[person.name]
              .times"
            v-bind:key="personTimeIndex"
          >
            <span></span>
            <v-checkbox
              hint="Remember this"
              v-model="personTime.pin"
            ></v-checkbox>
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
            <div class="total">{{ total(peopleMap[person.name].times) }}</div>
            <div></div>
          </div>
        </div>
      </div>
      <br>
      <br>
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
export interface Ticket {
  pin: boolean;
  desc: string;
  hours: number;
}

interface Pins {
  [key: string]: boolean;
}
interface Hours {
  [key: string]: number;
}
interface Descs {
  [key: string]: string;
}

interface PeopleMap {
  [key: string]: PeopleTime;
}

interface PeopleTime {
  name: string;
  role: string;
  times: Array<Ticket>;
}

import Vue from "vue";
import "./work.css";

const addAll = (tickets: Array<Ticket>) => {
  const all = tickets.reduce((total: Ticket, ticket: Ticket) => {
    const newTotalTicket = {
      hours: parseFloat(total.hours + "") + parseFloat(ticket.hours + ""),
      pin: false,
      desc: "",
    };
    return newTotalTicket;
  });
  return all.hours;
};

const addAllTotals = (peopleMap: PeopleMap) => {
  const keys = Object.keys(peopleMap);
  const totals = keys.map((key: string) => {
    const peopleTime: PeopleTime = peopleMap[key];
    const total = addAll(peopleTime.times);
    return parseFloat("" + total);
  });
  if (totals.length == 0) {
    return 0;
  }
  const grand = totals.reduce((t, a) => t + a);
  return grand;
};

const storeThis = (peopleMap: PeopleMap) => {
  localStorage.setItem("fill", JSON.stringify(peopleMap));
};

let storedMap = {};

export default Vue.extend({
  name: "work",
  props: ["times", "timeBudget"],
  methods: {
    add: function (name: string, role: string) {
      const key = name;

      const desc = "" + this.descs[key];
      const pin = this.pins[key] ? true : false;
      const hours = 0 + this.hours[key];
      if (!desc || hours <= 0) {
        // No data.... toast?
        return;
      }

      const found = this.peopleMap[key];
      const personTime = found
        ? found
        : { name, role, times: new Array<Ticket>() };
      const ticket: Ticket = { pin, desc, hours };
      personTime.times.push(ticket);
      this.peopleMap[key] = personTime;
      const hi = desc.indexOf("-");
      const prefix = hi > -1 ? desc.substring(0, hi + 1) : "";
      this.descs[key] = prefix;
      this.pins[key] = false;
      this.hours[key] = 0;
    },
    take: function (name: string, index: number) {
      const peopleTime: PeopleTime = this.peopleMap[name];
      const tickets = peopleTime.times;
      tickets.splice(index);
      this.peopleMap[name] = {
        name: peopleTime.name,
        role: peopleTime.role,
        times: tickets,
      };
    },
    total: function (tickets: Array<Ticket>) {
      return addAll(tickets);
    },
    grandTotal: function () {
      return addAllTotals(this.peopleMap);
    },
    continuity: function () {
      storeThis(this.peopleMap);
      const gt = addAllTotals(this.peopleMap);
      return this.timeBudget - gt;
    },
    reset: function () {
      const keys = Object.keys(this.peopleMap);
      keys.forEach((key: string) => {
        const peopleTime: PeopleTime = this.peopleMap[key];
        const tickets = peopleTime.times.filter((ticket: Ticket) => ticket.pin);
        peopleTime.times = tickets;
        this.peopleMap[key] = peopleTime;
      });
    },
  },
  watch: {
    times: function (newVal, oldVal) {
      const storedString = localStorage.getItem("fill");
      storedMap = storedString
        ? JSON.parse(storedString)
        : this.peopleMap
        ? this.peopleMap
        : {};
      this.peopleMap = storedMap;
    },
  },
  data: function () {
    const tickets = new Array<Ticket>();
    const pins: Pins = {};
    const hours: Hours = {};
    const descs: Descs = {};
    const peopleMap: PeopleMap = storedMap;
    return {
      tickets,
      pins,
      hours,
      descs,
      peopleMap,
    };
  },
});
</script>
