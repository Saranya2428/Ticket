import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";
import { TicketProvider } from "./context/TicketContext";

function App() {
  return (
    <TicketProvider>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateTicket />} />
            <Route path="/ticket/:id" element={<TicketDetails />} />
          </Routes>
          
        </div>
      </Router>
    </TicketProvider>
  );
}

export default App;
