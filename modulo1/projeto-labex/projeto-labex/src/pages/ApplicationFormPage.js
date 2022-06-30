import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ApplicationForm = () => {

    const navigate = useNavigate()  

    const backToPage = () => {
        navigate(-1)
    }
    
    return (
    <div>
        <p>Formulário de Inscrição</p>
        <button>Enviar Formulário</button>
        <button onClick={backToPage}>Voltar para Lista de Viagens</button>
    </div>
    )
}