import React, { createContext, useState, useContext, useEffect } from "react";
import { getTickets, saveTickets } from "../utils/localStorage";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // simulate async load
    const loadTickets = async () => {
      const data = await Promise.resolve(getTickets());
      setTickets(data);
    };
    loadTickets();
  }, []);

  useEffect(() => {
    // simulate async save
    const persistTickets = async () => {
      await Promise.resolve(saveTickets(tickets));
    };
    persistTickets();
  }, [tickets]);

  const addTicket = async (ticket) => {
    const newTicket = { id: Date.now(), ...ticket };
    setTickets((prev) => [...prev, newTicket]);
    // await API call here if needed
  };

  const deleteTicket = async (id) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
    // await API call here if needed
  };

  const updateStatus = async (id) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status:
                t.status === "Open"
                  ? "In Progress"
                  : t.status === "In Progress"
                  ? "Closed"
                  : "Open",
            }
          : t
      )
    );
    // await API call here if needed
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, deleteTicket, updateStatus }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => {
  const ctx = useContext(TicketContext);
  if (!ctx) throw new Error("useTickets must be used within TicketProvider");
  return ctx;
};
