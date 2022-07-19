import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViagemDaLista = styled.div `
display: flex;
flex-direction: column;
align-items: center;
background-color: #21ABD5;
width: 40em;
height: 15em;
margin: 1em auto;
padding: 1px;
text-align: center;
color: #FFFFFF;
font-weight: bold;
`

const BackgroundPage = styled.div `
background-color: #1688a7;
height: 100vh; 
width: 100vw; 
position: fixed; 
top: 0; 
left: 0; 
`

const OnButton = styled.button `
display: flex;
margin: 10px auto;
border: none;
width: 25em;
height: 3em;
align-items: center;
justify-content: center;
font-size: 17px;
background-color: #e3aa45;
color: #FFFFFF;
`
const TitlePage = styled.h1 `
text-align: center;
color: #FFFFFF
`

export const ListTrips = () => {

    
    const [trips, setTrips] = useState([]);
    
    const navigate = useNavigate()   
    
    const backToPage = () => {
        navigate(-1)
    }

    const goToTripsApplication = () => {
        navigate("/trips/application")
    }

    useEffect(() => {
        listTripsPage();
    }, [])

    const listTripsPage = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-silva-franklin/trips')
            .then((response) => {
                setTrips(response.data.trips);
                console.log(response.data.trips);
            }).catch((error) => {
                console.log(error.response);
            })
        }

        const viagens = trips.map((trip) => {
            return (
                <ViagemDaLista key={trip.id}>
                    <p>Nome: {trip.name}</p>
                    <p>Descrição: {trip.description}</p>
                    <p>Data: {trip.date}</p>
                    <p>Duração: {trip.durationInDays} dias</p>
                    <p>Local: {trip.planet}</p>
                </ViagemDaLista>
            )
        })

    return (
    <BackgroundPage>
        <TitlePage>Lista de Viagens</TitlePage>
        {viagens}
        <OnButton onClick={goToTripsApplication}>Inscrever-se em uma viagem</OnButton>
        <OnButton onClick={backToPage}>Voltar para Página Inicial</OnButton>
    </BackgroundPage>
    )
}