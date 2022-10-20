import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToken } from '../../../store/tokens/action';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import './Navbar.css';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
      dispatch(addToken(''));
      toast.info('usuário deslogado',{
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
      });
      navigate('/login')
  }

  var navbarComponent;

    if(token !== '') {
      navbarComponent = <AppBar position="static">
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
      {navbarComponent}
    </>
  );
}

export default Navbar;
