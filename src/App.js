import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HouseSelect from "./components/ChooseHouse/HouseSelect";
import Home from "./components/Home/Home";
import Homes from "./components/ChooseHouse/homes";

function App() {
  const [rooms, setRooms] = useState([]);
  // creates rooms in smart home
  const addRoom = (name, type, color) => {
    if (type.length === 0 || name.length === 0) {
      alert("Error, You need to choose Room Type and Name");
    } else if (type.length >= 1 && name.length >= 1) {
      setRooms([
        ...rooms,
        { name: name, type: type, color: color, products: [] },
      ]);
    }
  };

  //adds products to rooms
  const addProduct = (index, typeOfProduct) => {
    let temp = { condition: false, type: typeOfProduct };
    if (
      typeOfProduct === "stereo" &&
      rooms[index].products.filter((val) => val.type === "stereo").length > 0
    ) {
      alert("You can only add one stereo system");
    } else if (
      typeOfProduct === "Water Heater" &&
      rooms[index].type !== "Bathroom"
    ) {alert('Water Heater can only be added in Bathroom')
    } else if (rooms[index].products.length >= 5) {
      alert("The Room can contain only 5 products");
    } else if (rooms[index].products.length <= 5) {
      rooms[index].products.push(temp);
      setRooms([...rooms]);
    }
  };
  const changeCondition = (indexOfRoom, indexOfProduct) => {
    rooms[indexOfRoom].products[indexOfProduct].condition =
      !rooms[indexOfRoom].products[indexOfProduct].condition;
    setRooms([...rooms]);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Smart Home</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home rooms={rooms} />} />
          <Route path="/addroom" element={<HouseSelect addRoom={addRoom} />} />
          {rooms.map((val, index) => {
            return (
              <Route
                path={`Homes${val.name}`}
                element={
                  <Homes
                    addProduct={addProduct}
                    index={index}
                    name={val.name}
                    type={val.type}
                    changeCondition={changeCondition}
                    products={val.products}
                  />
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
