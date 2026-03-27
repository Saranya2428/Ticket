const StatusBadge = ({ status }) => {
    const getStatusClass = () => {
        switch (status) {
            case "Open":
                return "status-open";
            case "In Progress":
                return "status-progress";
            case "Closed":
                return "status-closed";
            default:
                return "";
        }
    };

    return (
        <span className={getStatusClass()}>
            {status}
        </span>
    );
};

export default StatusBadge;