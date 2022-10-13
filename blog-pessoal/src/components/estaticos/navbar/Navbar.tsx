import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToken } from '../../../store/tokens/action';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './Navbar.css';

function Navbar() {

  let history = useNavigate()
  let dispatch = useDispatch()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

    function goLogout() {
        dispatch(addToken(''))
        
        alert("Usuário deslogado")
        history("/login")
    }

    let navBarComponent

    if(token !== '') {
      navBarComponent = <AppBar position="static">
      <Toolbar variant="dense">
        <Box className="cursor">
          <Typography variant="h5" color="inherit">
            BlogPessoal
          </Typography>
        </Box>

        <Grid container justifyContent="flex-end">
          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Link to="/home" className="navLink">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor">
              <Link to="/posts" className="navLink">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor">
              <Link to="/temas" className="navLink">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor">
              <Link to='/cadastroTema' className="navLink">
              <Typography variant="h6" color="inherit">
                Cadastrar Temas
              </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor">
              <Link to='/perfil' className="navLink">
              <Typography variant="h6" color="inherit">
                Perfil
              </Typography>
              </Link>
            </Box>

            <Box mx={1} className="cursor" onClick={goLogout}>
              
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              
            </Box>
          </Box>
        </Grid>
      </Toolbar>
    </AppBar>
    }

    
  return (
    <>
      {navBarComponent}
    </>
  );
}

export default Navbar;
