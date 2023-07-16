import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Button, Typography, Container, Grid, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

// TODO : build the interface

export const CarouselCustom = () => {
  let opinions: any[] = [
    {
      name: 'test 1',
      description: 'here is the description of the first opinion',
      author: 'Martin Aubertin',
      position: 'Web Developer',
      img: '',

    },
    {
      name: 'Random review 2',
      description: 'description of the second opinion',
      author: 'Dani Boi',
      position: 'Streamer',
      img: '',
    }
  ];

  function Item(opinion: any) {
    const { name, description, author, position, img } = opinion;

    return (
      <Grid container spacing={5}>
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={6}>
            <Typography variant="body1" color="initial">test</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1" color="initial">test</Typography>
          </Grid>
        </Grid>

      </Grid>
    )

    // this is actually working :
    // return (
    //   <Box>
    //     <Typography variant="h3" color="white" textAlign={'center'}>
    //       {name}
    //     </Typography>
    //     <Typography variant="body1" color="white" textAlign={'center'}>
    //       {description}
    //     </Typography>
    //     {/* we must rendering correctly this part */}
    //     {author} {position}
    //     <Button className="CheckButton">
    //       Check it out!
    //     </Button>
    //   </Box>
    // );
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
          <Carousel>
            {opinions.map((opinion, i) => <Item key={i} {...opinion} />)}
          </Carousel>
        </Box>
      </Container>
    </React.Fragment>
  );
};
