import React from "react";
import styled from "styled-components";

const Form1 = styled.form `
margin: 20px auto;
text-align: center;
`

const InputPergunta = styled.label `
display: block;
`

export function Etapa1 () {
return (
    <Form1>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <InputPergunta>1. Qual o seu nome?</InputPergunta>
        <input type="text"/>
        <InputPergunta>2. Qual sua idade?</InputPergunta>
        <input type="text"/>
        <InputPergunta>3. Qual seu email?</InputPergunta>
        <input type="text"/>
        <InputPergunta>4. Qual a sua escolaridade?</InputPergunta>
        <select name="escolaridade">
        <option value="ensino medio incompleto">Ensino Médio Incompleto</option>
        <option value="ensino medio completo">Ensino Médio Completo</option>
        <option value="ensino superior incompleto">Ensino Superior Incompleto</option>
        <option value="ensino superior completo">Ensino Superior Completo</option>
        </select>
    </Form1>
)
};
