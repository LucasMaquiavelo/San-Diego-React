// import React, { useState, useEffect} from 'react';

// function SearchMovies(){

// 	const [moviesState, setMovies] = useState([]);

// 	// Credenciales de API	
// 		useEffect (() => {
// 		// Petición Asincrónica al montarse el componente
// 		const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
// 		const url = 'http://localhost:3080/api/products'
// 			fetch(
// 				// corsAnywhere +
// 				 url
// 				//  , {
// 			// 	method: 'GET',
// 			// 	headers: new Headers({
// 			// 		'Content-Type': 'application/json',
// 			// 		'Access-Control-Allow-Origin': '*',
// 			// 	}),
// 			// }
// 			) 
// 				.then(response => response.json())
// 				.then(data => setMovies(data))
// 			}, [])
			
// 	  return(
// 		<div>
// 		moviesState
// 		</div>
// 	// 	<div className="container-fluid">
// 	// 		{
// 	// 			<>
// 	// 				<div className="row my-4">
// 	// 					<div className="col-12 col-md-6">
// 	// 						{/* Buscador */}
// 	// 						<form method="GET" onSubmit={searchMovie}>
// 	// 							<div className="form-group">
// 	// 								<label htmlFor="">Buscar por título:</label>
// 	// 								<input onInput={searchMovie} ref={inputTag} type="text" className="form-control" />
// 	// 							</div>
// 	// 							<button className="btn btn-info">Search</button>
// 	// 						</form>
// 	// 					</div>
// 	// 				</div>
// 	// 				<div className="row">
// 	// 					<div className="col-12">
// 	// 						<h2>Películas para la palabra:</h2>
// 	// 					</div>
// 	// 					{/* Listado de películas */}
// 	// 					{
// 	// 						movies.length > 0 && movies.map((movie, i) => {
// 	// 							return (
// 	// 								<div className="col-sm-6 col-md-3 my-4" key={i}>
// 	// 									<div className="card shadow mb-4">
// 	// 										<div className="card-header py-3">
// 	// 											<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
// 	// 										</div>
// 	// 										<div className="card-body">
// 	// 											<div className="text-center">
// 	// 												<img 
// 	// 													className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
// 	// 													src={movie.Poster !== 'N/A' ? movie.Poster : noPoster}
// 	// 													alt={movie.Title} 
// 	// 													style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
// 	// 												/>
// 	// 											</div>
// 	// 											<p>{movie.Year}</p>
// 	// 										</div>
// 	// 									</div>
// 	// 								</div>
// 	// 							)
// 	// 						})
// 	// 					}
// 	// 				</div>
// 	// 			</>
// 	// }
// 				// <div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
// 	// 	</div>
// 	// )
// )}

// export default SearchMovies;
