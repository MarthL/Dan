import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Button, Typography, Container, Grid, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

export const CarouselCustom = () => {
  let opinions: any[] = [
    {
      name: 'test 1',
      description: 'here is the description of the first opinion here is the description of the first opinion here is the description of the first opinion here is the description of the first opinionhere is the description of the first opinionhere is the description of the first opinionhere is the description of the first opinionhere is the description of the first opinionhere is the description of the first opinionhere is the description of the first opinionhere is the description of the first opinion',
      author: 'Martin Aubertin',
      position: 'Web Developer',
      img: '',

    },
    {
      name: 'Random review 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit magnam soluta odio quam id, non suscipit consequuntur rem dolores sunt quos maiores sit recusandae perferendis error accusantium, eum dolorum.',
      author: 'Dani Boi',
      position: 'Streamer',
      img: '',
    }
  ];

  function Item(opinion: any) {
    const { name, description, author, position, img } = opinion;

    return (
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xs={12} mt={5}>
          <Typography variant="h3" color="white" textAlign={'center'} padding={3}>{name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="white" textAlign={'center'} margin={5}>{description}</Typography>
        </Grid>
        <Grid item xs={12} textAlign={'center'}>
          <Avatar sx={{ bgcolor: deepOrange[500], margin: 'auto', marginBottom: '25px' }}>N</Avatar>
          <Typography variant="h4" color="white">{author}</Typography>
          <Typography variant="h6" color="white">{position}</Typography>
        </Grid>
      </Grid>
    )
  }

  return (
    <React.Fragment>
      <Container>
        <Box
          bgcolor={"#1A1919"}
          color={'white'}
          marginLeft={'auto'}
          borderRadius={"25px"}
          border={"grey"}
          marginTop={5}
        >
          <Carousel height={'60vh'} navButtonsAlwaysVisible>
            {opinions.map((opinion, i) => <Item key={i} {...opinion} />)}
          </Carousel>
        </Box>
      </Container>
    </React.Fragment>
  );
};
