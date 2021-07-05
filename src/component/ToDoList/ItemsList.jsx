import React from "react";
import "./ItemsList.css";

const ItemsList = (props) => {
  return (
    <div className="list-item">
      <i
        className="fas fa-times"
        onClick={() => {
          props.onDelete(props.id);
        }}
      />
      <li>{props.items}</li>
    </div>
  );
};

export default ItemsList;
