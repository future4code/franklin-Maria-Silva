import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage';

const ViagemDaLista = styled.div `
display: flex;
justify-content: center;
border: none;
background-color: #21ABD5;
width: 40em;
height: auto;
margin: 1em auto;
padding: 1px;
text-align: center;
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
                console.log("Exibiu as viagens");
            }).catch((error) => {
                console.log(error.response);
                console.log("Bad Request")
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
                <div key={trip.id}>
                    <ViagemDaLista>{trip.name}<button onClick={goToTripDetails}>Ver detalhes da Viagem</button><button onClick={() => deleteTrip(trip.id)}>Deletar Viagem</button></ViagemDaLista>
                </div>
            )
        })


    return (
    <div>
        <p>Área AdministrativaL</p>
        <p>Lista de Viagens</p>
        {viagens}
        <button>Criar uma viagem</button>
    </div>
    )
}

