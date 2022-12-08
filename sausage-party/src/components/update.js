import {useState, useEffect} from 'react'
import axios from 'axios'

const Update = (props) => {
    const [updateHandleNewName, setUpdateHandleNewName] = useState()
    const [updateHandleNewGender, setUpdateHandleNewGender] = useState()
    const [updatedHandleNewItem, setUpdatedHandleNewItem] = useState()
    const [updatedHandleNewImage, setUpdatedHandleNewImage] = useState()
    const [updatedHandleNewEaten, setUpdatedHandleNewEaten] = useState(false)

    const handleUpdateDescription = (charData) => {
        axios.put(`http://localhost:3000/sparty/${charData._id}`,
        {
            name: updateHandleNewName,
            gender: updateHandleNewGender,
            item: updatedHandleNewItem,
            image: updatedHandleNewImage,
            eaten: updatedHandleNewEaten
        }).then((response) => {
            axios.get('http://localhost:3000/sparty').then((response) => {
                props.setCharacters(response.data)
            })
        })
    }

    const updateName = (e) => {
        setUpdateHandleNewName(e.target.value)
    }

    const updateGender = (e) => {
        setUpdateHandleNewGender(e.target.value)
    }

    const updateItem = (e) => {
        setUpdatedHandleNewItem(e.target.value)
    }

    const updateImage = (e) => {
        setUpdatedHandleNewImage(e.target.value)
    }

    const updateEaten = (e) => {
        setUpdatedHandleNewEaten(e.target.checked)
    }

    return (
        <>
        <form onSubmit={() => {
            handleUpdateDescription(props.character)
        }}>
            <input onChange={updateName} defaultValue={props.character.name} /><br />
            <input onChange={updateGender} defaultValue={props.character.gender} /><br />
            <input onChange={updateItem} defaultValue={props.character.item} /><br />
            <input onChange={updateImage} defaultValue={props.character.image} /><br />
            <input onChange={updateEaten} defaultValue={props.character.eaten} /><br />
            <input type="submit" value="Update Character"/><br />
        </form>

        

        <li>
            {props.character.eaten ? (
                <h1>THIS SHOWS EATEN FOOD</h1>
            ) : (
                <>
                <h3>{props.character.name}</h3><br />
                <img src={props.character.image} /><br />
                <h4>{props.character.gender}</h4><br />
                <h4>{props.character.item}</h4><br />
                <h4>{props.character.eaten}</h4><br />
                </>   
            )}

            <button onClick={(e) => {
                props.handleDelete(props.character)
            }}>DELETE</button>
        </li>



        </>
    )
}

export default Update