/* eslint-disable default-case */
import React, {useState} from 'react'
import KeyPad from './Keypad'
import NumScreen from './NumScreen'

function CalcContainer(){
    let [num, setNum] = useState('')
    let [secondNum, setSecondNum] = useState('')
    let [total, setTotal] = useState('')
    let [operator, setOperator] = useState('')
    let [operatorPressed, setOperatorPressed] = useState(false)
    

    function handleChange(e){
        let {value} = e.target
        operatorPressed ?
        setSecondNum(prevNum => prevNum + value) :
        setNum(prevNum => prevNum + value)
    }

    function handleOperator(e){
        let {value} = e.target
        setOperator(value)
        setOperatorPressed(true)

        if (total !== ''){
            setNum(total)
            setOperator(value)
            setSecondNum('')
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

    function clear(){
        setNum('')
        setSecondNum('')
        setTotal('')
        setOperator('')
        setOperatorPressed(false)
    }

    const numbuttonNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    return(
        <div className="CalcContainer">
            <NumScreen numbuttonNumbers={numbuttonNumbers} operator={operator} num={num} secondNum={secondNum} total={total}/>
            <KeyPad handleEqual={handleEqual} handleOperator={handleOperator} clear={clear} handleChange={handleChange}/>
        </div>
        
    )
}

export default CalcContainer