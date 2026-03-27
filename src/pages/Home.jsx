import React from "react";
import { useTickets } from "../context/TicketContext.jsx";
import TicketCard from "../components/TicketCard";

const Home = () => {
  const { tickets, deleteTicket, updateStatus } = useTickets();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Support Tickets</h1>
      {tickets.length === 0 ? (
        <p>No tickets yet</p>
      ) : (
        tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            deleteTicket={deleteTicket}
            updateStatus={updateStatus}
          />
        ))
      )}
    </div>
  );
};

export default Home;
