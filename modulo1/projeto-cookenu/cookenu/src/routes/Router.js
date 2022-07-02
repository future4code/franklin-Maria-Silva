import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";

const Router = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route exact path="/cadastro" element={<SignUpPage/>}/>
                    <Route exact path="/" element={<RecipesListPage/>}/>
                    <Route path="/adicionar-receita" element={<AddRecipePage/>}/>
                    <Route path="/detalhe/:id" element={<RecipeDetailPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
    )
}

export default Router