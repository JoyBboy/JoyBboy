import { useState } from "react";
import "./App.css";

function ListGroup() {
  const items = [" rabat", " casa", " tanger", " sale"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const myStyle = {
    padding: "40px 0 0 0",
    color: "#eee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <h1 style={myStyle}>List</h1>
      {items.length === 0 && <p>no item found</p>}
      {/*if our condition is true the result will be paragraph element */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
