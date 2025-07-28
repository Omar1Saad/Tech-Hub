import MaterialUISwitch from './styles/muiSwitch';
import { themeContext } from './context/themeContext';
import {Box, AppBar, Toolbar, Stack, Typography, Button, Menu, MenuItem, Breadcrumbs, Link} from '@mui/material';
import { useContext, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import TechLogo from './assets/techHub.png';




export default function Layout({children}) {
  const {setTheme}= useContext(themeContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
        <AppBar position="fixed" sx={{display:{md:'block', sm:'none', xs:'none', xxs:'none'}}}  >
          <Toolbar >
            <Box sx={{flexGrow:1 ,height:'50px', minWidth:'100px', overflow:'hidden',mr: 2, display:'flex', alignItems:'center'}} >
              <Box component="img" sx={{  height: 200 }} alt="Tech Hub Logo" src={TechLogo} />
            </Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{ flexGrow: 1, color: 'inherit' }}>
              <Link
              underline="hover"
              sx={{display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/"
              >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
              </Link>
              <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/posts"
              >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Post
              </Link>
              <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/services"
              >
              <MiscellaneousServicesIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Services
              </Link>
              <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/learn"
              >
              <LocalLibraryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Learn
              </Link>
            </Breadcrumbs>
            <MaterialUISwitch onChange={()=>{setTheme()}} size='small' sx={{ m: 0, w:10 }} defaultChecked />
          </Toolbar>
        </AppBar>

        <Toolbar />

        <AppBar position="fixed" sx={{display:{sm:'flex', md:'none'} }}  >
          <Toolbar>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon color='action' />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem onClick={handleClose}><Link
              underline="hover"
              sx={{display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/"
              >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Home
              </Link></MenuItem>
              <MenuItem onClick={handleClose}><Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/posts"
              >
              <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Post
              </Link></MenuItem>
              <MenuItem onClick={handleClose}><Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/services"
              >
              <MiscellaneousServicesIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Services
              </Link></MenuItem>
              <MenuItem onClick={handleClose}><Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/learn"
              >
              <LocalLibraryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Learn
              </Link></MenuItem>
              <MaterialUISwitch onChange={()=>{setTheme()}} size='small' sx={{ m: 0, w:10 }} defaultChecked />
            </Menu>
            <Box sx={{ height:'50px', minWidth:'100px', overflow:'hidden',mr: 2, display:'flex', alignItems:'center'}} >
              <Box component="img" sx={{  height: 200 }} alt="Tech Hub Logo" src={TechLogo} />
            </Box>
          </Toolbar>
        </AppBar>
        {children}
    <Stack direction='row' spacing={2}  sx={{ justifyContent: "center", alignItems: "center", width:{sm:'100%', md:'80%', lg:'60%'}, m:'20px auto', p:3, borderTop:'1px solid gray'}} >
      <Link href="/about">About</Link>
      <Link href="#">Courses</Link>
      <Link href="/contact">Contact</Link>
    </Stack>
    <Typography variant='body2' sx={{ textAlign: 'center', color: 'text.secondary', pb: 2}}>
      &copy; 2025 Tech Hub
    </Typography>
    </>
  )
}

