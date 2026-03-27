import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

const TicketCard = ({ ticket, deleteTicket, updateStatus }) => {
  return (
    <motion.div
      className="ticket-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Status: <StatusBadge status={ticket.status} /></p>

      <div style={{ marginTop: "10px" }}>
        <button className="btn-success" onClick={() => updateStatus(ticket.id)}>Change Status</button>
        <button className="btn-danger" onClick={() => deleteTicket(ticket.id)}>Delete</button>
        <Link to={`/ticket/${ticket.id}`}>
          <button className="btn-primary">View</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default TicketCard;
<command />