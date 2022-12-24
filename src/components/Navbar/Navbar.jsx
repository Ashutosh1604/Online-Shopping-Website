 import React  from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png';
import useStyles from './styles';


import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import UserProfile from './userProfile';


const PrimarySearchAppBar = ({ totalItems , handleEmptyCart }) => {

  const classes = useStyles();   
  const location = useLocation();





  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="50px" className={classes.image} /> <b></b>E-store
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <Toolbar>

            <LoginButton/>
            <LogoutButton handleEmptyCart={handleEmptyCart}/>
    
            <UserProfile/>
            
         
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            </Toolbar>
          </div>
          )}
        </Toolbar>
      </AppBar>
     
    </>
  );
};

export default PrimarySearchAppBar;
