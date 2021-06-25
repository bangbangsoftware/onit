<template>
  <v-container>
    <v-row class="day-row">
      <v-col class="mb-1 head controls"> Controls</v-col>
      <v-col class="mb-1 date head"> Date </v-col>
      <div
        v-for="(person, personIndex) in times[0].people"
        v-bind:key="personIndex"
      >
        <v-col class="mb-1 name-head">
          <div class="text-left">
            {{ person.name }}
          </div>
          <div class="role">({{ person.role }})</div>
        </v-col>
      </div>
    </v-row>
    <v-row v-for="(day, index) in times" v-bind:key="index">
      <div class="day-row">
        <v-col class="mb-1 but-grid">
          <v-btn
            class="small-but"
            x-small
            @click="allDayUp(index)"
            elevation="2"
            fab
            icon
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn
            class="small-but"
            x-small
            @click="allDayDown(index)"
            elevation="2"
            fab
            icon
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn
            class="small-but"
            x-small
            @click="zeroDay(index)"
            elevation="2"
            fab
            >0
          </v-btn>
        </v-col>

        <v-col class="date mb-1">
          {{ day.date | date("iii dd MMMM yyyy") }}
        </v-col>

        <div
          v-for="(person, peopleIndex) in day.people"
          v-bind:key="peopleIndex"
        >
          <v-col class="mb-1 col-width">
            <v-text-field
              label="Hours"
              type="number"
              v-model="times[index].people[peopleIndex].hours"
            ></v-text-field>
          </v-col>
        </div>
      </div>
    </v-row>
    <v-row>
      <div class="total-row">
        <v-col class="mb-1 controls">
          <v-btn class="left-22" x-small @click="addDay()" elevation="2" fab icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-col>
        <v-col class="date mb-1">Total Hours</v-col>
        <div
          v-for="(person, personIndex) in times[0].people"
          v-bind:key="personIndex"
        >
          <v-col class="col-width mb-1 head">
            {{ total(person.name) }}
          </v-col>
        </div>
        <v-col class="col-width mb-1 head">
          {{ grandTotal() }}
        </v-col>
      </div>
    </v-row>
    <v-row>
      <div class="total-row">
        <v-col class="mb-1 controls"> </v-col>
        <v-col class="date mb-1">Total Days</v-col>
        <div
          v-for="(person, personIndex) in times[0].people"
          v-bind:key="personIndex"
        >
          <v-col class="col-width mb-1 head">
            {{ total(person.name, true) }}
          </v-col>
        </div>
        <v-col class="col-width mb-1 head">
          {{ grandTotal(true) }}
        </v-col>
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { dateFilter } from "vue-date-fns";
import { addDays, differenceInDays } from "date-fns";
import "./days.css";

export interface PersonHour {
  name: string;
  role: string;
  hours: number;
}

export interface PeopleDay {
  date: Date;
  people: PersonHour[];
}

const DEFAULT_HOURS = 7.5;
const DEFAULT_PEOPLE = [
  { name: "Mick", hours: DEFAULT_HOURS + 0, role: "Developer" },
  { name: "Ben", hours: DEFAULT_HOURS + 0, role: "Developer" },
  { name: "Ethan", hours: DEFAULT_HOURS + 0, role: "Developer" },
  { name: "Michelle", hours: DEFAULT_HOURS + 0, role: "Tester" },
];
const DEFAULT_DAY_QTY = 10;

const addDay = (last: PeopleDay, defaultHours: number) => {
  const newRow = last.people.map((person: any) => {
    person.hours = defaultHours + 0;
    return person;
  });
  const add = last.date.getDay() > 4 ? 8 - last.date.getDay() : 1;
  const date = addDays(last.date, add);
  const people = JSON.parse(JSON.stringify(newRow));
  return { date, people };
};

const createTimes = (
  dateOne = new Date(),
  dateTwo = addDays(new Date(), 14),
  people = DEFAULT_PEOPLE,
  defaultHours: number
) => {
  const times: any = [];
  1;
  const maxDaysCalc = differenceInDays(dateOne, dateTwo);
  const maxDays = maxDaysCalc > 0 ? maxDaysCalc : maxDaysCalc * -1;
  localStorage.setItem("DAY_QTY", maxDays + "");
  const date = dateTwo > dateOne ? dateOne : dateTwo;

  for (let index = 0; index < maxDays; index++) {
    if (index == 0) {
      times.push({ date, people });
    } else {
      times.push(addDay(times[index - 1], defaultHours));
    }
  }
  return times;
};

const initTimes = (people: any, dateRange: any, defaultHours: number) => {
  try {
    const dateOne = new Date(dateRange[0]);
    const dateTwo = new Date(dateRange[1]);
    const times = createTimes(dateOne, dateTwo, people, defaultHours);
    return times;
  } catch (err) {
    console.error(err);
  }
  return [];
};

export default Vue.extend({
  name: "days",
  filters: {
    date: dateFilter,
  },
  props: ["people", "dateRange", "defaultHours"],
  methods: {
    addDay: function () {
      const last = this.times[this.times.length - 1];
      const next = addDay(last, this.hoursPerDay);
      this.times.push(next);
    },
    allZero: function (index: number) {
      const blank = this.times[index].people.find(
        (day: PersonHour) => day.hours > 0
      );
      return blank == null;
    },
    zeroDay: function (index: number) {
      const newValue = this.allZero(index) ? this.hoursPerDay : 0;
      const blanked = this.times[index].people.map((day: PersonHour) => {
        day.hours = newValue;
        return day;
      });
      this.times[index].people = blanked;
    },
    allDayDown: function (index: number) {
      const blanked = this.times[index].people.map((day: PersonHour) => {
        day.hours = day.hours - 1;
        return day;
      });
      this.times[index].people = blanked;
    },
    allDayUp: function (index: number) {
      const blanked = this.times[index].people.map((day: PersonHour) => {
        day.hours = day.hours + 1;
        return day;
      });
      this.times[index].people = blanked;
    },
    grandTotal: function (days = false) {
      const people = this.times[0].people;
      const hours = people
        .map((personHour: PersonHour) => this.total(personHour.name))
        .reduce((a: number, b: number) => a + b);
      const result = days ? hours / this.hoursPerDay : hours;
      const timeBudget = parseInt(result);
      if (!days) {
        this.$emit("times-changed", { times: this.times, timeBudget });
      }
      return timeBudget;
    },
    total: function (name: string, days = false) {
      const hours = this.times.map((day: PeopleDay) => {
        const person: PersonHour | undefined = day.people.find(
          (personHour: PersonHour) => personHour.name === name
        );
        if (person == undefined) {
          return 0;
        }
        if (typeof person.hours == "number") {
          return person.hours;
        }
        const value = person.hours + ""; // typescript
        if (value.trim().length == 0) {
          return 0;
        }
        try {
          return parseInt(value);
        } catch (err) {
          console.error(err);
        }
        return 0;
      });
      const total = hours.reduce(
        (hours: number, runningTotal: number) => hours + runningTotal
      );
      const result = days ? total / this.hoursPerDay : total;
      return parseInt(result);
    },
  },
  data: function () {
    const hoursPerDay = this.defaultHours
      ? parseFloat(this.defaultHours)
      : DEFAULT_HOURS;
    const times = initTimes(this.people, this.dateRange, hoursPerDay);
    const name = "";
    const role = "";
    const dialog = false;
    return { times, name, role, dialog, hoursPerDay };
  },
});
</script>
