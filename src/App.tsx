import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './paginas/home/Home'
import Login from './paginas/login/Login'
import Cadastro from './paginas/cadastro/Cadastro'

function App() {  
  return (
    <>
      <Navbar/>
      <Cadastro />
      <Login />      
      <Home />
      <Footer />
    </>
  );
}

export default App;
