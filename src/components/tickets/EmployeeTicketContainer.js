import { memo } from "react";
import { useState } from "react";
import { EmployeeTicketList } from "./EmployeeTicketList";
import { TicketSearch } from "./TicketSearch";
export const TicketContainer = memo(() => {
  console.log(window.globalCount++);
  const [searchTerms, setSearchTerms] = useState("");
  return <>
        <TicketSearch setterFunction={setSearchTerms} />
        <EmployeeTicketList searchTermState={searchTerms} />
    </>;
});