export interface Ticket {
    pin: boolean;
    desc: string;
    hours: number;
  }
  
  export interface PeopleTime {
    name: string;
    role: string;
    times: Array<Ticket>;
  }
  