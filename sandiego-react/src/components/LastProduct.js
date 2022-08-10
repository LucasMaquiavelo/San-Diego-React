import React from 'react';
import imagenFondo from '../assets/images/holder-babylon.png';
import { useState, useEffect} from 'react'

function LastProduct(){

    
	const [productsState, setProducts] = useState([])

    const lastProduct = productsState

    useEffect (() => {
      fetch('http://localhost:3080/api/products/18')    
     .then(response => response.json())
     .then(data => setProducts(data.product))
     .catch((error) => console.log(error))
    }
    , [])
 

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h3>{lastProduct.name}</h3>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Úlitmo producto agregado"/>
                    </div>
                    <p>{lastProduct.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProduct;
