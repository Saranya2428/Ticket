export const getTickets = () => {
    const tickets = localStorage.getItem("tickets");
    return tickets ? JSON.parse(tickets) : [];
};

export const saveTickets = (tickets) => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
};