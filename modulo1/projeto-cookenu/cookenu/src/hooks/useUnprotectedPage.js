import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToRecipesList } from "../routes/coordinator";

const useUnprotectedPage = () => {
    const navigate = useNavigate();
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token){
            goToRecipesList(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage