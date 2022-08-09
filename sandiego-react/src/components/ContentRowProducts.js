import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Productos disponibles',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Accesories quantity  --> */

let accesoriesQuantity = {
    title:' Accesorios', 
    color:'success', 
    cuantity: '2',
    icon:'fa-award'
}

/* <!-- Skates quantity --> */

let skatesQuantity = {
    title:'Skates' ,
    color:'warning',
    cuantity:'5',
    icon:'fa-user-check'
}

let cartProps = [productsInDB, accesoriesQuantity, skatesQuantity];

function ContentRowProducts(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;