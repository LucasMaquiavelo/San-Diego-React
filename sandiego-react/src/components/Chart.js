import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect} from 'react'

function Chart (){

    const [usersState, setUsers] = useState([]); 

    	
    useEffect (() => {
        fetch('http://localhost:3080/api/users')    
        .then(response => response.json())
        .then(data => setUsers(data.users))
        .catch((error) => console.log(error))
        }
        , [])

    return (
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
                            usersState.map( ( user , i) => {
                                return <ChartRow { ...user} key={i}/>
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