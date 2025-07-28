import { Box, Container, Typography, Link, Grid, Paper, Button, Stack, Card, CardContent, CardMedia, TextField, TextareaAutosize } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Contact(){
    const theme = useTheme();
    return(
    <>
    <Container maxWidth="lg" sx={{backgroundColor:theme.palette.background.container, mt:2, p:2, borderRadius:2 }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography variant='h4'>
            Contact Tech Hub
          </Typography>
          <Typography variant='h6'>
            If you have any questions or need assistance, feel free to reach out to us.
          </Typography>
      </Stack>
      <Box
      component="form"
      
      noValidate
      autoComplete="off">

        <Paper sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },
        maxWidth:{ sm:'80%', md:'50%', lg:'40%'} 
        ,display: 'flex', flexDirection: 'column', alignItems: 'center' ,
        m:'20px auto', p:4, borderRadius:2
        }}>
          <TextField
            required
            id="standard-required"
            label="Full Name"
            variant="standard"
            />
          <TextField
            required
            id="standard-required"
            label="Email"
            variant="standard"
            type='email'
            />
          <TextField
            required
            id="standard-required"
            multiline
            label="minimum 20 characters"
            variant="outlined"
            type='email'
            />
          <Button type='submit' sx={{background:theme.palette.background.button, m:2, color:'white', width:200}} >Sent</Button>
        </Paper>
      </Box>
    </Container>
    </>
    );
};