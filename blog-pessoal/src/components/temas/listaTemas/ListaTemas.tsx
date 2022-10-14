import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Tema from '../../../model/Tema';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';

function ListaTemas() {
  let navigate = useNavigate();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token === '') {
      alert('Faça login');
      navigate('/login');
    }
  }, [token]);

  async function getTemas() {
    await busca('/tema', setTemas, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getTemas();
  }, [temas.length]);

  return (
    <>
      <Container>
        {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
        {temas.map((tema) => (
          <Box m={2} key={tema.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Tema
                </Typography>
                <Typography variant="h5" component="h2">
                  Tema {tema.id} - {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/formularioTema/${tema.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="marginLeft"
                        size="small"
                        color="primary"
                      >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Container>
    </>
  );
}

export default ListaTemas;
