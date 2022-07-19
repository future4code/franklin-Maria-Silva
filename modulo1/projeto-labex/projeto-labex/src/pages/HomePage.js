import React from 'react';
import styled from 'styled-components';
import imgHome from '../../src/home.jpg';
import { useNavigate } from 'react-router-dom';
 
const HomePageImg = styled.div`
background-image: url(${imgHome});
background-size: cover; 
height: 100vh; 
width: 100vw; 
position: fixed; 
top: 0; 
left: 0; 
z-index: -3;
` 

const ButtonHome = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e3aa45;
    width: 24em;
    height: 5em;
    margin: 3em 4em;
    padding: 1px;
    border: none;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;
`

export const HomePage = () => {
    const navigate = useNavigate()   
    
    const goToHomePage = () => {
        navigate("/trips/list")
    }

    const goToLogin = () => {
        navigate("/login")
    }

    return (
    <div>
        <HomePageImg/>
        <ButtonHome onClick={goToHomePage}>Acessar a lista de Viagens</ButtonHome>
        <ButtonHome onClick={goToLogin}>Fazer Login</ButtonHome>
    </div>
    )
}