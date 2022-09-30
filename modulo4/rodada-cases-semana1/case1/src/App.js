import './App.css';
import React from "react";
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
