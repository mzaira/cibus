/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 20, 2021 | 1:17 PM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { Container, Button, Typography, Grid, CardMedia } from '@material-ui/core'

//REACT-ROUTER-DOM: used for going to link the links
import { Link } from 'react-router-dom'

//EXTERNAL CSS STYLINGS
import useStyles from '../styles'

//ASSETS THAT IS USED FOR THIS PAGE
import satisfying from '../../../assets/sec7Satisfying.jpg'
import realFood from '../../../assets/sec7RealFood.jpg'
import cooking from '../../../assets/sec7Cooking.jpg'

const Section7 = () => {
    
    //CONST: for stylings
    const classes = useStyles()

    return (
        <Container maxWidth='md' className={classes.containerSec7}>
            <Typography variant='h5' className={classes.text} >What Does Healthy Even Mean?</Typography>
            <Typography variant='p'>At Healthy Meal Plans, we understand that "healthy" actually means
            something different to everyone. So we've worked tirelessly to ensure that this site offers
            options no matter what your taste, cooking experience, or dietary preferences are.</Typography>
            <Grid container spacing={6} className={classes.card + ' ' + classes.healthCard}>
                <Grid item xs={6}>
                    <CardMedia component='img' className={classes.work} image={satisfying} />
                </Grid>
                <Grid item xs={6} className={classes.health} >
                    <Typography variant='h6'>Healthy Means Satisfying</Typography>
                    <Typography variant='p'>Our recipes are loaded with nutrients, fiber, and protein.
                    They're designed to help you feel nourished and satiated. We believe that this is the
                    real secret to eating well.</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.card}>
                <Grid item xs={6} className={classes.health} >
                    <Typography variant='h6'>Healthy Means Real Food</Typography>
                    <Typography variant='p'>Our recipes feature ntritious, whole food ingredients that you
                    can feel good about and that can easily be found at your local supermarket.</Typography>
                </Grid>
                <Grid item xs={6}>
                    <CardMedia component='img' className={classes.work} image={realFood} />
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.card}>
                <Grid item xs={6}>
                    <CardMedia component='img' className={classes.work} image={cooking} />
                </Grid>
                <Grid item xs={6} className={classes.health}>
                    <Typography variant='h6'>Healthy Means Cooking at Home</Typography>
                    <Typography variant='p'>We believe that the first step to healthy eating begins simply
                    with cooking at home. Knowing what goes into your food is the best way to get the most
                    out of it.</Typography>
                </Grid>
            </Grid>
            <Typography variant='h6'>Get Started Today</Typography>
            <Button className={classes.btn} size="large" component={Link} to="/signup" color="secondary" >Sign up for FREE</Button>
        </Container>
    )
}

export default Section7
