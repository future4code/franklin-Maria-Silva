import React from "react";
import styled from "styled-components";

const Form2 = styled.form `
margin: 20px auto;
text-align: center;
`

const InputPergunta2 = styled.label `
display: block;
`

export function Etapa2 () {
return (
    <Form2>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <InputPergunta2>5. Qual curso?</InputPergunta2>
        <input type="text"/>
        <InputPergunta2>6. Qual a unidade de ensino?</InputPergunta2>
        <input type="text"/>
    </Form2>
)
};