import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import CadastroUsuario from './paginas/cadastro/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import Perfil from './components/perfil/Perfil';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer />
      
      <Navbar />

      <div style={{minHeight: '80vh'}}>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      
      <Footer />
    
  </BrowserRouter>
    </Provider>
  );
}

export default App;