/* eslint-disable default-case */
import React, {useState} from 'react'
import {Box} from '@material-ui/core'
import KeyPad from './Keypad'
import NumScreen from './NumScreen'

function CalcContainer(){
    let [num, setNum] = useState(0)
    let [secondNum, setSecondNum] = useState(0)
    let [total, setTotal] = useState(0)
    let [operator, setOperator] = useState('')
    let [operatorPressed, setOperatorPressed] = useState(false)
    let [cButtonPressed, setCButtonPressed] = useState(false)

    function renderFirstNum(event) {
        let {value} = event.currentTarget

        setNum(prevNum => {
            if (prevNum === 0){
                return value
            } else {
                return prevNum + value
            }
        })
    }  

    function renderSecondNum(event) {
        let {value} = event.currentTarget
        
        setSecondNum(prevNum => {
            if (prevNum === 0){
                return value
            } else {
                return prevNum + value
            }
        })
    }  

    function renderNumber(event) {
        operatorPressed ? renderSecondNum(event) : renderFirstNum(event) 
    }

    function handleOperator(event){
        let {value} = event.currentTarget
        setOperator(value)
        setOperatorPressed(true)

        if (total !== 0){
            setNum(total)
            setOperator(value)
            setSecondNum(0)
            setTotal(0)
        }
    }

    function handleEqual(){
        switch (operator) {
            case '+':
                // num variable becomes string on button press, fix later
                setTotal(parseInt(num) + parseInt(secondNum))
                break
            case '-':
                setTotal(num - secondNum)
                break
            case '/':
                setTotal(num / secondNum)
                break
            case 'X':
                setTotal(num * secondNum)
                break
        }     
    }

    function clearEverything(){
        setNum(0)
        setSecondNum(0)
        setTotal(0)
        setOperator('')
        setOperatorPressed(false)
    }

    function clear(){
        setCButtonPressed(true)
        operatorPressed ? setSecondNum(0) : setNum(0)
    }


    return(
        <Box border={1} width={250}>
            
            <NumScreen 
            operator={operator} 
            num={num} 
            secondNum={secondNum} 
            total={total} 
            operatorPressed={operatorPressed}
            />

            <KeyPad 
            handleEqual={handleEqual} 
            handleOperator={handleOperator} 
            clearEverything={clearEverything} 
            renderNumber={renderNumber}
            clear={clear}
            cButtonPressed={cButtonPressed}
            />
            
        </Box>
        
    )
}

export default CalcContainer