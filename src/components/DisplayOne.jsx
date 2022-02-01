import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";


const DisplayOne = () => {

    const { id } = useParams(); // params is what we passed into the route

    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            // .then(res => console.log("response for one ninja", res.data.results))   ---not allowing me to use both .thens, don't understand why
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err, "there's an error in my console"))
    }, []); // need empty array in useEffect so it doesn't continue to call the function

    return (
        <div>
            <h1> Hello product</h1>
            {/* <p>Id: {id}</p>     to check and see if id is working */}
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>

    )

}





export default DisplayOne;