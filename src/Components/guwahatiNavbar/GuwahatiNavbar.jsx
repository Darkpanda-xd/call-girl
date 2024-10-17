
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
import "./guwahatiNavbar.style.css"
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 240;

const GuwahatiNavbar = (props) => {
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
              <RouterLink to="/" style={{ textDecoration: 'none' }}>
                <Button sx={{ color: 'rgb(231, 199, 29)' }}>home</Button>
              </RouterLink>
              </ListItemButton>
            </ListItem>
           
            <ListItem key='guwahati' disablePadding>
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
              
            <RouterLink to="/" style={{ textDecoration: 'none' }}>

                  
                  <Button  sx={{ color: 'rgb(231, 199, 29)' }}>
                    Home
                  </Button>
                  </RouterLink>

       
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
      </Box>)
}
GuwahatiNavbar.propTypes = {
    window: PropTypes.func,
  };


export default GuwahatiNavbar