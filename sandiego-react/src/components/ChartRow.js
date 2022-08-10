import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{(props.id == 1) ? 'Admin' : 'Visitor'}</td>
                </tr>
            )
    }
    
        

export default ChartRow;