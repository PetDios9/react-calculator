import React from 'react'

function NumScreen(props){
    return(
    <div>
        <h1>{`${props.num} ${props.operator} ${props.secondNum}`}</h1>
        <br />
        <h1>{props.total}</h1>
    </div>
    
    )
}

export default NumScreen