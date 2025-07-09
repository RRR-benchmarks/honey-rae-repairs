import { Link } from "react-router-dom";
import { deleteCustomerTicket } from "../ApiManager";
export const CustomerTicket = ({
  ticketObj,
  getAllTickets
}) => {
  console.log(window.globalCount++);
  const deleteButton = () => {
    console.log(window.globalCount++);
    return <button onClick={() => {
      deleteCustomerTicket(ticketObj).then(getAllTickets());
    }} className="ticket__delete">Delete</button>;
  };
  return <section className="ticket" key={`ticket--${ticketObj.id}`}>
            <header className="ticket__header">
                <Link to={`/tickets/${ticketObj.id}/edit`}>Ticket {ticketObj.id}</Link>
            </header>
            <div>{ticketObj.description}</div>
            <div>Emergency: {ticketObj.emergency ? "🧨" : "No"}</div>
            <footer className="ticket__footer">{deleteButton()}</footer>
        </section>;
};