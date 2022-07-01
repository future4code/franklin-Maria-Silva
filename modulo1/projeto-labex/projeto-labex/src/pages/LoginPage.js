import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

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

const Inputs = styled.input `
display: flex;
width: 40em;
height: 40px;
border: none;
margin: 10px auto;
background-color: #efefef;
`

const OnButton = styled.button `
display: flex;
margin: 10px auto;
border: none;
width: 15em;
height: 3em;
align-items: center;
justify-content: center;
font-size: 17px;
background-color: #e3aa45;
color: #FFFFFF;
`


export const LoginAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const submitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/maria-silva-franklin/login', body)
            .then((response) => {
                // console.log(response.data.token);
                localStorage.setItem('token', response.data.token)
                goToAdminHome()
            }).catch((error) => {
                console.log(error.response);
            })
        }

    const navigate = useNavigate()  
    
    const goToAdminHome = () => {
        navigate("/admin/trips/list")
    }
    
    const backToHomePage = () => {
        navigate(-1)
    }


    return (
    <BackgroundPage>
            <TitlePage>Login do Administrador</TitlePage>
            <Inputs placeholder="Digite seu email" type="email" value={email} onChange={onChangeEmail}/>
            <Inputs placeholder="Digite sua senha" type="password" value={password} onChange={onChangePassword}/>
            <OnButton onClick={submitLogin}>Fazer Login</OnButton>
        <OnButton onClick={backToHomePage}>Voltar para Página Inicial</OnButton>
    </BackgroundPage>
    )
}