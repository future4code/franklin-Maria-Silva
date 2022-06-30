import React from 'react'
import { useProtectedPage } from '../hooks/useProtectedPage'

export const CreateTrip = () => {
    useProtectedPage();

    return (
    <div>
        <p>Criar uma nova viagem</p>
        <button>Criar Viagem</button>
    </div>
    )
}