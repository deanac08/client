import React, {useState, useEffect} from "react";
import axios from "axios";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'


const AllProducts = () => {

    const [productList, setProductList] = useState([]); //this is where we will set the info in our DB

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
    axios.get('http://localhost:8000/api/products')
    .then(res => {setProductList(res.data.results)}) // 
    .catch(err => console.log(err, 'error'))
    }, [gone]);

    return (
        <div>
            <h1>All Products:</h1>
            {productList.map((productObj, i) =>{  // here we are mapping through our array of objects set on line 7
                return (
                    <div key={productObj._id}>
                        <div> {
                            //Link below takes us to the specific product that is clicked on
                            }
                            <h3><Link to={`/products/${productObj._id}`}>{productObj.title}</Link></h3>   
                        </div>
                    <button className="btn mt-3" onClick={() =>deleteHandler(productObj._id)}>DELETE</button>
                    <button className="btn mt-3">Edit</button>
                    </div>
                )
            })}
        </div>
    )
}



export default AllProducts;