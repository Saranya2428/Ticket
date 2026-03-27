
import React, { useState } from "react";

const TicketForm = ({ addTicket }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("open");

  const error = title.trim() === "" ? "Title is required" : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    addTicket({ title, description, status });
    setTitle("");
    setDescription("");
    setStatus("open");
  };

  return (
    <form onSubmit={handleSubmit} className="create-ticket">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ticket Title"
        required
      />
      {error && <span style={{ color: "red" }}>{error}</span>}

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="closed">Closed</option>
      </select>

      <button type="submit">+ Create Ticket</button>
    </form>
  );
};

export default TicketForm;
