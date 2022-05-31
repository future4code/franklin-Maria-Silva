import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'joaninha'}
            fotoUsuario={'https://i.picsum.photos/id/337/50/50.jpg?hmac=T1v6-VY_XdbHl49X8ikPQvfi969Wy4EKg0TDD2SqUvY'}
            fotoPost={'https://i.picsum.photos/id/41/200/150.jpg?hmac=o-njapGaScIE9pfdSKPRMjVNtHTZUjerBwFBcxnR_FA'}
          />
          <Post
            nomeUsuario={'carlinha'}
            fotoUsuario={'https://i.picsum.photos/id/520/50/50.jpg?hmac=DwSHsbqNOfZNHs2UkytBbFRXgixKYUla21nUeYUwtFg'}
            fotoPost={'https://i.picsum.photos/id/354/200/150.jpg?hmac=FZc3oL5eyXqlbV_HTnZzMqQQC7gj8LFHkCi0OH_8vLo'}
          />
        </MainContainer>
)

}


export default App;
