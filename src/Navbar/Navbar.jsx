
import * as React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import  {Link}  from 'react-scroll';
import "./navbar.style.css"
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;


function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} med>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
  
          <ListItem key='home' disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
          <Link  to="home" spy smooth
          >
                
                <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                  Home
                </Button>
        </Link>
            </ListItemButton>
          </ListItem>
          
          <ListItem key='about' disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
          <Link  to="about">
                
                <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                  About
                </Button>
        </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key='gallery' disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
          <Link  to="gallery">
                
                <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                Gallery
                </Button>
        </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key='contact' disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
          <Link  to="contact">
                
                <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                Contact
                </Button>
        </Link>
            </ListItemButton>
          </ListItem>
          <ListItem key='contact' disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
            <RouterLink to="/guwahati" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'rgb(231, 199, 29)' }}>Guwahati</Button>
            </RouterLink>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'fixed' }} className="nav-wrapper">
      <CssBaseline />
      <AppBar component="nav" sx={{background: 'rgb(39 32 34 / 30%)'}}>
        <Toolbar className='toolbar' sx={{
    display: "flex",
    justifyContent: "space-between"
}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
      <Box>
      <img
          src= "/logo.png"
           alt='logo'
            style={{ flexGrow: 1,opacity: 10,height:"50px",width:"150px",display: { xs: 'none', sm: 'block' } }}
          />
      </Box>
           
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
          <Link spy to="home" smooth>
                
                <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                  Home
                </Button>
        </Link>
        <Link spy  to="about" smooth>
                
                <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                  About
                </Button>
        </Link>
        <Link spy  to="gallery" smooth>
                
                <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                  Gallery
                </Button>
        </Link>
        <Link spy to="contact" smooth>
                
                <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                Contact
                </Button>
        </Link>
        <RouterLink to="/guwahati" style={{ textDecoration: 'none' }}>
              <Button sx={{ color: 'rgb(231, 199, 29)' }}>Guwahati</Button>
            </RouterLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
