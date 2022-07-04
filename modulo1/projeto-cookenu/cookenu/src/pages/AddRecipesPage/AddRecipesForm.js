import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useForm from "../../hooks/useForm";
import { InputsContainer, AddRecipeFormContainer } from "./styled";
import { createRecipe } from "../../services/recipes";
import CircularProgress from '@mui/material/CircularProgress';

const AddRecipeForm = () => {
    const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
      event.preventDefault()
      createRecipe(form, clear, setIsLoading)
    }
  
    return (
      <form onSubmit={onSubmitForm}>
        <AddRecipeFormContainer>
          <InputsContainer>
            <TextField
              name="title"
              value={form.title}
              onChange={onChange}
              label="Título"
              variant="outlined"
              fullWidth
              required
              autoFocus
              margin="normal"
            />
            <TextField
              name="description"
              value={form.description}
              onChange={onChange}
              label="Descrição"
              variant="outlined"
              fullWidth
              required
              margin="normal"
            />
            <TextField
              name="image"
              value={form.image}
              onChange={onChange}
              label="Foto"
              variant="outlined"
              fullWidth
              required
              margin="normal"
            />
          </InputsContainer>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
          >
            {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <p>Adicionar Receita</p>}
          </Button>
        </AddRecipeFormContainer>
      </form>
    )
  }
  
  export default AddRecipeForm
