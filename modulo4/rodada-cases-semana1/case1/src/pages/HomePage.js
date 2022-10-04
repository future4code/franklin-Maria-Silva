import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import logo from "../assets/logo.png";
import { HeaderContainer, ImgContainer, Logo, LoteriaContainer, Numeros, NumerosContainer, Select } from "./styled";
import { SideBar } from "../components/SideBar";
import { colors } from "../constants/colors";


const HomePage = () => {
    const [loterias, setLoterias] = useState([]);
    const [input, setInput] = useState('MEGA-SENA');
    const [concurso, setConcurso] = useState({ concursoId: 0});
    const [numerosSorteados, setNumerosSorteados] = useState([]);
    const [data, setData] = useState('10');
    
    const mostraLoteria = () => {
       axios.get(`${BASE_URL}/loterias`, {
    }).then((response) => {
        setLoterias(response.data);
    }).catch((error) => {
        console.log(error.message)
    }); 
    }
    useEffect(mostraLoteria, []);   


    const concursosLoterias = () => {
        axios.get(`${BASE_URL}/loterias-concursos`, {
     }).then((response) => {
      setConcurso(response.data[colors[input].index]);
     }).catch((error) => {
         console.log(error.message)
     }); 
     }

     useEffect(concursosLoterias, [input]); 


     const concursos = () => {
        axios.get(`${BASE_URL}/concursos/${concurso.concursoId}`, {
     }
     ).then((response) => {
        setNumerosSorteados(response.data.numeros);
        setData(novaData(response.data.data))       
     }).catch((error) => {
         console.log(error.message)
     }); 
     }

     useEffect(concursos, [concurso, input]);    
     
    const novaData = (data) => {
        const dataFormatada = data.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')
        return dataFormatada
    }

    return (
        <LoteriaContainer>
            <SideBar color={colors[input].cor}/> 
            <HeaderContainer>
                <div>
                    <Select value={input} onChange={(e) => setInput(e.target.value)}> 
                        {loterias?.map((loteria) => {
                        return <option key={loteria.id} value={loteria.nome.toUpperCase()}>{loteria.nome.toUpperCase()}</option>
                        })}  
                    </Select>
                </div>
                <ImgContainer>
                    <Logo src={logo} alt="logo da loteria"/>
                    <p>{input}</p>
                </ImgContainer>
                <div>
                    <p>Concurso</p>
                    <strong>{concurso.concursoId} - {data}</strong>
                </div>
            </HeaderContainer>
            <div>
                <NumerosContainer>
                   {numerosSorteados?.map((numeros) => {
                    return <Numeros>{numeros}</Numeros>
                     })}  
                </NumerosContainer>   
            <div>
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a caixa</p> 
            </div> 
            </div>
           
        </LoteriaContainer>
    )
}

export default HomePage