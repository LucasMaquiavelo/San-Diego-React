import React from 'react'
// import fetch from 'node-fetch'
import { useState, useEffect} from 'react'

function Home() {

	const [productsState, setProducts] = useState([]); 
	
   useEffect (() => {
     fetch('http://localhost:3080/api/products',{
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        // },
        // mode: 'no-cors'
    })    
    .then(response => response.json())
    .then(data => setProducts (data.products))
    .catch((error) => console.log(error))
    }
    , [])


  return (
    <div>
        <ul>
        {productsState.map( (movie,i) => 
         <li key={`movie ${i}`}>{movie.name}</li>
        )}
        </ul>
             
    </div>
  )
}


export default Home