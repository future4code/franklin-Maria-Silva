import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { AddRecipeButton, RecipeListContainer } from "./styled";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator";

const RecipesListPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const recipes = useRequestData([], `${BASE_URL}recipe/feed`)
    
    const onClickCard = (id) => {
        goToRecipeDetail(navigate, id)
    } 

    const recipeCards = recipes && recipes.map((recipe) => {
        return (
            <RecipeCard
                // key={recipe.recipe.id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}
            />
        )
    })
    return (
        <RecipeListContainer>
            {recipeCards}
            <AddRecipeButton
                color="primary"
                onClick={() => goToAddRecipes(navigate)}
            >
                <AddIcon/>
            </AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage