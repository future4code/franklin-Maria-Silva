import React from "react";
import { InputsContainer } from "./styled";
import TextField from '@mui/material/TextField';
import useForm from "../../hooks/useForm";
import Button from '@mui/material/Button';
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";

const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const navigate = useNavigate()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, navigate, setRightButtonText)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
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

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        margin="normal"
                    >
                        Fazer Login!
                    </Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm