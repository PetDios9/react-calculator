import React from 'react'

function Keypad(props){

    let numButtons = [0,1,2,3,4,5,6,7,8,9].map(num => 
        <div>
            <button
                onClick={props.handleChange}
                value={`${num}`}
                name={`${num}`}>
                {num}
            </button>
        </div>)

    let operatorButtons = ['+', '-', 'X', '/'].map(op =>     
        <div>
            <button
                onClick={props.handleOperator}
                value={`${op}`}
                name={`${op}`}>
                {op}
            </button>
        </div>)

    return(
        <div>
            {numButtons}
            {operatorButtons}
            
            <div>
                <button 
                onClick={props.clear}
                value="CE"
                name="CE">
                    CE
                </button> 
            </div>

            <div>
                <button 
                onClick={props.handleEqual}
                value="="
                name="=">
                    =
                </button> 
            </div>

        </div>
    )
}

export default Keypad