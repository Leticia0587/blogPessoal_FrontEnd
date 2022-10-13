import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';


function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let footerComponent;

  if(token !== '') {
    footerComponent = <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Grid alignItems="center" item xs={12}>
      <Box className='fundo-footer'>
        <Box
          paddingTop={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{ color: 'white' }}
          >
            Siga-nos nas redes sociais{' '}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <a
            href="https://github.com/Leticia0587"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className='redesSociais'/>
          </a>
          <a
            href="https://www.instagram.com/leticia.araujo05/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className='redesSociais insta ' />
          </a>
          <a
            href="https://www.linkedin.com/in/let%C3%ADcia-araujo-758583210/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className='redesSociais' />
          </a>
        </Box>
      </Box>
      <Box className='fundo-footer'>
        <Box paddingTop={1}>
          <Typography
            variant="subtitle2"
            align="center"
            gutterBottom
            style={{ color: 'white' }}
          >
            © 2022 Copyright:
          </Typography>
        </Box>
        <Box>
          <a target="_blank" href="https://brasil.generation.org">
            <Typography
              variant="subtitle2"
              style={{ color: 'white' }}
              align="center"
            >
              brasil.generation.org
            </Typography>
          </a>
        </Box>
      </Box>
    </Grid>
  </Grid>
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
