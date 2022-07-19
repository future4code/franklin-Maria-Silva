import axios from 'axios';
import React, {useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BackgroundPage = styled.div `
background-color: #1688a7;
height: 100vh; 
width: 100vw; 
position: fixed; 
top: 0; 
left: 0; 
`

const TitlePage = styled.h1 `
text-align: center;
color: #FFFFFF;
margin: 3em auto;
`

const OnForm = styled.form `
display: flex;
flex-direction: column;
width: 35em;
margin: 5em auto;
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
const Selected = styled.select `
height: 40px;
border: none;
margin: 0px 0px 5px;
`
const Inputs = styled.input `
height: 40px;
border: none;
margin: 0px 0px 5px;
background-color: #efefef;
`

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
                alert("Candidatura enviada com sucesso!");
                setNome("");
                setIdade("");
                setTextoCandidatura("");
                setProfissao("");
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
    <BackgroundPage>
            <TitlePage>Formulário de Inscrição para Viagem</TitlePage>
            <OnForm onSubmit={CandidatarViagem}>
                <Selected>
                    <option value={"escolha uma viagem"}>Escolha uma Viagem</option>
                    {selectViagens}
                </Selected>
                <Inputs value={nome} onChange={mudaNome} placeholder={"Nome"}/>
                <Inputs value={idade} onChange={mudaIdade} placeholder={"Idade"}/>
                <Inputs value={textoCandidatura} onChange={mudaTextoCandidatura} placeholder={"Texto de Candidatura"}/>
                <Inputs value={profissao} onChange={mudaProfissao} placeholder={"Profissão"}/>
                <Selected onChange={mudaPlaneta}>
                    <option value={"escolha um planeta"}>Escolha um Planeta</option>
                    <option value={"jupiter"}>Júpiter</option>
                    <option value={"netuno"}>Netuno</option>
                    <option value={"festanca marciana"}>Festança Marciana</option>
                </Selected>
            <OnButton type="submit">Enviar Formulário</OnButton>
        </OnForm>
        <OnButton onClick={backToPage}>Voltar para Lista de Viagens</OnButton>
    </BackgroundPage>
    )
}