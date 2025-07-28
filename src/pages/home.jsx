import AppLogo from '../assets/undraw_app-dark-mode_6ji2.png'
import CommunityLogo from '../assets/undraw_online-community_3o0l.png'
import WebLogo from '../assets/undraw_web-app_141a.png'
import { Box, Container, Typography, Link, Grid, Paper, Button, Stack, Card, CardContent, CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function Home() {
  const theme = useTheme();

  const items = [
    { img: WebLogo, title: 'Courses', desc: 'Learn programing and tech skills' },
    { img: CommunityLogo, title: 'Project', desc: 'Learn programing and tech skills' },
    { img: AppLogo, title: 'Community', desc: 'Learn programing and tech skills' },
  ];


  return (
    <Container maxWidth="lg" sx={{backgroundColor:theme.palette.background.container, mt:2, p:2,  }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography variant='h3'>
            Welcome To Tech Hub
          </Typography>
          <Typography variant='h5'>
            Your Gateway To Technology Learned
          </Typography>
          <Link href='#'>
            <Button sx={{background:theme.palette.background.button}} >Join Tech Hub</Button>
          </Link>
      </Stack>
      <Grid container spacing={2} >
      {items.map((item, index) =>(
        <Grid size={{  xs: 12, sm:12 , md: 6 , lg:4, xl:4}}  key={index} >
          <Card sx={{ maxWidth: 345, p:3, m:'20px auto' }}>
            <Box
              component="img"
              src={item.img}
              alt="green iguana"
              sx={{height:180}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas quod quia fugiat quam, optio voluptatibus pariatur nesciunt cupiditate qui.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      </Grid>
    </Container>
  );
}
