import React, {useState, useEffect} from "react";
import axios from "axios";
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'


const AllProducts = () => {

    const [productList, setProductList] = useState([]); //this is where we will set the info in our DB


    // const detailsHandler = (e) => {
    //     e.preventDefault();
    //     axios.get('http://localhost:8000/api/products/:id')
    //     .then(res => console.log(res, 'we clicky the details'))
    //     .catch(err => console.log(err, 'error'))
    // }


    // const deleteHandler = (deleteId) => {
    //     e.preventDefault();
        
    //     axios.delete(`http://localhost:8000/api/products/delete/:id`)
    //     .then(res => console.log(res, "deleted"))
    //     .catch(err => console.log(err))
    // }

    useEffect(() => {
    axios.get('http://localhost:8000/api/products')
    .then(res => {setProductList(res.data.results)}) // 
    .catch(err => console.log(err, 'error'))
    }, []);
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
                    <button>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}



export default AllProducts;