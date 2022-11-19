import React from "react";
import { useState } from "react";
import AddProd from "./AddProd";
import "./homes.css";

export default function Homes(props) {
  // flag to set what to show
  const [flag, setFlag] = useState(false);
// function that changes what the user sees when entring a room
  const show = () => {
  
    if (flag === false) {
      return (
        <div id="addpro">
          <AddProd
            change={change}
            index={props.index}
            addProduct={props.addProduct}
          />
        </div>
      );
    } else{
      return (
        <button id="plus" onClick={change}>
          Add Product
        </button>
      );
    }
  };
// changes flag state
  const change = () => {
    setFlag(!flag);
  };
  

  return (
    <div id="home">
      <h3 style={{ color: "gray" }}>Room Name:{props.name}</h3>
      <h3 style={{ color: "dimgray" }}>Room Type:{props.type}</h3>

      {props.products.map((val, index) => {
        let condition = val.condition ? "green" : "red";

        return (
          <button
            id="product"
            onClick={() => {
              props.changeCondition(props.index, index);
            }}
            style={{ backgroundColor: condition }}
          >
            {val.type}
          </button>
        );
      })}
      {show()}
    </div>
  );
}
