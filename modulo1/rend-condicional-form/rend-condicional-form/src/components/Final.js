import React from "react";
import styled from "styled-components";

const MensagemFinal = styled.div `
margin: 20px auto;
text-align: center;
`

export function EtapaFinal () {
return (
    <MensagemFinal>
        <h1>O FORMULÁRIO ACABOU</h1>
        <h2> Muito obrigado por participar! Entraremos em contato!</h2>
    </MensagemFinal>
)
};