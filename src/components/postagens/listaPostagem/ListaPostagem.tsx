import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Postagem from '../../../model/Postagem';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';

function ListaPostagem() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === '') {
      alert('Faça login primeiro');
      navigate('/login');
    }
  }, [token]);

  async function getPostagem() {
    await busca('/postagens', setPosts, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getPostagem();
  }, [posts.length]);

  return (
    <>
      {posts.map((post) => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>
              <Typography variant="body2" component="p">
                {post.tema?.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                Postado por: {post.usuario?.nome}
              </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioPostagem/${post.id}`}
                  className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size="small" color="primary">
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                  to={`/deletarPostagem/${post.id}`}
                  className="text-decorator-none">
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
    </>
  );
}

export default ListaPostagem;
