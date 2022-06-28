import React from 'react';
import styled from 'styled-components';
import imgHome from '../../src/home.jpg';
 
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
    return (
    <div>
        <HomePageImg/>
        <button>Acessar a lista de Viagens</button>
        <button>Fazer Login</button>
    </div>
    )
}