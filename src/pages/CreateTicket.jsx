import React from "react";
import TicketForm from "../components/Ticketform";
import { useTickets } from "../context/TicketContext.jsx";

const CreateTicket = () => {
  const { addTicket } = useTickets();
  return (
    <div className="p-5">
      <h2>Create New Ticket</h2>
      <TicketForm addTicket={addTicket} />
    </div>
  );
};

export default CreateTicket;
