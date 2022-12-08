import { useState, useEffect } from "react";
import axios from "axios";


import "./App.css";
import Update from './components/update.js'

const App = () => {
  const [name, setName] = useState("");
  const [foodItem, setFoodItem] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const [eaten, setEaten] = useState(false);
  const [characters, setCharacters] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFoodItemChange = (event) => {
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

  const handleCharacterSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(gender);
    console.log(foodItem);
    console.log(image);
    console.log(eaten);

    axios
      .post("http://localhost:3000/sparty", {
        name: name,
        gender: gender,
        item: foodItem,
        image: image,
        eaten: eaten,
      })
      .then(() => {
        axios.get("http://localhost:3000/sparty").then((response) => {
          setCharacters(response.data);
        });
      });
  };

  const handleDelete = (charData) => {
    axios.delete(`http://localhost:3000/sparty/${charData._id}`).then(() => {
        axios.get('http://localhost:3000/sparty').then((response) => {
            setCharacters(response.data)
            console.log(response.data);
        })
    })
}

  useEffect = (() => {
    axios.get("http://localhost:3000/sparty").then((response) => {
      console.log(response.data);
      setCharacters(response.data);
  }) 
}, [])

  return (
    <div>
      <h1 className="glow"><span>Sausage Party</span></h1>

      <form onSubmit={handleCharacterSubmit}>
        Name
        <br />
        <input type="text" onChange={handleNameChange} />
        <br />
        Gender
        <br />
        <input type="text" onChange={handleGenderChange} />
        <br />
        item
        <br />
         <input type="text" onChange={handleFoodItemChange} />
        <br />
        Image 
        <br />
        <input type="text" onChange={handleImageChange} />
        <br />
        Eaten 
        <br />
        <input type="checkbox" onChange={handleEatenChange} />
        <br />
        <input className='add' type="submit" value="Add Member" />
      </form>

      {characters.map((character) => {
        return (
          <li>
            <div className="card">
              <img src={character.image}></img>
              <br />
              <hr className="dotted"></hr>

              <div className="container">
                Name: {character.name}
                <br />
                <hr class="dotted"></hr>
                Gender: {character.gender}
                <br />
                <hr class="dotted"></hr>
                Item: {character.item}
                <br />
                <hr class="dotted"></hr>
                Eaten
                <br/>
                {character.eaten ? (
                  <input type="checkbox" checked></input>
                ) : (
                  <input type="checkbox"></input>
                )}
                <br />
                <button className='delete' onClick={() => handleDelete(character)}>Delete</button>
              </div>

              <Update handleDelete={handleDelete} character={character}
                setCharacters={setCharacters}  />
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default App;
