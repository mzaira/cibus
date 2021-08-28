/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 20, 2021 | 1:21 PM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { Container, Button, Typography, Grid, Card, CardActionArea, CardMedia } from '@material-ui/core'

//EXTERNAL CSS STYLINGS
import useStyles from '../styles'

//ASSETS THAT IS USED FOR THIS PAGE
import background from '../../../assets/sec4Background.png'
import vegetarian from '../../../assets/sec4Vegetarian.jpg'
import vegan from '../../../assets/sec4Vegan.jpg'
import paleo from '../../../assets/sec4Paleo.jpg'
import primal from '../../../assets/sec4Primal.jpg'
import glutenFree from '../../../assets/sec4GlutenFree.jpg'
import ketogenic from '../../../assets/sec4Ketogenic.jpg'
import pescetarian from '../../../assets/sec4Pescetarian.jpg'
import whole30 from '../../../assets/sec4Whole30.jpg'

const Section3 = () => {
    
    //CONST: for stylings
    const classes = useStyles()
    const styles = {
        background: {
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center top'
        }
    };

    return (
        <Container maxWidth='xl' className={classes.containerSec4} style={styles.background} >

            <Typography variant='h5' className={classes.text} >Specialty Meal Plans</Typography>
            <Container maxWidth='md' >

                <Grid container spacing={8}>
                    
                    <Grid item xs={6} >
                        <Typography variant='h6'>Too busy to plan?</Typography>
                        <Typography variant='p'>Subscribe to our dietitian-prepared Specialty Meal Plans which offer balanced nutrition
                         each and every week and can be easily customized to your personal tastes.</Typography>
                        <Button className={classes.btn} fullWidth color="secondary" >Learn More</Button>
                    </Grid>

                    <Grid item xs={6}>

                        <Grid container spacing={2}>
                            
                            <Grid item xs={6} >

                                <CardActionArea >
                                    <Card elevation={5} >
                                        <CardMedia className={classes.media} image={glutenFree} />
                                        <Typography variant='h6' className={classes.cardText}>Gluten Free</Typography>
                                    </Card>
                                </CardActionArea>

                            </Grid>

                            <Grid item xs={6}>

                                <CardActionArea >
                                    <Card elevation={5} >
                                        <CardMedia className={classes.media} image={ketogenic} />
                                        <Typography variant='h6' className={classes.cardText}>Ketogenic</Typography>
                                    </Card>
                                </CardActionArea>

                            </Grid>

                        </Grid>
                        <Grid container spacing={2}>
                            
                            <Grid item xs={6}>

                                <CardActionArea >
                                    <Card elevation={5} >
                                        <CardMedia className={classes.media} image={vegetarian} />
                                        <Typography variant='h6' className={classes.cardText}>Vegetarian</Typography>
                                    </Card>
                                </CardActionArea>

                            </Grid>

                            <Grid item xs={6}>

                                <CardActionArea >
                                    <Card elevation={5} >
                                        <CardMedia className={classes.media} image={vegan} />
                                        <Typography variant='h6' className={classes.cardText}>Vegan</Typography>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>

                            <Grid item xs={6}>

                                <CardActionArea >
                                    <Card elevation={5} >
                                        <CardMedia className={classes.media} image={pescetarian} />
                                        <Typography variant='h6' className={classes.cardText}>Pescetarian</Typography>
                                    </Card>
                                </CardActionArea>

                            </Grid>
                            <Grid item xs={6}>

                                <CardActionArea >
                                    <Card elevation={5} >
                                        <CardMedia className={classes.media} image={paleo} />
                                        <Typography variant='h6' className={classes.cardText}>Paleo</Typography>
                                    </Card>
                                </CardActionArea>

                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>

                                <CardActionArea >
                                    <Card elevation={5} >
                                        <CardMedia className={classes.media} image={primal} />
                                        <Typography variant='h6' className={classes.cardText}>Primal</Typography>
                                    </Card>
                                </CardActionArea>

                            </Grid>
                            <Grid item xs={6}>

                                <CardActionArea >
                                    <Card elevation={5} >
                                        <CardMedia className={classes.media} image={whole30} />
                                        <Typography variant='h6' className={classes.cardText}>Whole30</Typography>
                                    </Card>
                                </CardActionArea>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Section3
