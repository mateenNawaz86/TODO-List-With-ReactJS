import React, { useState } from "react";
import Card from "../UI/Card";
import ItemsList from "./ItemsList";
import "./ToDoForm.css";

const ToDoForm = (props) => {
  const [inputValues, setInputValues] = useState();
  const [enteredItems, setEnteredItems] = useState([]);

  const inputChangeHandler = (event) => {
    setInputValues(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValues.trim().length > 0) {
      setEnteredItems((prevItems) => {
        return [...prevItems, inputValues];
      });
      setInputValues("");
    }
  };

  const itemDeleteHandler = (id) => {
    setEnteredItems((prevItems) => {
      return prevItems.filter((e, itemID) => {
        return itemID !== id;
      });
    });
  };
  return (
    <Card>
      <div className="item-container">
        <div className="heading">
          <h1>To do list</h1>
        </div>

        <div className="input-form">
          <form className="forms" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Add Items"
              onChange={inputChangeHandler}
              value={inputValues}
            />
            <button type="submit" className="btn">
              +
            </button>
          </form>
        </div>

        <ul>
          {enteredItems.map((inpItems, index) => {
            return (
              <ItemsList
                items={inpItems}
                key={index}
                id={index}
                onDelete={itemDeleteHandler}
              />
            );
          })}
        </ul>

        <p id='caption'>Mirani❤️</p>
      </div>
    </Card>
  );
};

export default ToDoForm;
