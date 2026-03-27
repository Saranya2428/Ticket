import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <h2>CSTP Portal</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">Create Ticket</Link>
            </div>
        </nav>
    );
};

export default Navbar;