import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from 'react-router';
import { Box, TextField, Button, Container, Typography, Alert, CircularProgress } from "@mui/material";

export default function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [message, setMessage] = useState({
        status:'',
        text:''
    })
    const {login, loading} = useAuth()


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const res = await login(email, password)
        if(res.success){
            navigate('/products');
        }
        else{
            let newMessage = {...message}
            newMessage.status = "error"
            newMessage.text = res.error
            setMessage(newMessage)
        }
    }

    return(
      <Container maxWidth="sm" >
        {message.status && (

        <Alert variant="filled" severity={message.status}>
            {message.text}
        </Alert>
        )}
        <Typography variant="h4" textAlign='center' sx={{mt:15}}>
        Login
        </Typography>
        <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{ '& .MuiTextField-root': { m: 2}, display:'flex', flexDirection:'column' }}
        autoComplete="off"
        >
            <TextField
            required
            id="outlined-required"
            label="Email"
            type = "email"
            onChange={(e)=>{setEmail(e.target.value)}}
            defaultValue={email}
            /> 
            <TextField
            required
            id="outlined-required"
            type = "password"
            label="Password"
            onChange={(e)=>{setPassword(e.target.value)}}
            defaultValue={password}
            />
            {loading?(
                <Box sx={{display:'flex', justifyContent:'center'}} >
                    <CircularProgress />
                </Box>
            ):(
            <Button 
            type="submit"
            >
                submit
            </Button>
            )   
        }

        </Box>
    </Container>
    )
}