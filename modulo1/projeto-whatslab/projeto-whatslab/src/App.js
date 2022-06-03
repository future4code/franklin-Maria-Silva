import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';


const MessageButton = styled.div `
    display: flex;
    justify-content: center;
    margin: 6px 1px;
`
const Data = styled.input `
    width: 100px;
    padding: 3px 4px;
    border-radius: 3px;
`
const Message = styled.input `
    width: 60%;
    margin: 0px 1px;
    padding: 0px 4px;
    border-radius: 3px;
`
const MessageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-itens: center;
    border: 2px solid black;
    border-radius: 15px;
    height: 650px;
    width: 450px;
    justify-content: flex-end;
    margin: 3px auto;
`

// Desenvolvendo o chat

function App () {

  const [mensagem, setMensagem] = useState ([
    // {
    //   usuario: "",
    //   texto: ""
    // }
  ]);

  const [inputUsuario, setInputUsuario] = useState("");
  const [inputTexto, setInputTexto] = useState("");

   
  const adicionaMensagem = () => {
    if (inputUsuario === "") {
      return alert("O campo usuário está vazio!")
    }; 
    if (inputTexto === "") {
      return alert("O campo mensagem está vazio!")
    }; 
    const novaMensagem = {
      usuario: inputUsuario,
      texto: inputTexto
    };

  const novoTexto = [...mensagem, novaMensagem];

  setMensagem(novoTexto);
  setInputUsuario('');
  setInputTexto('');
 };

  const onChangeInputUsuario = (event) => {
    setInputUsuario(event.target.value);
  };

  const onChangeInputTexto = (event) => {
    setInputTexto(event.target.value);
  };

  const listaDeMensagens = mensagem.map((comunica) => {
    return (
      <p>
        <b>{comunica.usuario}:</b> {comunica.texto}
      </p>
    );
  });

  return(
  <MessageContainer>
      <div>
      {listaDeMensagens}
      </div>
      <MessageButton>
          <Data type="text" placeholder="Usuário" value={inputUsuario} onChange={onChangeInputUsuario}/>
          <Message type="text" placeholder="Digite aqui sua mensagem:" value={inputTexto} onChange={onChangeInputTexto}/>
          <button onClick={adicionaMensagem}>Enviar</button>
      </MessageButton>
  </MessageContainer>
)

}

export default App;