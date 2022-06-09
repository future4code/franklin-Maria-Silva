// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { EtapaFinal } from './components/Final';

const Formulario = styled.div `
margin: 20px auto;
text-align: center;;
`

function App() {
  const [etapa, setEtapa] = useState(1)

  const onChangeSetEtapa = () => {
    setEtapa (etapa + 1)
  }

  const renderizaForm = () => {
    switch (etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <EtapaFinal/>
        default: break;
    } console.log(renderizaForm)
  }

  return (
    <Formulario>
      {renderizaForm()}
      <button onClick={onChangeSetEtapa}>Próxima etapa</button>
    </Formulario>
  );
}

export default App;
