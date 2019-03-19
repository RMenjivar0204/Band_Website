import React, {Fragment} from 'react';
import {CardMedia, Card, Paper, Grid} from '@material-ui/core';

const Body = () => {
    return(
        <Fragment>
            <Grid container>
                <Grid item>
                    <Paper>
                        <Card>
                            <CardMedia 
                            image = '../../Assets/Photos/band.jpg'
                            />
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Body;