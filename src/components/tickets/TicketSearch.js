export const TicketSearch = ({
  setterFunction
}) => {
  console.log(window.globalCount++);
  return <div>
            <input onChange={changeEvent => {
      setterFunction(changeEvent.target.value);
    }} type="text" placeholder="Enter search terms" />
        </div>;
};