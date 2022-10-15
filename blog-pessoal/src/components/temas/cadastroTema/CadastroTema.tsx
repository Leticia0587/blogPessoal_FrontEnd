import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../model/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('token');
  const [tema, setTema] = useState<Tema>({
      id: 0,
      descricao: ''
  })

  useEffect(() => {
      if (token == "") {
          toast.error('Você precisa estar logado!',{
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
          navigate("/login")
  
      }
  }, [token])

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscaId(`/temas/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

      function updatedTema(e: ChangeEvent<HTMLInputElement>) {

          setTema({
              ...tema,
              [e.target.name]: e.target.value,
          })
  
      }
      
      async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
          e.preventDefault()
          console.log("tema " + JSON.stringify(tema))
  
          if (id !== undefined) {
              console.log(tema)
              put(`/temas`, tema, setTema, {
                  headers: {
                      'Authorization': token
                  }
              })
              toast.success('Tema atualizado com sucesso!',{
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  theme: "colored",
                  progress: undefined,
              });
          } else {
              post(`/temas`, tema, setTema, {
                  headers: {
                      'Authorization': token
                  }
              })
              toast.success('Tema cadastrado com sucesso!',{
                  position: 'top-right',
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  theme: "colored",
                  progress: undefined,
              });
          }
          back()
  
      }
  
      function back() {
          navigate('/temas')
      }

  return (
    <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Theme registration form</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="description" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='btnAtualizar'>
                finish
                </Button>
            </form>
        </Container>
      )
    }
export default CadastroTema;
