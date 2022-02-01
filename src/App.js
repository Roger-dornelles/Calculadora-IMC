import { useState } from 'react';
import './App.css';

const App = ()=>{
  const [peso, setPeso ] = useState('');
  const [ altura, setAltura ] = useState('');
  const [info, setInfo ] = useState('');

  const calcularImc = ()=>{
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(peso || altura === ''){
      setInfo('Preencha todos os campos...')
    }

    if(imc < 18.6){
      setInfo(`Você esta abaixo do peso,seu IMC: ${imc.toFixed(2)}`);
    }else if(imc >= 18.6 && imc <24.9){
      setInfo(`Peso ideal,seu IMC: ${imc.toFixed(2)}`);
    }else if(imc >= 24.9 && imc < 34.9){
      setInfo(`Você esta levemente acima do peso,seu IMC: ${imc.toFixed(2)}`);
    }else if(imc > 34.9){
      setInfo(`Cuidado OBESIDADE,seu IMC: ${imc.toFixed(2)}`);
    }
  }
  return(
    <div className="app">

      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC.</span>

      <div className="inputs">
        <input type="text"
          placeholder="Peso em (KG) Ex:90"
          value={peso}
          onChange={e => setPeso(e.target.value)}
        />
        <input type="text"
          placeholder="Altura em (CM) EX:180"
          value={altura}
          onChange={e => setAltura(e.target.value)}
          />

        <button onClick={calcularImc}>Calcular</button>
      </div>
      <h2>{info}</h2>
    </div>
  )
}

export default App;