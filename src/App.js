import { useState } from 'react';
import './App.css';

function App() {
  const [current, setCurrent] = useState('0')
  const [previous, setPrevious] = useState('0')

  const handleNum = (e) => {
    const num = e.target.textContent

    if (current === '0') {
      setCurrent(num)
    } else {
      setCurrent(current + num)
    } 
  }

  const handleDecimal = () => {
    const arr = current.split(' ');
    const last = arr[arr.length - 1];

    if (!last.includes('.') && isNaN(parseInt(last)) === false) {
      setCurrent(current + '.')
    }
  }

  const handleOp = (e) => {
    const arr = current.split(' ');
    const last = arr[arr.length - 1];
    const op = e.target.textContent

    if (!isNaN(parseInt(last))) {
      setCurrent(current + ' ' + op + ' ')
    }


    
  }

  const handleEqual = () => {
    setCurrent(eval(current))
  }


  return (
    <div className="App">
      <div className='grid'>
        <div className='output'>
          <div className='previous'>{previous}</div>
          <div className='current'>{current}</div>
        </div>
        <button className='span-two' onClick={() => setCurrent('0')}>AC</button>
        <button>DEL</button>
        <button onClick={handleOp}>/</button>
        <button onClick={handleNum}>1</button>
        <button onClick={handleNum}>2</button>
        <button onClick={handleNum}>3</button>
        <button onClick={handleOp}>*</button>
        <button onClick={handleNum}>4</button>
        <button onClick={handleNum}>5</button>
        <button onClick={handleNum}>6</button>
        <button onClick={handleOp}>+</button>
        <button onClick={handleNum}>7</button>
        <button onClick={handleNum}>8</button>
        <button onClick={handleNum}>9</button>
        <button onClick={handleOp}>-</button>
        <button onClick={handleDecimal}>.</button>
        <button onClick={handleNum}>0</button>
        <button className='span-two' onClick={handleEqual}>=</button>
      </div> 
    </div>
  );
}

export default App;
