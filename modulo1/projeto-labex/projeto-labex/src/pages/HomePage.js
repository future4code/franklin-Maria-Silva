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
        <button onClick={goToHomePage}>Acessar a lista de Viagens</button>
        <button onClick={goToLogin}>Fazer Login</button>
    </div>
    )
}