import React from 'react';
import SmallCard from './SmallCard';
import { useState, useEffect} from 'react'
/*  Cada set de datos es un objeto literal */


function ContentRowProducts(){

    const [productsState, setProducts] = useState([]); 
    const [usersState, setUsers] = useState([]); 
    useEffect (() => {

    const products = fetch('http://localhost:3080/api/products').then(response => response.json());  
    const users = fetch('http://localhost:3080/api/users').then(response => response.json());
    Promise.all([products, users])
    .then(([products, users])=>{
        setProducts(products)
        setUsers(users)
    })
    .catch((error) => console.log(error))}
    , [])



    let productsInDB = {
        title: 'Productos disponibles',
        color: 'primary', 
        cuantity: productsState.count,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Accesories quantity  --> */
    
    let categoriesQuantity = {
        title:'Cantidad de categorías', 
        color:'success', 
        cuantity: '2',
        icon:'fa-award'
    }
    
    /* <!-- Skates quantity --> */
    
    let usersQuantity = {
        title:'Cantidad de usuarios' ,
        color:'warning',
        cuantity:usersState.count,
        icon:'fa-user-check'
    }
    
    let cartProps = [productsInDB, categoriesQuantity, usersQuantity];

    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
        }

export default ContentRowProducts;