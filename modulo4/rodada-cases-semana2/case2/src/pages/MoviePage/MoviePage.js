import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API, API_KEY, BASE_IMG, LANGUAGE } from "../../urls";
import { Detailes, H2, H3, HeaderContainer, ImgMovieDetailed, ImgPoster, InformationContainer, MovieCastCard, MovieCastContainer, MovieCrew, MovieCrewCard, MovieDetaileContainer } from "./styled";

const MoviePage = () => {
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
    });

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
    });

    const credit = credits.crew
    const movieCredits = credit && credit.map((credit) => {
        return (
            <MovieCrewCard>
                <strong>{credit.name}</strong>
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
                {movies && (
                    <HeaderContainer>
                        <div>
                            <ImgMovieDetailed src={`${BASE_IMG}${movies?.poster_path}`} alt="Poster"/>
                        </div>
                        <Detailes>
                            <h1>{movies.title} ({movies.release_date?.substr(0,4)})</h1>
                            <H3>{movies.release_date + " (BR)"} - {movies?.genres?.map(genre => genre.name).join(', ')} - {movies.runtime} m</H3>
                            {/* <p>{movies.vote_average} Avaliação dos usuários</p> */}
                            <H2>Sinopse</H2>
                            <p>{movies.overview}</p>
                            <MovieCrew>{movieCredits}</MovieCrew>
                        </Detailes>
                    </HeaderContainer>
                )     
                }
                <InformationContainer>
                    <MovieCastContainer>
                        {movieCast}
                    </MovieCastContainer>
                    <div>
                        <p>trailer</p>
                    </div>
                    <div>
                        <p>recomendações</p>
                    </div>
                </InformationContainer>
        </MovieDetaileContainer>

)}

export default MoviePage