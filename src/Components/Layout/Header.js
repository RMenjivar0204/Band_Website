import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const Header = () => {

    return(
        <AppBar position="static" color='primary'>
            <Toolbar>
                <Grid container>
                    <Typography variant="h6" color="inherit">
                        The Rest of The Guys
                    </Typography>
                    <Button color="inherit">Music</Button>
                    <Button color="inherit">Store</Button>
                    <Button color="inherit">Contact</Button>
                    <IconButton color="primary"  aria-label="Add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
    
}


export default Header;