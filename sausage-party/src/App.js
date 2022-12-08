import { useState, useEffect } from "react";
import axios from "axios";

import './App.css';

const App = () => {
  const [name, setName] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [Image, setImage] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFoodItemhange = (event) => {
    setFoodItem(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

}
  

export default App;
