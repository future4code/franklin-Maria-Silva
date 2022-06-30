import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export const useProtectedPage = () => {

    const navigate = useNavigate() 

    const backToLogin = () => {
        navigate("/login")
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token === null) {
            console.log('Não está logado!')
            backToLogin(navigate);
        }
    }, [navigate])
}
