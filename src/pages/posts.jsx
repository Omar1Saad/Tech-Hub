import { useContext, useEffect, useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SearchIcon from '@mui/icons-material/Search';
import {Search, SearchIconWrapper, StyledInputBase } from '../styles/search';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  useTheme,
} from '@mui/material';
import { PostContext } from '../context/postContext';

export default function Posts() {
  const theme = useTheme();
  const { data, info, userAction } = useContext(PostContext);
  const [postData, setData] = useState();
  const [postInfo, setPostInfo] = useState(info);
  const [action, setAction] = useState(userAction);

  useEffect(() => {
    setData(data);
  }, [data]);

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
  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = data.filter(post => post.author.toLowerCase().includes(searchTerm));
    setData(filteredData);
  }
  return (
    <Container maxWidth="lg" sx={{backgroundColor:theme.palette.background.container, mt:2, p:2,  }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Posts
      </Typography>
      <Search sx={{ m: 2, backgroundColor: theme.palette.background.paper }}>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
        onChange={()=> handleSearch(event)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      {postData?(
        <Grid container spacing={4}>
          {postData.map((post)=>(
            <Grid item xs={12} sm={6} md={4} key={post.id} sx={{m:'20px auto'}} >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 180 }}
                image={post.download_url}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.author}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
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
              </CardActions>
            </Card>
            </Grid>
          ))}
        </Grid>
      ):(
        <Typography variant='h6' align='center' sx={{m:5}} >
            Loding Posts...
        </Typography>
      )}
    </Container>
  );
}
