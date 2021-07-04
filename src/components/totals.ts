import { Ticket, PeopleTime } from "./doit.types";

export default function (tickets: Array<Ticket>) {
    if (!tickets || tickets.length == 0) {
        return 0;
    }
    const all = tickets.reduce((total: Ticket, ticket: Ticket) => {
        const newTotalTicket = {
            hours: parseFloat(total.hours + "") + parseFloat(ticket.hours + ""),
            pin: false,
            desc: "",
        };
        return newTotalTicket;
    });
    return parseFloat(all.hours + "");
};