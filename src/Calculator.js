import React, {useState} from 'react'
import './calculator.css'

const Calculator = () => {
    const [display, setDisplay] = useState("");

    const appendToDisplay= (input) =>{
        setDisplay(display + input);

    };
    const clearDisplay = () =>{
        setDisplay("");

    };
    const calculate = () => {
        try{
            setDisplay(eval(display).toString());
        }
        catch(error){
            setDisplay("Error");
        }

    };
  return (
    <div>
        <h1>A simple calculator app</h1>
        <div className='calculator'>
    <input  readOnly id="display" value={display} />
    <div className="keys">
      <button onClick={() => appendToDisplay(' + ')} className="operator" >+</button>
      <button onClick={() => appendToDisplay('7')}>7</button>
      <button onClick={() => appendToDisplay('8')}>8</button>
      <button onClick={() => appendToDisplay('9')}>9</button>
      <button onClick={() => appendToDisplay(' - ')} className="operator" >–</button>
      <button onClick={() => appendToDisplay('4')}>4</button>
      <button onClick={() => appendToDisplay('5')}>5</button>
      <button onClick={() => appendToDisplay('6')}>6</button>
      <button onClick={() => appendToDisplay(' * ')} className="operator" >x</button>
      <button onClick={() => appendToDisplay('1')}>1</button>
      <button onClick={() => appendToDisplay('2')}>2</button>
      <button onClick={() => appendToDisplay('3')}>3</button>
      <button onClick={() => appendToDisplay(' / ')} className="operator" >÷</button>
      <button onClick={() => appendToDisplay('0')}>0</button>
      <button onClick={() => appendToDisplay('.')}>.</button>
      <button onClick={() => calculate()} className="operator" >=</button>
      <button onClick={() => clearDisplay()} className="operator" >C</button>
    </div>
  </div>
  </div>
  )
}

export default Calculator;