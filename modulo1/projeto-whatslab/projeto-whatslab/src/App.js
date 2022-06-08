import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components';


const MessageInput = styled.div `
  display: flex;
  justify-content: center;
  margin: 6px;
`
const Data = styled.input `
  width: 100px;
  padding: 3px 4px;
  border: none;
  border-radius: 4px;
`
const Message = styled.input `
  width: 60%;
  margin: 0px 4px;
  padding: 0px 4px;
  border: none;
  border-radius: 4px;
`
const MessageButton = styled.button `
  width: 100px;
  backgrdound-color: ##d7c2c9;
  border: none;
  border-radius: 4px;
  font-weight: bold;
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
  background-image: linear-gradient(to bottom right, #eb89a8, #58336a);
  overflow: hidden;
`
const BalaoContainer = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 85%%;
  margin-right: 1em;
  margin-left: 1em;
  min-width: 8%;
  margin-bottom: 1em;
  word-wrap: break-word;
`
const BalaoDeMensagemEu = styled.div `
  background-color: #D8BFD8;
  flex-direction: column;
  align-self: flex-end;
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  box-shadow: 0px 3px 3px 0px #4e1f47;
  max-width: 85%;
`
const BalaoDeMensagemAmigo = styled.div `
  background-color: #FFC0CB;
  align-self: flex-start;
  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  box-shadow: 0px 3px 3px 0px #4e1f47;
  max-width: 85%;
`

// Desenvolvendo o chat

function App () {

  const [mensagem, setMensagem] = useState ([]);
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
    if (comunica.usuario === "eu") { 
      return (
      <BalaoContainer><BalaoDeMensagemEu>{comunica.texto}</BalaoDeMensagemEu></BalaoContainer>
    )} else {
      return (
      <BalaoContainer><BalaoDeMensagemAmigo><b>{comunica.usuario}<br/></b>{comunica.texto}</BalaoDeMensagemAmigo></BalaoContainer>
      );
    };
  });

  return(
  <MessageContainer>
      <div>
        {listaDeMensagens}
      </div>
      <MessageInput>
          <Data type="text" placeholder="Usuário" value={inputUsuario} onChange={onChangeInputUsuario}/>
          <Message type="text" placeholder="Digite aqui sua mensagem:" value={inputTexto} onChange={onChangeInputTexto}/>
          <MessageButton onClick={adicionaMensagem}>Enviar</MessageButton>
      </MessageInput>
  </MessageContainer>
)

}

export default App;