import { useState, useEffect } from "react";
import axios from "axios";

import './App.css';

const App = () => {
  const [name, setName] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [Image, setImage] = useState("");
  const [gender, setGender] = useState("")
  const [eaten, setEaten] = useState(false)
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

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEatenChange = (event) => {
    setEaten(event.target.checked);
  };

  const handleNewCharacterSubmit = (event) => {
    event.preventDefault();
  }
}
  

export default App;
