import React, {useState} from 'react';
import './App.css';

function App() {
  const [num0, setNum0] = useState();
  const [num1, setNum1] = useState();
  const [sum, setSum] = useState();

  return (
    <>
      <div className='box'>
        <input type="number" value={num0} onChange={(e)=>setNum0(e.target.value)}></input> +
        <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}></input> =
        <input type="number" value={sum} onChange={(e)=>e.target.value} readOnly></input>
        <button onClick={() => {setSum(Number(num0) + Number(num1))}}>Sumar</button>
      </div>
    </>
  );
}

export default App;
