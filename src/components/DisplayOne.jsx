import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";


const DisplayOne = () => {

    const { id } = useParams(); // params is what we passed into the route

    const [product, setProduct] = useState({});

    let gone = false;

    const deleteHandler = (deleteId) => {
        
        axios.delete(`http://localhost:8000/api/products/delete/${deleteId}`)
        .then(res => {
            console.log(res, "deleted")
            gone = !gone;
        })
        .catch(err => console.log(err, "errroororeoreoeroireohkjfdsgh"))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data.results);         // must return res in order to put 2 .thens or you can put information in an obj
                setProduct(res.data.results)
            })
            .catch(err => console.log(err, "there's an error in my console"))
    }, [gone]); // need empty array in useEffect so it doesn't continue to call the function

    return (
        <div>
            <h1> Hello product</h1>
            {/* <p>Id: {id}</p>     to check and see if id is working */}
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button className="btn mt-3" onClick={() =>deleteHandler(id)}>DELETE</button>
        </div>

    )

}





export default DisplayOne;