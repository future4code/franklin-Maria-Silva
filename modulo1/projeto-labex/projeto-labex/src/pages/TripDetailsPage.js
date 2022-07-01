import axios from 'axios';
import React, {useEffect} from 'react';
import { useProtectedPage } from '../hooks/useProtectedPage';


export const TripDetails = () => {
    useProtectedPage();

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-silva-franklin/trip/:id', {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error.response);
            })
    }, [])

    return (
    <div>
        <p>Viagem detalhada</p>
    </div>
    )
}