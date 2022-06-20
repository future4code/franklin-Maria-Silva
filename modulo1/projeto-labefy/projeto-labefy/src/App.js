import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const LabefyContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
background-color: #ddb7d0;
width: 50em;
height: auto;
margin: 3em auto;
padding: 20px 1px;
text-align: center;
color: #FFFFFF;
`
const Titulo = styled.h1 `
color: #bf79a4;
`

const Button = styled.button `
width: 10em;
backgrdound-color: #c38fb4;
border: none;
border-radius: 4px;
font-weight: bold;
color: #bf79a4;
`

const CriarPlaylist = styled.div `
justify-content: center;
`

const MinhasPlaylists = styled.li `
display: flex;
background-color: #bf79a4;
margin: 10px;
padding: 10px;
border:2px solid #58336A;
justify-content: space-evenly;
width: 40em;
`
const Digitar = styled.input `
margin: 0px 3px;
padding: 0px 4px;
border: none;
border-radius: 4px;
`

const MinhasMusicas = styled.li `
display: flex;
background-color: #c38fb4;
margin: 10px;
padding: 10px;
border:2px solid #58336A;
justify-content: space-evenly;
width: 20em;
`


function App() {
  
  const [inputPlaylist, setInputPlaylist] = useState('');
  const [playlist, setPlaylist] = useState([]);
  const [mostraMusicas, setMostraMusicas] = useState([]);
  const [inputNomeDaMusica, setInputNomeDaMusica] = useState('');
  const [inputArtista, setInputArtista] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [IdDaPlaylist, setIdDaPlaylist] = useState('');


  const onChangeInputPlaylist = (event) => {
    setInputPlaylist(event.target.value)
  };

  const onChangeInputNomeDaMusica = (event) => {
    setInputNomeDaMusica(event.target.value)
  };

  const onChangeInputArtista = (event) => {
    setInputArtista(event.target.value)
  };

  const onChangeInputUrl = (event) => {
    setInputUrl(event.target.value)
  };

  const criarPlaylist = () => {
    const body = {
      name: inputPlaylist
    };

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      headers: {
      Authorization: "maria-silva-franklin"
      }
      }).then((response) => {
        alert("Playlist criada com sucesso!")
        console.log("deu bom")
        setInputPlaylist('');
      }).catch((error) => {
        alert("Houve um erro ao tentar criar a playlist. Tente novamente!")
        console.log("deu ruim")
      })	
    };

  const exibirPlaylists = () =>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
      headers:{
        Authorization: "maria-silva-franklin"
      }
      }).then((response) => {
        setPlaylist(response.data.result.list)
      }).catch((error) => {
        console.log(error.response)
     })	
    };

  useEffect(exibirPlaylists, []);

  const deletarPlaylist = (playlistId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,  {
      headers:{
        Authorization: "maria-silva-franklin"
      }
    }).then((response) => {
      exibirPlaylists();
    }).catch((error) =>{
      console.log(error.response)
    })
  };


  const mostrarMusicasDaPlaylist = (playlistId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,  {
      headers:{
        Authorization: "maria-silva-franklin"
      }
    }).then((response) => {
      console.log(response);
      setMostraMusicas(response.data.result.tracks)
    }).catch((error) =>{
      console.log(error.response)
    })
    setIdDaPlaylist(playlistId)
  };

  const adicionarMusica = () =>{
    const body = {
      name: inputNomeDaMusica,
      artist: inputArtista,
      url: inputUrl
    };
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${IdDaPlaylist}/tracks`, body, {
      headers:{
        Authorization: "maria-silva-franklin"
      }
    }).then((response) => {
      console.log("adicionar musicas")
      mostrarMusicasDaPlaylist(IdDaPlaylist);
      setInputNomeDaMusica('');
      setInputArtista('');
      setInputUrl('');
    }).catch((error) =>{
      console.log(error.response)
    })
  };

  return (
    <LabefyContainer>
      <Titulo>LABEFY</Titulo>
      <CriarPlaylist>
        <h2>Adicione uma nova playlist</h2>
        <Digitar onChange={onChangeInputPlaylist} value={inputPlaylist} placeholder="Digite o nome da playlist"/>
        <Button onClick={criarPlaylist}>Criar Playlist</Button>  
      </CriarPlaylist>
      <div> 
        <h2>Minhas Playlists</h2>
        {/* <button onClick={exibirPlaylists}>Minhas Playlists</button> */}
        {playlist.map((playlist) => {
        return <MinhasPlaylists key={playlist.id}>{playlist.name}
        <div><Button onClick={() => mostrarMusicasDaPlaylist(playlist.id)}>Ver Playlist</Button></div>
        <div><Button onClick={() => deletarPlaylist(playlist.id)}>Deletar Playlist</Button></div>
        </MinhasPlaylists>;
        })}
      </div>
      <div>
        <h3>Musicas da playlist selecionada</h3>
        {mostraMusicas.map((musicas) => {
          return <MinhasMusicas key={musicas.id}>{musicas.name}</MinhasMusicas>
        })}
      </div>
      <div>
        <h3>Adicione uma música na sua Playlist</h3>
        <Digitar onChange={onChangeInputNomeDaMusica} value={inputNomeDaMusica} placeholder="Digite o nome da música"/>
        <Digitar onChange={onChangeInputArtista} value={inputArtista} placeholder="Digite o nome do artista"/>
        <Digitar onChange={onChangeInputUrl} value={inputUrl} placeholder="Digite o link da música"/>
        <Button onClick={adicionarMusica}>Adicionar Música</Button>
      </div>
    </LabefyContainer>
  );
}

export default App;
