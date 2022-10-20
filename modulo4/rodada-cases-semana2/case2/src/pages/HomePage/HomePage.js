import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { API, API_KEY, BASE_URL, LANGUAGE } from "../../urls";
import { Generos, GenerosContainer, H2, MovieContainer, Movies, Title, TitleContainer } from "./styled";
import MovieCard from "../../components/MovieCard/MovieCard";
import { goToMoviePage } from "../../routes/coordinator";


const HomePage = () => {
    const [generos, setGeneros] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const navigate = useNavigate();

    const genres = () => {
        axios.get(`${BASE_URL}genre/movie/list?${API_KEY}${LANGUAGE}`)
       .then((response) => {
            console.log(response.data.genres)
            setGeneros(response.data.genres)
       })
       .catch((error) => {
        console.log(error)
       })
    }

    useEffect(() => {
        genres();
    }, [])


    const getPopularMovies = () => {
        axios.get(`${API}popular?${API_KEY}${LANGUAGE}&page=1`)
       .then((response) => {
            console.log(response.data.results)
            setPopularMovies(response.data.results)
       })
       .catch((error) => {
        console.log(error)
       })
    }

    useEffect(() => {
        getPopularMovies();
    }, [])

    const onClickMovie = (id) => {
        goToMoviePage(navigate, id);
    }


    return (
        <div>
            <div>
                <TitleContainer>
                    <Title>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Title>
                </TitleContainer>
                <H2>Filtre por:</H2>  
                <GenerosContainer>
                    {generos?.map((genero) => {
                        return <Generos key={genero.id} value={genero.name}>{genero.name}</Generos>
                        })}  
                </GenerosContainer>
                <div>
                    <MovieContainer>
                       {popularMovies === 0 && <p>Carregando filmes...</p>}
                       {popularMovies.length > 0 && popularMovies.map((movie) => {
                        return( 
                            <Movies onClick={() => onClickMovie(movie.id)}>
                                {/* <p key={movie.id} value={movie.title}>{movie.title}</p> */}
                                <MovieCard key={movie.id} movie={movie}/>
                            </Movies>
                        )
                        })
                        }  
                    </MovieContainer>     
                </div>
            </div>
        </div>
    )
}

export default HomePage