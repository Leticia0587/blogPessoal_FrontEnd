import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import purple from "@material-ui/core/colors/purple";
import "./Footer.css";


function footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
              <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais</Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                <InstagramIcon className="redes" />
              </a>
              <a href="https://www.linkedin.com/in/leticiadearaujo0305/" target="_blank">
                <LinkedInIcon  className="redes" />
              </a>
              <a href="https://github.com/Leticia0587" target="_blank">
                <GitHubIcon  className="redes" />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" className="textos">© 2022 Copyright:</Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography variant="subtitle2" className="textos" align="center">brasil.generation.org</Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid> 
    </>
  );
}

export default footer;
