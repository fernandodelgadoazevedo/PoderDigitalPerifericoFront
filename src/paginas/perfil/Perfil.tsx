import './Perfil.css'
import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';

function Perfil() {
    return (
        <>
            <Grid className='cointainer'  container spacing={2}>
                <Grid item xs={4}>
                <Box className="caixa">
                <Typography className='titulo' variant='h4' align='center'>Atualizar perfil</Typography>
                <TextField label='Nome' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
                <TextField label='senha' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
                <TextField label='Comfirmar seha' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
                <TextField label='Foto' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
                <Button type='submit' variant='contained' color='primary'>Atualizar perfil</Button>

                </Box>
                </Grid>

                 <Grid item xs={6}>
                <Box className='posts'>
                <TabPostagem />   
                </Box>
                </Grid>
  
                <Grid item xs={8}>
                 
                </Grid>
            </Grid>
        </>
    );
}

export default Perfil;