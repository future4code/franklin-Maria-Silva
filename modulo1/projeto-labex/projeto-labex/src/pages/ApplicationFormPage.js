import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ApplicationForm = () => {

    const navigate = useNavigate()  

    const backToPage = () => {
        navigate(-1)
    }

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [textoCandidatura, setTextoCandidatura] = useState("")
    const [profissao, setProfissao] = useState("")
    const [planeta, setPlaneta] = useState("")

    const mudaNome = (event) => {
        setNome(event.target.value)
    }
    const mudaIdade = (event) => {
        setIdade(event.target.value)
    }

    const mudaTextoCandidatura = (event) => {
        setTextoCandidatura(event.target.value)
    }

    const mudaProfissao = (event) => {
        setProfissao(event.target.value)
    }

    const mudaPlaneta = (event) => {
        setPlaneta(event.target.value)
    }
    
    const CandidatarViagem = (event, id) => {
        event.preventDefault();
        const body = {
            name: nome,
            age: idade,
            applicationText: textoCandidatura,
            profession: profissao,
            country: planeta
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-silva-franklin/trips/${id}/apply`, body, {
            headers:{
                ContentType: 'application/json',
                }
            }).then((response) => {
                console.log(response)
             }).catch((error) => {
                 console.log(error)
             })
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
                console.log("Bad Request")
            })
        }
    const [trips, setTrips] = useState([]);

    const selectViagens = trips.map((trip) => {
        return (
            <option key={trip.id}>
               {trip.name}
            </option>
        )
    })

    return (
    <div>
            <p>Formulário de Inscrição para Viagem</p>
            <form onSubmit={CandidatarViagem}>
                <select>
                    <option value={"escolha uma viagem"}>Escolha uma Viagem</option>
                    {selectViagens}
                </select>
                <input value={nome} onChange={mudaNome} placeholder={"Nome"}/>
                <input value={idade} onChange={mudaIdade} placeholder={"Idade"}/>
                <input value={textoCandidatura} onChange={mudaTextoCandidatura} placeholder={"Texto de Candidatura"}/>
                <input value={profissao} onChange={mudaProfissao} placeholder={"Profissão"}/>
                <select onChange={mudaPlaneta}>
                    <option value={"escolha um planeta"}>Escolha um Planeta</option>
                    <option value={"jupiter"}>Júpiter</option>
                    <option value={"netuno"}>Netuno</option>
                    <option value={"festanca marciana"}>Festança Marciana</option>
                </select>
            <button type="submit">Enviar Formulário</button>
        </form>
        <button onClick={backToPage}>Voltar para Lista de Viagens</button>
    </div>
    )
}