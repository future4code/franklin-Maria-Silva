import React, {useState} from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

//código anterior:

// function App() {
// return(
//   <MainContainer>
//            <Post
//             nomeUsuario={'paulinha'}
//             fotoUsuario={'https://picsum.photos/50/50'}
//             fotoPost={'https://picsum.photos/200/150'}
//           />
//           <Post
//             nomeUsuario={'joaninha'}
//             fotoUsuario={'https://i.picsum.photos/id/337/50/50.jpg?hmac=T1v6-VY_XdbHl49X8ikPQvfi969Wy4EKg0TDD2SqUvY'}
//             fotoPost={'https://i.picsum.photos/id/41/200/150.jpg?hmac=o-njapGaScIE9pfdSKPRMjVNtHTZUjerBwFBcxnR_FA'}
//           />
//           <Post
//             nomeUsuario={'carlinha'}
//             fotoUsuario={'https://i.picsum.photos/id/520/50/50.jpg?hmac=DwSHsbqNOfZNHs2UkytBbFRXgixKYUla21nUeYUwtFg'}
//             fotoPost={'https://i.picsum.photos/id/354/200/150.jpg?hmac=FZc3oL5eyXqlbV_HTnZzMqQQC7gj8LFHkCi0OH_8vLo'}
//           />
//         </MainContainer>
// )

// }

const App = () => {
  const [postagens, setPostagens] = useState ({
    postagem: [
      {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
      },
      {
      nomeUsuario: "joaninha",
      fotoUsuario: "https://i.picsum.photos/id/337/50/50.jpg?hmac=T1v6-VY_XdbHl49X8ikPQvfi969Wy4EKg0TDD2SqUvY",
      fotoPost: "https://i.picsum.photos/id/41/200/150.jpg?hmac=o-njapGaScIE9pfdSKPRMjVNtHTZUjerBwFBcxnR_FA"
      },
      {
      nomeUsuario:"carlinha",
      fotoUsuario: "https://i.picsum.photos/id/520/50/50.jpg?hmac=DwSHsbqNOfZNHs2UkytBbFRXgixKYUla21nUeYUwtFg",
      fotoPost: "https://i.picsum.photos/id/354/200/150.jpg?hmac=FZc3oL5eyXqlbV_HTnZzMqQQC7gj8LFHkCi0OH_8vLo"
      }
      ]
  });

    const [valorNomeUsuario, setValorNomeUsuario] = useState("")
    const [valorFotoUsuario, setValorFotoUsuario] = useState("")
    const [valorFotoPost, setValorFotoPost] = useState("")

    const onChangeValorUsuario = (event) => {
      setValorNomeUsuario(event.target.value);
    };

    const onChangeValorFotoUsuario = (event) => {
      setValorFotoUsuario(event.target.value);
    };

    const onChangeValorFotoPost = (event) => {
      setValorFotoPost(event.target.value);
    };

    const AdicionaPostagem = () => {
      const novaPostagem = {
        nomeUsuario: valorNomeUsuario,
        fotoUsuario: valorFotoUsuario,
        fotoPost: valorFotoPost
      };

    const novasPostagens = [...postagens.postagem, novaPostagem];

    setPostagens(novasPostagens);
    };

    const listaDePostagens = postagens.postagem.map((postagem) => {
    return (
      <Post nomeUsuario = {postagem.nomeUsuario} fotoUsuario = {postagem.fotoUsuario} fotoPost = {postagem.fotoPost}/>
        
    );
  });

    return (
      <MainContainer>
        <input
          value={valorNomeUsuario}
          onChange={onChangeValorUsuario}
          placeholder={"Usuário"}
        />
        <input
          value={valorFotoUsuario}
          onChange={onChangeValorFotoUsuario}
          placeholder={"Foto do Usuário"}
        />
        <input
          value={valorFotoPost}
          onChange={onChangeValorFotoPost}
          placeholder={"Foto do Post"}
        />
        <button onClick={AdicionaPostagem}>Publicar no Feed</button>
        
        <br/>

        <div>{listaDePostagens}</div>

      </MainContainer>
   
    )

}

export default App;
