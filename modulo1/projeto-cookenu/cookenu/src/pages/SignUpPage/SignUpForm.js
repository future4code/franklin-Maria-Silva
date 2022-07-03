import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import TextField from '@mui/material/TextField';
import useForm from "../../hooks/useForm";
import Button from '@mui/material/Button';
import { useNavigate} from "react-router-dom";
import { signUp } from "../../services/user";

const SignUpForm = ({setRightButtonText}) => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: ""})
 
    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, navigate, setRightButtonText)
    }

    return (
        <SignUpFormContainer>
                <form onSubmit={onSubmitForm}>
                <InputsContainer>    
                <TextField 
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    label="Nome"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    autoFocus
                />
                <TextField 
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    label="E-mail"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="email"
                />
                <TextField 
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    label="Senha"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="password"
                />
                </InputsContainer>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                Fazer Cadastro
                </Button>
                </form>      
        </SignUpFormContainer>
    )
}

export default SignUpForm