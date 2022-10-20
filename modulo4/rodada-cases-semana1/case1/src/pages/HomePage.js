import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import logo from "../assets/logo.png";
import { HeaderContainer, ImgContainer, Logo, LoteriaContainer, NomeLoteria, NumeroConcurso, NumeroConcursoMobile, Numeros, NumerosContainer, Select, TextoAViso } from "./styled";
import { SideBar } from "../components/SideBar";
import { colors } from "../constants/colors";
import { SideBarMobile } from "../components/SideBarMobile";


const HomePage = () => {
    const [loterias, setLoterias] = useState([]);
    const [input, setInput] = useState('MEGA-SENA');
    const [concurso, setConcurso] = useState();
    const [numerosSorteados, setNumerosSorteados] = useState([]);
    const [data, setData] = useState('10');
    
    const mostraLoteria = () => {
       axios.get(`${BASE_URL}`, {
    }).then((response) => {
        setLoterias(response.data);
    }).catch((error) => {
        console.log(error.message)
    }); 
    }
    useEffect(mostraLoteria, []);   

     const concursos = () => {
        axios.get(`${BASE_URL}${input.toLowerCase()}/latest`, {
     }
     ).then((response) => {
        setNumerosSorteados(response.data.dezenas);
        setData(response.data.data)    
        setConcurso(response.data.concurso)
     }).catch((error) => {
         console.log(error.message)
     }); 
     }

     useEffect(concursos, [concurso, input]);    
     
    return (
        <LoteriaContainer>
            <SideBarMobile color={colors[input].cor}/> 
            <HeaderContainer>
                <Select value={input} onChange={(e) => setInput(e.target.value)}> 
                    {loterias?.map((loteria) => {
                    return <option key={loteria.id} value={loteria.toUpperCase()}>{loteria.toUpperCase()}</option>
                    })}  
                </Select>
                <ImgContainer>
                    <Logo src={logo} alt="logo da loteria"/>
                    <NomeLoteria>{input}</NomeLoteria>
                </ImgContainer>
                <NumeroConcurso>
                    <p>Concurso</p>
                    <strong>{concurso} - {data}</strong>
                </NumeroConcurso>
                <NumeroConcursoMobile>{`CONCURSO Nº ${concurso}`}</NumeroConcursoMobile>
            </HeaderContainer>
            <SideBar color={colors[input].cor}/> 
            <div>
                <NumerosContainer>
                   {numerosSorteados?.map((numeros) => {
                    return <Numeros>{numeros}</Numeros>
                     })}  
                </NumerosContainer>   
                <TextoAViso>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</TextoAViso> 
            </div>
        </LoteriaContainer>
    )
}

export default HomePage