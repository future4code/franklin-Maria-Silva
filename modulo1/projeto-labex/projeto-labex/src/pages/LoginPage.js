import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
                console.log(response.data.token);
                console.log("Deu certo");
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
    <div>
        <p>Login do Administrador</p>
        <input placeholder="Digite seu email" type="email" value={email} onChange={onChangeEmail}/>
        <input placeholder="Digite sua senha" type="password" value={password} onChange={onChangePassword}/>
        <button onClick={submitLogin}>Fazer Login</button>
        <button onClick={backToHomePage}>Voltar para Página Inicial</button>
    </div>
    )
}