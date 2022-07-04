import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeContainer, RecipeImage, ScreeContainer } from "./styled";

const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}recipe/${params.id}`)[0]

    return (
        <ScreeContainer>
           {recipe &&
            <RecipeContainer>
                <RecipeImage src={recipe.image}/>
                <Typography gutterBottom align="center" variant="h5" color="primary">{recipe.title}</Typography>
                <Typography align="center">{recipe.description}</Typography>
            </RecipeContainer>}
        </ScreeContainer>
    )
}

export default RecipeDetailPage