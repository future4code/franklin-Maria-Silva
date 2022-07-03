export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}

export const goToAddRecipes = (navigate) => {
    navigate("/adicionar-receita")
}

export const goToRecipeDetail = (navigate, id) => {
    navigate(`/detalhe/${id}`)
}

export const goToRecipesList = (navigate) => {
    navigate("/")
}
