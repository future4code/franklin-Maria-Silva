import React from 'react';
import styled from 'styled-components';

const MessageButton = styled.div `
    display: flex;
    justify-content: center;
`

const Data = styled.input `
    width: 100px;
    padding: 0px 2px;
`
const Message = styled.input `
    width: 30%;
    margin: 0px 1px;
`

function SendMessage() {
    return(
        <div>
            <div>
            </div>
            <MessageButton>
                <Data type="text" placeholder="Usuário"/>
                <Message type="text" placeholder="Digite aqui sua mensagem:"/>
                <button>Enviar</button>
            </MessageButton>
        </div>
    )
}

export {SendMessage}

