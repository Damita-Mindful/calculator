import './App.css';
import Boton from './components/Boton';
import Input from './components/Input';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = valor => {
    setInput(input + valor)
  }

  const calcular = () => {
    if (input){
    setInput(evaluate(input));
    }else{
      alert('Debes ingresar valores para usar la calculadora ^.^')
    }
  }

  return (
    <div className="App">
      <div className='logo'>
        <h3>Proyecto React</h3>
       
        <h1>Calculadora</h1>
      </div>
      <div className='contenedor-calculadora'>
        <Input input= {input} />
        <div className='fila'>
          <Boton manejarClic={addInput}>1</Boton>
          <Boton manejarClic={addInput}>2</Boton>
          <Boton manejarClic={addInput}>3</Boton>
          <Boton manejarClic={addInput}>+</Boton>
          <Boton manejarClic={addInput}>%</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>4</Boton>
          <Boton manejarClic={addInput}>5</Boton>
          <Boton manejarClic={addInput}>6</Boton>
          <Boton manejarClic={addInput}>-</Boton>
          <Boton manejarClic={addInput}>^</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={addInput}>7</Boton>
          <Boton manejarClic={addInput}>8</Boton>
          <Boton manejarClic={addInput}>9</Boton>
          <Boton manejarClic={addInput}>*</Boton>
          <Boton manejarClic={addInput}>(</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcular}>=</Boton>
          <Boton manejarClic={addInput}>0</Boton>
          <Boton manejarClic={addInput}>.</Boton>
          <Boton manejarClic={addInput}>/</Boton>
          <Boton manejarClic={addInput}>)</Boton>          
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
