import './Perfil.css'
import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';

import ListaPostagem from '../postagens/listaPostagem/ListaPostagem';

function Perfil() {
    return (
        <>
            <Grid className='cointainer'  container spacing={2}>
                <Grid item xs={12}>
                <Box className="caixa">
                <Typography className='titulo' variant='h4' align='center'>Atualizar perfil</Typography>
                <TextField label='Nome' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
                <TextField label='senha' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
                <TextField label='Comfirmar seha' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
                <TextField label='Foto' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
                <Button type='submit' variant='contained' color='primary'>Atualizar perfil</Button>

                </Box>
                </Grid>

                 <Grid item xs={12}>
                <Box className='posts'>
                <h1> Suas Postagens</h1>
                <ListaPostagem />   
                </Box>
                </Grid>
  
                <Grid item xs={8}>
                 
                </Grid>
            </Grid>
        </>
    );
}

export default Perfil;