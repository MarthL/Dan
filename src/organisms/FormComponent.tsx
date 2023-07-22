import React from 'react';
import { Container, Typography, Box, FormControl, FormLabel, FormHelperText, InputLabel, Input, TextField } from '@mui/material'

export const FormComponent = () => {

  return (
    <React.Fragment>
      <Box marginTop={5}>
        <Typography variant="h3" color="white" textAlign={'center'}>Une question ? Contactez-moi</Typography>
        <Container sx={{ backgroundColor: 'white', padding: '50px', marginTop: '20px', borderRadius: '20px' }}>
          <FormControl className="form" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', flexFlow: 'row wrap' }}>
            <TextField
              id="formPrenom"
              label="Prénom *"
              sx={{ width: '50%' }}
              InputLabelProps={{
                sx: {
                  paddingLeft: '25px',
                }
              }}

            />
            <TextField
              id="formNom"
              label="Nom *"
              sx={{ width: '50%' }}
              InputLabelProps={{
                sx: {
                  paddingLeft: '25px',
                }
              }}
            // value={}
            // onChange={ }

            />
            <TextField
              id=""
              label="Adresse E-mail"
              fullWidth
              InputLabelProps={{
                sx: {
                  paddingLeft: '25px',
                }
              }}
            // value={ }
            // onChange={ }
            />
            <TextField
              id=""
              label="Message"
              fullWidth
              InputLabelProps={{
                sx: {
                  paddingLeft: '25px',
                }
              }}
            // value={ }
            // onChange={ }
            />
          </FormControl>
        </Container>
      </Box>
    </React.Fragment>
  )
};