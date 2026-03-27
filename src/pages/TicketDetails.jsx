import { useParams } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";

const TicketDetails = ({ tickets }) => {
    const { id } = useParams();
    const ticket = tickets.find((t) => t.id === Number(id));

    

    if (!ticket) {
        return <p className="empty-message">Ticket not found.</p>;
    }

    return (
        <>
            <h2>Ticket Details</h2>
            <p><strong>ID:</strong> {ticket.id}</p>
            <p><strong>Title:</strong> {ticket.title}</p>
            <p><strong>Description:</strong> {ticket.description}</p>
            <p>
                <strong>Status:</strong> <StatusBadge status={ticket.status} />
            </p>
        </>
    );
};

export default TicketDetails;