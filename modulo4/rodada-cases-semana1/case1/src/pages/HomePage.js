import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
// import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Numeros, NumerosContainer } from "./styled";


const HomePage = () => {
    const [loterias, setLoterias] = useState([]);
    const [numerosSorteados, setNumerosSorteados] = useState([]);

    // const navigate = useNavigate()

    const mostraLoteria = () => {
       axios.get(`${BASE_URL}/loterias`, {
    }).then((response) => {
        console.log(response.data)
        setLoterias(response.data);
    }).catch((error) => {
        console.log(error.message)
    }); 
    }

    useEffect(mostraLoteria, []);   


    const concursosLoterias = () => {
        axios.get(`${BASE_URL}/loterias-concursos`, {
     }).then((response) => {
         console.log(response.data[0].concursoId, "concurso")
     }).catch((error) => {
         console.log(error.message)
     }); 
     }

     useEffect(concursosLoterias, []); 


     const concursos = () => {
        axios.get(`${BASE_URL}/concursos/2359`, {
     }
     ).then((response) => {
        setNumerosSorteados(response.data.numeros);
        console.log(response.data.numeros, "números sorteados")
        console.log(response.data.data, "data do sorteio")
        console.log(response.data.id, "id concurso")
       
     }).catch((error) => {
         console.log(error.message)
     }); 
     }

     useEffect(concursos, []);     

    return (
        <div>
            <div>
                <select> 
                    {loterias.map((loteria) => {
                    return <option key={loteria.id} value={loteria.id}>{loteria.nome.toUpperCase()}</option>
                    })}  
                </select>
            </div>
            <div>
                <img src={logo} alt="logo da loteria"/>
            </div>
            <NumerosContainer>
                {numerosSorteados.map((numeros) => {
                return <Numeros>{numeros}</Numeros>
                })}
            </NumerosContainer>     
        </div>
    )
}

export default HomePage