import React from "react";
import { BASE_IMG } from "../../urls";
import { ImgMovie, MovieCards } from "./styled";


const MovieCard = ({movie}) => {
    return (
        <MovieCards>
            <ImgMovie src={BASE_IMG + movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <h3>{movie.release_date.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}</h3>
        </MovieCards>
    )
}

export default MovieCard