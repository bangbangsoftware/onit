<template>
  <div>
    <div class="fill-grid" v-if="showDays">
      <v-card class="mx-auto my-12">
        <v-card-title>What are the teams working hours?</v-card-title>
        <days
          v-on:times-changed="update($event)"
          v-bind:people="people"
          v-bind:defaultHours="defaultHours"
          v-bind:dateRange="dateRange"
        ></days>
      </v-card>
      <div class="gap-right">
        <v-card class="mx-auto my-12">
          <v-card-title>How are we busy?</v-card-title>
          <work v-bind:timeBudget="timeBudget" v-bind:times="times"></work>
        </v-card>
      </div>
    </div>
    <div v-else class="center">
      <v-card class="mx-auto my-3">
        <div>
          <v-card-title class="title"
            >Pick Date Range for the Sprint</v-card-title
          >
          <v-card-subtitle
            ><b>{{ dateRange[0] }}</b> to
            <b>{{ dateRange[1] }}</b></v-card-subtitle
          >

          <dates v-on:dates-picked="dates($event)"></dates>
        </div>
        <div class="d-hours"></div>
        <v-card-subtitle class="bold">The Team</v-card-subtitle>
        <v-row
          class="people-grid"
          v-for="(person, peopleIndex) in people"
          v-bind:key="peopleIndex"
        >
          <v-col>
            <v-btn x-small @click="drop(peopleIndex)" elevation="2" fab icon>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-col>
          <v-col class="name"> {{ person.name }} </v-col>
          <v-col class="left"> {{ person.role }} </v-col>
        </v-row>
        <v-row class="add-grid">
          <v-col class="add-but">
            <v-btn x-small @click="add()" elevation="2" fab icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
          <v-col class="name">
            <v-text-field label="Name*" v-model="name" required></v-text-field>
          </v-col>
          <v-col>
            <v-autocomplete
              required
              v-model="role"
              :items="['Developer', 'Tester']"
              label="Role*"
              class="role"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-card-actions v-if="ready()">
          <v-text-field
            type="number"
            v-model="defaultHours"
            label="Default Hours"
          ></v-text-field>
          <v-btn
            class="right-action"
            color="deep-purple lighten-2"
            text
            @click="done()"
            >Done</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Days from "@/components/days.vue";
import Dates from "./dates.vue";
import Work from "./work.vue";
import "./fill.css";

const DEFAULT_HOURS = 7.5;
const DEFAULT_PEOPLE = [
  { name: "Mick", hours: DEFAULT_HOURS + 0, role: "Developer" },
  { name: "Ben", hours: DEFAULT_HOURS + 0, role: "Developer" },
  { name: "Ethan", hours: DEFAULT_HOURS + 0, role: "Developer" },
  { name: "Michelle", hours: DEFAULT_HOURS + 0, role: "Tester" },
];

export default Vue.extend({
  name: "fill",
  components: {
    days: Days,
    dates: Dates,
    work: Work,
  },
  methods: {
    dates: function ($event: any) {
      this.dateRange = $event;
    },
    ready: function () {
      return this.dateRange.length == 2 && this.people.length > 0;
    },
    add: function () {
      const person = { name: this.name, role: this.role, hours: DEFAULT_HOURS };
      this.people.push(person);
      this.name = "";
      this.role = "";
    },
    drop: function (index: number) {
      this.people.splice(index);
    },
    done: function () {
      localStorage.setItem("defaultHours", "" + this.defaultHours);
      this.showDays = true;
    },
    update: function (update: any) {
      this.times = update.times;
      this.timeBudget = update.timeBudget;
    },
  },
  data: function () {
    const dhString = localStorage.getItem("defaultHours");
    const defaultHours = dhString ? parseFloat(dhString) : 7.5;
    return {
      showDays: false,
      dateRange: [],
      people: DEFAULT_PEOPLE,
      name: "",
      role: "",
      timeBudget: 0,
      defaultHours,
      times: [],
    };
  },
});
</script>
