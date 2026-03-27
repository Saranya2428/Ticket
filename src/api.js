// src/api.js
let ticketsDB = [
  { id: 1, subject: "Login Issue", description: "Cannot login", status: "Open" },
  { id: 2, subject: "Page Error", description: "Error on checkout", status: "Closed" },
];

export const fetchTickets = async () => {
  return new Promise((resolve) => setTimeout(() => resolve([...ticketsDB]), 500));
};

export const createTicket = async (ticket) => {
  return new Promise((resolve) => {
    const newTicket = { id: ticketsDB.length + 1, status: "Open", ...ticket };
    ticketsDB.push(newTicket);
    setTimeout(() => resolve(newTicket), 500);
  });
};

export const updateTicketStatus = async (id, status) => {
  return new Promise((resolve, reject) => {
    const ticket = ticketsDB.find((t) => t.id === id);
    if (!ticket) return reject("Ticket not found");
    ticket.status = status;
    setTimeout(() => resolve(ticket), 500);
  });
};