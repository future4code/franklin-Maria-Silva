import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage';


const BackgroundPage = styled.div `
background-color: #1688a7;
height: 100vh; 
width: 100vw; 
position: fixed; 
top: 0; 
left: 0; 
`

const TitlePage = styled.h2 `
text-align: center;
color: #FFFFFF;
margin: 3em auto;
`

const ViagemDaLista = styled.div `
display: flex;
justify-content: center;
border: none;
background-color: #21ABD5;
width: 40em;
height: auto;
margin: 1em auto;
padding: 5px 10px 5px;
text-align: center;
color: #FFFFFF;
align-items: center;
`
const TripSelect = styled.div `
display: flex;
flex-direction: column;
margin: 10px auto;
padding: 10px;
justify-content: space-evenly;
width: 40em;
height: 5em;
`
const ButtonAdmin = styled.button `
    display: flex;
    margin: 10px auto;
    border: none;
    width: 10em;
    height: 3em;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    background-color: #e3aa45;
    color: #FFFFFF;
`

export const AdminHome = () => {
    useProtectedPage();

    const navigate = useNavigate()   
    
    const goToTripDetails = () => {
        navigate("/admin/trips/:id")
    }

    const [trips, setTrips] = useState([]);

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

    const deleteTrip = (id) => {
        const token = localStorage.getItem('token')
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-silva-franklin/trips/${id}`, {
            headers:{
            ContentType: 'application/json',
            auth: token
            }
        }).then((response) => {
           listTripsPage()
        }).catch((error) => {
            console.log(error)
        })
    }

        const viagens = trips.map((trip) => {
            return (
                <TripSelect key={trip.id}>
                    <ViagemDaLista>{trip.name}<ButtonAdmin onClick={goToTripDetails}>Ver detalhes da Viagem</ButtonAdmin><ButtonAdmin onClick={() => deleteTrip(trip.id)}>Deletar Viagem</ButtonAdmin></ViagemDaLista>
                </TripSelect>
            )
        })


    return (
    <BackgroundPage>
        <TitlePage>Área Administrativa - Lista de Viagens</TitlePage>
        {viagens}
        <ButtonAdmin>Criar uma viagem</ButtonAdmin>
    </BackgroundPage>
    )
}

