import React from "react";
import styled from "styled-components";

const Form3 = styled.form `
margin: 20px auto;
text-align: center;
`

const InputPergunta3 = styled.label `
display: block;
`

export function Etapa3 () {
return (
    <Form3>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <InputPergunta3>5. Porque você não terminou um curso de graduação?</InputPergunta3>
        <input type="text"/>
        <InputPergunta3>6. Você fez algum curso complementar?</InputPergunta3>
        <select name="curso">
        <option value="curso tecnico">Curso técnico</option>
        <option value="curso de ingles">Curso de inglês</option>
        <option value="nao fiz curso complementar">Não fiz curso complementar</option>
        </select>
    </Form3>
)
};