import {useState, useEffect} from 'react'
import axios from 'axios'

const DeleteFunction = () => {
    // =========================
    //           HOOK
    // =========================

    const [newChar, setNewChar] = useState('')


    const handleDelete = (charData) => {
        axios.delete(`http://localhost:3000/sparty/${charData._id}`).then(() => {
            axios.get('http://localhost:3000/sparty').then((response) => {
                setNewChar(response.data)
            })
        })
    }
    return (
        <button onClick={handleDelete}>DELETE</button>
    )
}

export default DeleteFunction