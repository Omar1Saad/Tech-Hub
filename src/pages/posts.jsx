import { useContext, useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Stack,
  useTheme,
  Paper,
} from '@mui/material';
import { PostContext } from '../context/postContext';

export default function Posts() {
  const theme = useTheme();
  const { data, info, userAction } = useContext(PostContext);
  const [postInfo, setPostInfo] = useState(info);
  const [action, setAction] = useState(userAction);

  function hundle(id, key) {
    const updateAction = { ...action };
    const updatePostInfo = { ...postInfo };

    if (!action[id][key] && key === 'like') {
      updateAction[id][key] = true;

      if (action[id]['dislike']) {
        updatePostInfo[id]['dislike'] -= 1;
        updateAction[id]['dislike'] = false;
      }
      updatePostInfo[id][key] += 1;
    } else if (!action[id][key]) {
      updateAction[id][key] = true;

      if (action[id]['like']) {
        updatePostInfo[id]['like'] -= 1;
        updateAction[id]['like'] = false;
      }
      updatePostInfo[id][key] += 1;
    } else {
      updateAction[id][key] = false;
      updatePostInfo[id][key] -= 1;
    }

    setAction(updateAction);
    setPostInfo(updatePostInfo);
  }

  function formatNumber(num) {
    return num < 1000 ? num : `${Math.floor((num / 1000)*100)/100}K`
  }

  return (
    <Container maxWidth="md" sx={{backgroundColor:theme.palette.background.container, mt:2, p:2,  }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Posts
      </Typography>
      {data?(
        <Stack spacing={2} sx={{m:5}} >
          {data.slice(0,10).map((post)=>(
            <Paper key={post.id} 
            sx={{p:2}}
            >
              <Typography align='center' variant='h5' >Post {post.id}</Typography>
              <Typography variant='h6' sx={{m:2}} >{post.title}:</Typography>
              <Typography variant='subtitle2' >{post.body}</Typography>
              <Box sx={{display:'flex', justifyContent:'flex-end', m:2}}>
                <Button 
                variant={action[post.id]?.dislike ? 'contained' : 'outlined'}
                onClick={() => hundle(post.id, 'dislike')}
                sx={{m:'0 10px'}}
                >
                <span style={{padding:'0 10px'}} >{formatNumber(postInfo[post.id]?.dislike || 0)}</span> <ThumbDownIcon/>  
                </Button>
                  <Button
                  variant={action[post.id]?.like ? 'contained' : 'outlined'}
                  onClick={() => hundle(post.id, 'like')}
                  sx={{m:'0 10px'}}
                  >
                <span style={{padding:'0 10px'}} >{formatNumber(postInfo[post.id]?.like || 0)}</span>  <ThumbUpIcon/>  
                </Button>
              </Box>
            </Paper>
          ))}
        </Stack>
      ):(
        
        <Typography variant='h6' align='center' sx={{m:5}} >
            Loding Posts...
        </Typography>
      )}
    </Container>
  );
}
