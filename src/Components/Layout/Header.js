import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Grid } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Header.css';
import Logos from '../../Assets/Logos/trotgfontonlysmall.gif';


const Header = () => {

    return(
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Grid container spacing={24} justify="space-between">
                    <Grid item>
                        <button className = "logoButton">
                            <img src={Logos} alt=""/>
                        </button>
                    </Grid>
                    <Grid item>
                        <Button color="inherit" style={{boxShadow:'none'}}>Home</Button>
                        <Button color="inherit">Music</Button>
                        <Button color="inherit">Store</Button>
                        <Button color="inherit">Contact</Button>
                        <IconButton color="inherit"  aria-label="Add to shopping cart">
                            <AddShoppingCartIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
    
}


export default Header;