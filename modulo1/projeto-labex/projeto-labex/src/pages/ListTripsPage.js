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
height: auto;
margin: 1em auto;
padding: 1px;
text-align: center;
color: #FFFFFF;
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
                console.log("Exibiu as viagens");
            }).catch((error) => {
                console.log(error.response);
                console.log("Bad Request")
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
    <div>
        <p>Lista de Viagens</p>
        {viagens}
        <button onClick={goToTripsApplication}>Inscrever-se em uma viagem</button>
        <button onClick={backToPage}>Voltar para Página Inicial</button>
    </div>
    )
}