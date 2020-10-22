/* eslint-disable default-case */
import React, {useState} from 'react'
import {Box} from '@material-ui/core'
import KeyPad from './Keypad'
import NumScreen from './NumScreen'

function CalcContainer(){
    let [num, setNum] = useState('0')
    let [secondNum, setSecondNum] = useState('0')
    let [total, setTotal] = useState('')
    let [operator, setOperator] = useState('')
    let [operatorPressed, setOperatorPressed] = useState(false)
    let [cButtonPressed, setCButtonPressed] = useState(false)
    

    function handleChange(e){
        let {value} = e.currentTarget

        operatorPressed ?
        setSecondNum(prevNum => {
            // eslint-disable-next-line eqeqeq
            if (prevNum == 0){
                setCButtonPressed(false)
                return '' + value
            } else {
                setCButtonPressed(false)
                return prevNum + value
            }
        }) :
        setNum(prevNum => {
            // eslint-disable-next-line eqeqeq
            if (prevNum == 0){
                setCButtonPressed(false)
                return '' + value
            } else {
                setCButtonPressed(false)
                return prevNum + value
            }
        })
    }

    function handleOperator(e){
        let {value} = e.currentTarget
        setOperator(value)
        setOperatorPressed(true)

        if (total !== ''){
            setNum(total)
            setOperator(value)
            setSecondNum('0')
            setTotal('')
        }
    }

    function handleEqual(e){
        let convertedNum = parseInt(num)
        let convertedSecNum = parseInt(secondNum)

        switch (operator) {
            case '+':
                setTotal(convertedNum + convertedSecNum)
                break
            case '-':
                setTotal(convertedNum - convertedSecNum)
                break
            case '/':
                setTotal(convertedNum / convertedSecNum)
                break
            case 'X':
                setTotal(convertedNum * convertedSecNum)
                break
        }     
    }

    function clearEverything(){
        setNum('0')
        setSecondNum('0')
        setTotal('')
        setOperator('')
        setOperatorPressed(false)
       // setCButtonPressed(false)
    }

    function clear(){
        setCButtonPressed(true)
        operatorPressed ? setSecondNum('0') : setNum('0')
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
            handleChange={handleChange}
            clear={clear}
            cButtonPressed={cButtonPressed}
            />
            
        </Box>
        
    )
}

export default CalcContainer