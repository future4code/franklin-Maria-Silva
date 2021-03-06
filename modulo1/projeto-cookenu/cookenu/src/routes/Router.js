import React from "react";
import {Routes, Route} from "react-router-dom";
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = ({setRightButtonText}) => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage setRightButtonText={setRightButtonText}/>}/>
            <Route exact path="/cadastro" element={<SignUpPage setRightButtonText={setRightButtonText}/>}/>
            <Route exact path="/" element={<RecipesListPage/>}/>
            <Route path="/adicionar-receita" element={<AddRecipePage/>}/>
            <Route path="/detalhe/:id" element={<RecipeDetailPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}

export default Router