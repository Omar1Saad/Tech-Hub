import { Box, Container, Typography, Paper, Stack, Link, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function About() {
  const theme = useTheme();
  const items = [
    { title: 'Our Mission', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, incidunt. Repellat vitae debitis obcaecati provident architecto ullam odio, harum tempore, dolorum, nobis corrupti necessitatibus delectus. Fuga pariatur iure ratione voluptas?' },
    { title: 'Our Community', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, incidunt. Repellat vitae debitis obcaecati provident architecto ullam odio, harum tempore, dolorum, nobis corrupti necessitatibus delectus. Fuga pariatur iure ratione voluptas?' },
    { title: 'Our Courses', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, incidunt. Repellat vitae debitis obcaecati provident architecto ullam odio, harum tempore, dolorum, nobis corrupti necessitatibus delectus. Fuga pariatur iure ratione voluptas?' },
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
          <Typography variant='h4'>
            About Tech Hub
          </Typography>
          <Typography variant='h6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis deleniti minima id distinctio architecto molestiae. Nostrum, odio! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </Typography>
      </Stack>
      <Stack direction="column"
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
          mt: 2,
        }}>
          {items.map((item, index)=>(
      <Paper sx={{ p: 3, maxWidth: { sm: '90%', md: '80%', lg: '70%' }, borderRadius: 2 }} key={index} >
          <Typography variant='h4' align='center' >
            {item.title}
          </Typography>
          <p>{item.desc}</p>
        </Paper>
          ))}         
      </Stack>
    </Container>
  );
}
