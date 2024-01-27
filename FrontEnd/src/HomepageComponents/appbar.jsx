import React from 'react';
import { styled, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Search = styled('div')(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'relative',
  marginTop: '0.7rem',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.5, 2, 1.5, 2),
    fontSize: '1rem',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
}));

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '400px', // Set the initial width
    [theme.breakpoints.down('sm')]: {
      width: '80%', // Adjust width for smaller screens
    },
  },
  position: 'fixed', // Fixed position to prevent pushing other components
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isCartOpen, setCartOpen] = React.useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  const isPortrait = useMediaQuery('(orientation: portrait)');

  const drawerWidth = isPortrait ? '40%' : '400px';

  return (
    <div>
      <AppBar position="static" sx={{backgroundColor:'#663399'}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              width: '250px',
              fontSize: '1.5rem',
              '@media (max-width:600px)': { fontSize: '1rem' },
            }}
          >
            Negotiation Engine
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for items and products"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <div>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleMenuOpen}
              aria-controls="navbar-menu"
              aria-haspopup="true"
            >
              <AccountCircle />
              <Typography sx={{paddingLeft:"0.5rem"}}>Sign In</Typography>
            </IconButton>
            <Menu
              id="navbar-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              <MenuItem onClick={handleMenuClose}>My Orders</MenuItem>
            </Menu>
          </div>

          <IconButton size="large" color="inherit" onClick={handleCartClick}>
            
            <ShoppingCartIcon />
            <Typography sx={{paddingLeft:"0.5rem"}}>Cart</Typography>
          </IconButton>
          
        </Toolbar>
      </AppBar>

      <CustomDrawer
        anchor="right"
        open={isCartOpen}
        onClose={handleCartClose}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        PaperProps={{ style: { width: drawerWidth, maxWidth: '400px' } }}
      >
        <List>
          <ListItem>
            <ListItemText primary="Empty Cart" />
          </ListItem>
        </List>
      </CustomDrawer>
    </div>
  );
}
