/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 22, 2021 | 09:23 PM
 */

import React, { useState, useEffect } from 'react'

//@MATERIAL-UI: import components
import { Container, Paper, Grid, CardMedia, Typography, Card, CardContent, CardActions, CardActionArea } from '@material-ui/core'

//AXIOS: importing axios
import Axios from 'axios'

//REACT-ELASTIC-CAROUSEL: importing Carousel
import Carousel from 'react-elastic-carousel'

//ITEM file: import item file
import Item from "./Item";

//EXTERNAL CSS STYLINGS
import useStyles from '../styles'

//ASSETS THAT IS USED FOR THIS PAGE
import reviewer1 from '../../../assets/sec5Vivian.png'
import reviewer2 from '../../../assets/sec5Daeseong.png'
import reviewer3 from '../../../assets/sec5Emma.png'

//CAROUSEL: number of items to show
const breakPoints = [
    { width: 1200, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
]

const Section5 = () => {

    //CONST: for stylings
    const classes = useStyles()
    
    //CONST: usage of useState
    const [recipes, setRecipes] = useState([])

    useEffect(() => {

        //CONST: api_id and api_key 
        const APP_ID = "d3dfee78"
        const APP_KEY = "43c9b142876e4cddbdb34fe7b3364875"

        //CONST: getData from Edamam.com
        const getdata = async () => {
            const result = await Axios.get(
                `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=300-400&diet=balanced`
            )

            console.log(result.data.hits)
            //SET: setting new set of data into recipes
            setRecipes(result.data.hits)
        }

        getdata()

    }, []);

    return (
        <Container maxWidth='xl' className={classes.containerSec5} >

            <Typography variant='h5' className={classes.text} >Testimony</Typography>

            <Carousel breakPoints={breakPoints} enableAutoPlay infiniteLoop>
                <Item>
                    <Paper className={classes.testimony}>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <CardMedia component='img' className={classes.reviewImg} image={reviewer1} />
                            </Grid>
                            <Grid item xs={9} className={classes.reviewMessage}>
                                <Typography variant='h4'>Vivian Miller</Typography>
                                <Typography variant='p'>Cibus not only lets me stay on track with my macros,
                                but it also ensures that I'm not consuming the same boring food every day.
                                I've lost 35 pounds in the last year and am living and doing more than ever
                                thanks to Cibus.</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Item>

                <Item>
                    <Paper className={classes.testimony}>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <CardMedia component='img' className={classes.reviewImg} image={reviewer2} />
                            </Grid>
                            <Grid item xs={9} className={classes.reviewMessage}>
                                <Typography variant='h4'>Kim Dae Seong</Typography>
                                <Typography variant='p'>Cibus assisted me in losing 32 pounds in just six
                                months! Now that I'm in great shape, I check this site many times a day to
                                make sure I'm eating well and keeping track of my macros.</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Item>

                <Item>
                    <Paper className={classes.testimony}>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <CardMedia component='img' className={classes.reviewImg} image={reviewer3} />
                            </Grid>
                            <Grid item xs={9} className={classes.reviewMessage}>
                                <Typography variant='h4'>Emma Mace</Typography>
                                <Typography variant='p'>As a mother taking care of a child is tiring, but with
                                the help of Cibus, I was able to take care of myself and my child. With a
                                 proper, taking care my child is no problem! Thank you Cibus</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Item>
                
            </Carousel>

            <Container maxWidth='lg' className={classes.containerSec5_2}>

                <Typography variant='h5' className={classes.text} >Featured Recipes</Typography>
                <Grid container spacing={2} align='center' className={classes.sec5_2Grid}>
                    {recipes.map((recipe, key) => {
                        return (
                            <Grid item key={key} xs={12} sm={6} md={3} lg={3}>
                                <Card className={classes.root} elevation={3} >
                                    <CardActionArea href={recipe.recipe.url} target="_blank" >
                                        <CardMedia className={classes.media} image={recipe.recipe.image} title={recipe.recipe.label} />
                                        <CardContent>
                                            <div className={classes.cardContent}>
                                                <Typography variant='body1' gutterBottom>{recipe.recipe.label}</Typography>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions disableSpacing className={classes.cardActions} >
                                        <div>
                                            <Typography variant='body2' >{Math.round(recipe.recipe.calories * 100) / 100} </Typography>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Container>
    )
}

export default Section5
