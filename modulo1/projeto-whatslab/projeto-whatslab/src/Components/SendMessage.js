import React from 'react';
import styled from 'styled-components';


const MessageButton = styled.div `
    display: flex;
    justify-content: center;
    margin: 2px;
`

const Data = styled.input `
    width: 100px;
    padding: 0px 4px;
    border-radius: 5px;
`
const Message = styled.input `
    width: 60%;
    margin: 0px 1px;
    padding: 0px 4px;
    border-radius: 5px;
`

const MessageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-itens: center;
    border: 2px solid black;
    border-radius: 20px;
    height: 650px;
    width: 450px;
    justify-content: flex-end;
    margin: 3px auto;
`

function SendMessage() {
    return(
        <MessageContainer>
            <div>
            </div>
            <MessageButton>
                <Data type="text" placeholder="Usuário"/>
                <Message type="text" placeholder="Digite aqui sua mensagem:"/>
                <button>Enviar</button>
            </MessageButton>
        </MessageContainer>
    )
}

export {SendMessage}

