export const goToBackPage = (navigate) => {
    navigate(-1)
}

export const goToMoviePage = (navigate, id) => {
    navigate(`movie/${id}`)
}

export const goToHomePage = (navigate) => {
    navigate("/")
}
