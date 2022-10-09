import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import { AppBar, Toolbar, Box, Typography, Grid } from "@mui/material";
import "./Navbar.css";

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout(){
      setToken('')
      alert("Usuário deslogado")
      navigate('/login')
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

            <Box display="flex" justifyContent="start">
              <Link to= '/home' className='cursor'>
                <Box mx={1} className="cursor">
                  <Typography variant="h6" color="inherit">
                  Home
                  </Typography>
                </Box>
              </Link>

            <Link to= '/posts'className='cursor'>
              <Box mx={1} >
                  <Typography variant="h6" color="inherit">
                  Postagens
                  </Typography>
              </Box>
                </Link>

            <Link to= '/temas' className='cursor'>
              <Box mx={1}>
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>

            <Link to= '/formularioTema' className='cursor'>
              <Box mx={1} >
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
            </Link>

            <Link to='/login' className='cursor'>
              <Box mx={1} onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
