import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import SmallCard from './components/CardPequeno/CardPequeno';
import MinhaFoto from './mariaisabel.png';
import Logo from './gb.png';
import Nasa from './nasa.png';
import Email from './email.png';
import Local from './local.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaFoto} 
          nome="Maria Isabel" 
          descricao="Oi, eu sou a Maria Isabel. Sou aluna da Labenu. Adoro participar das aulas e aprender coisas novas todos os dias."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <SmallCard 
          imagem={Email} 
          nome="Email:" 
          descricao="maria@email.com.br"
        />
        </div>

        <div className="page-section-container">
        <SmallCard 
          imagem={Local} 
          nome="Endereço:" 
          descricao="Cor-de-Rosa, Mar Azul"
        />
        </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Logo}
          nome="Grupo Boticário" 
          descricao="Ajudando a construir o ecossistema de beleza!" 
        />
        
        <CardGrande 
          imagem={Nasa}
          nome="Nasa" 
          descricao="Produzindo ciência!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
