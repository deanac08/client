import React, { useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Form = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const history = useHistory();

    const onSubHandler = (e) => {
        
        axios.post('http://localhost:8000/api/products/new', {title, price, description})
        .then(res => console.log(res, "submitted"))
        .catch(err => console.log(err))

        console.log("Form submitted");
        // history.push('/')
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

export default Form;