/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 25, 2021 | 4:53 AM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { Container, Typography, Grid, Paper, Card, CardMedia } from '@material-ui/core'

//EXTERNAL CSS STYLINGS
import useStyles from './styles'

//ASSET THAT IS USED FOR THIS PAGE
import error from '../../assets/error.png'

const NotFound = () => {
    
    //CONST: for stylings
    const classes = useStyles()

    return (
        <main>
            <Container maxWidth='xl' className={classes.container} >
                <Paper className={classes.paper} >
                    <Grid container>
                        <Grid item xs={6} className={classes.grid}>
                            <Typography variant='h2' fullWidth>Error Page</Typography>
                            <Typography variant='h5' fullWidth>The page you were looking for doesn’t exist. </Typography>
                        </Grid>
                        <Grid item xs={6} className={classes.grid}>
                            <Card elevation={0}>
                                <CardMedia component='img' image={error} controls />
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </main>
    )
}

export default NotFound
