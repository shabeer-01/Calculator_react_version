import React, { useState } from 'react';
import "./calculator.css"
import Icon from "../images/delete.png"

function Calculator() {
    const [displayValue, setDisplayValue] = useState('');

    // Function to add a new value to the display
    function addValue(value) {
        if (displayValue === 'Syntax Error') {
            setDisplayValue('');
        }
        if (value === '.') {
            // Check if the display already contains a decimal point
            if (displayValue.includes('.')) {
                // If so, do not add another one
                return;
            }
        }
        setDisplayValue(displayValue + value);
    }

    // Function to clear the input field
    function clearInput() {
        setDisplayValue('');
    }

    // Function to remove the last character from the input field
    function remove() {
        setDisplayValue(displayValue.slice(0, -1));
    }

    // Function to evaluate the input and display the result
    function calculateResult() {
        try {
            const result = eval(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Syntax Error');
        }
    }

    // Function to clear the input field and reset the calculator
    function allClear() {
        setDisplayValue('');
    }
    

    // Handle keydown events
    function handleKeyDown(event) {
        const key = event.key;
        if (key >= 0 && key <= 9) {
            addValue(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            addValue(key);
        } else if (key === '.') {
            addValue('.');
        } else if (key === 'Backspace') {
            remove();
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Escape') {
            allClear();
        }
    }

    return (
        <div className="container" tabIndex="0"  onKeyDown={handleKeyDown}>
            <div className="output">
                <div id="display">{displayValue}</div>
            </div>
            <div className="row">
                <button className="clear" onClick={clearInput}>CE</button>
                <button className="clear" onClick={clearInput}>C</button>
                <button className="clear" onClick={remove}><img src={Icon} alt="" width="35px" height="35px" /></button>
                <button className="sign" onClick={() => addValue('/')}>/</button>
            </div>
            <div className="row">
                <button className="number" onClick={() => addValue('7')}>7</button>
                <button className="number" onClick={() => addValue('8')}>8</button>
                <button className="number" onClick={() => addValue('9')}>9</button>
                <button className="sign" onClick={() => addValue('*')}>x</button>
            </div>
            <div className="row">
                <button className="number" onClick={() => addValue('4')}>4</button>
                <button className="number" onClick={() => addValue('5')}>5</button>
                <button className="number" onClick={() => addValue('6')}>6</button>
                <button className="sign" onClick={() => addValue('-')}>-</button>
            </div>
            <div className="row">
                <button className="number" onClick={() => addValue('1')}>1</button>
                <button className="number" onClick={() => addValue('2')}>2</button>
                <button className="number" onClick={() => addValue('3')}>3</button>
                <button className="sign" onClick={() => addValue('+')}>+</button>
            </div>
            <div className="row">
                <button className="sign" onClick={() => addValue('00')}>00</button>
                <button className="number" onClick={() => addValue('0')}>0</button>
                <button className="sign" onClick={() => addValue('.')}>.</button>
                <button className="sign" onClick={() => calculateResult()}>=</button>
            </div>
        </div>
    );
}

export default Calculator;
