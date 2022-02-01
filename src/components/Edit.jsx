import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const Edit = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');


    const onSubHandler = (e) => {
        
        axios.post('http://localhost:8000/api/products/new', {title, price, description})
        .then(res => console.log(res, "submitted"))
        .catch(err => console.log(err))

        console.log("Form submitted");
    }

    return(
        <form onSubmit={onSubHandler}>
            <div>
                <label>Title:</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            <div>
                <label>Price:</label><br/>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
            </div>
            <div>
                <label>Description:</label><br/>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
            <button>Create</button>
        </form>
    )
}

export default Edit;