import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from "./paginas/login/Login";
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroPost from './componentes/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './componentes/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import CadastroTema from './componentes/temas/cadastroTema/CadastroTema';
import DeletarTema from './componentes/temas/deletarTema/DeletarTema';
import ListaTema from './componentes/temas/listatema/ListaTema';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{minHeight: '100vh'}}>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPost />} />
            <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/formularioTema/:id" element={<CadastroTema />} />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;