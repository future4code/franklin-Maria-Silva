import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API, API_KEY, BASE_IMG, LANGUAGE } from "../../urls";
import { ImgMovieDetailed, ImgPoster, InformationContainer, MovieCastCard, MovieCrew, MovieCrewCard, MovieDetaileContainer } from "./styled";

const MoviePage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [movies, setMovies] = useState({});
    const [credits, setCredits] = useState({});

    const MoviesDetails = () => {
        axios.get(`${API}${params.id}?${API_KEY}${LANGUAGE}`)
        .then((response) => {
            setMovies(response.data)
            console.log(response.data)
            console.log(response.data.cast)
        }).catch((error) => {
            console.log(error)
        })
    };

    useEffect(() => {
        MoviesDetails();
    }, []);

    const genre = movies.genres
    const genres = genre && genre.map((genre) => {
        return (
            <p key={genre.id}>{genre.name}</p>
        )
    })


    const MoviesCredits = () => {
        axios.get(`${API}${params.id}/credits?${API_KEY}${LANGUAGE}`)
        .then((response) => {
            setCredits(response.data)
            console.log(response.data, "creditos")
        }).catch((error) => {
            console.log(error)
        })
    };

    useEffect(() => {
        MoviesCredits();
    }, []);

    const credit = credits.crew
    const movieCredits = credit && credit.map((credit) => {
        return (
            <MovieCrewCard>
                <p>{credit.name}</p>
                <p>{credit.job}</p>
            </MovieCrewCard>
            
        )
    })


    const cast = credits.cast
    const movieCast = cast && cast.map((cast) => {
        return (
            <MovieCastCard>
                <ImgPoster src={`${BASE_IMG}${cast.profile_path}`}/>
                <p>{cast.name}</p>
                <p>{cast.character}</p>
            </MovieCastCard>
            
        )
    })

    return (
        <MovieDetaileContainer>
            <div>
                {movies && (
                    <div>
                        <ImgMovieDetailed src={`${BASE_IMG}${movies?.poster_path}`} alt="Poster"/>
                        <div>
                            <h1>{movies.title}</h1>
                            <h1>{movies.release_date?.substr(0,4)}</h1>
                            <h3>{movies.release_date + " (BR)"}</h3>
                            <p>{genres}</p>
                            <p>{movies.runtime} m</p>
                            <p>{movies.vote_average} Avaliação dos usuários</p>
                            <h2>Sinopse</h2>
                            <p>{movies.overview}</p>
                            <MovieCrew>{movieCredits}</MovieCrew>
                        </div>
                    </div>
                )     
                }
                <InformationContainer>
                    <div>
                        <p>{movieCast}</p>
                    </div>
                    <div>
                        <p>trailer</p>
                    </div>
                    <div>
                        <p>recomendações</p>
                    </div>
                </InformationContainer>
            </div>
           
        </MovieDetaileContainer>

)}

export default MoviePage