import React from 'react';
import { Container, Typography, Box, FormControl, TextField, Button } from '@mui/material'

export const FormComponent = () => {

  return (
    <React.Fragment>
      <Container sx={{ backgroundColor: 'white', borderRadius: '20px', marginTop: '25px' }}>
        <Typography variant="h3" color="black" textAlign={'center'} margin={3}>Contact</Typography>
        <FormControl className="form" fullWidth margin='normal'>
          <Box component={'div'} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
            <TextField
              id="formPrenom"
              label="Prénom *"
              sx={{ width: '45%' }}
            />
            <TextField
              id="formNom"
              label="Nom *"
              sx={{ width: '45%' }}
            />
          </Box>

          <Box component={'div'} width={'100%'} marginTop={5}>
            <TextField
              id=""
              label="Adresse E-mail"
              fullWidth
            />
          </Box>
          <Box component={'div'} width={'100%'} marginTop={5} marginBottom={5}>
            <TextField
              id=""
              label="Message"
              fullWidth
              multiline
              size={'medium'}
              inputProps={{
                style: {
                  minHeight: '50px'
                }
              }}
            />
          </Box>
          <Button variant='contained' sx={{ marginTop: '15px' }}>Envoyer</Button>
        </FormControl>
      </Container>
    </React.Fragment>
  )
};