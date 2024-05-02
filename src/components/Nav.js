


import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { isLoggedIn } from '../utils/AuthUtils';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const cart = useSelector(state => state.cart || []); 

  // Check if user is logged in
  const userLoggedIn = isLoggedIn();

 
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const productbtn = location.pathname !== '/product' && (
    <Button color="inherit" component={Link} to="/product">
      Products
    </Button>
  );

  const loginbtn = !userLoggedIn && location.pathname !== '/login' && (
    <Button color="inherit" component={Link} to="/login">
      Login
    </Button>
  );

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const logoutbtn = userLoggedIn && (
    <Button color="inherit" onClick={handleLogout}>
      Logout
    </Button>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            YOUR SHOP
          </Typography>
          <div>
            {loginbtn}
            {logoutbtn}
            {productbtn}
            <Button color="inherit" component={Link} to="/cart">
              Cart {cartCount > 0 && `(${cartCount})`} 
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;
