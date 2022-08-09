import React from 'react';
import ChartRow from './ChartRow';


// const [usersState, setUsers] = useState([]); 

	
// useEffect (() => {
//   fetch('http://localhost:3080/api/users')    
//  .then(response => response.json())
//  .then(data => setUsers (data))
//  .catch((error) => console.log(error))
//  }

//  , [])

let tableRowsData = [
    // {
    //     Nombre: usersState.name,
    //     Email: usersState,
    //     Categoría: usersState.category,

    // },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Categoría</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;