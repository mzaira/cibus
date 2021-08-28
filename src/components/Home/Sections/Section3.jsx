/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 20, 2021 | 1:17 PM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { Container, Button, Typography, List, ListItem, ListItemText, ListItemIcon, Grid, Card, CardMedia } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

//REACT-ROUTER-DOM: used for going to link the links
import { Link } from 'react-router-dom'

//EXTERNAL CSS STYLINGS
import useStyles from '../styles'

//ASSETS THAT IS USED FOR THIS PAGE
import planner from '../../../assets/sec3Planner.jpg'
import prepare from '../../../assets/sec3Prepare.jpg'
import progress from '../../../assets/sec3Progress.jpg'

const Section3 = () => {

    //CONST: for stylings
    const classes = useStyles()

    return (

        <Container maxWidth='xl' className={classes.container} >

            <Container maxWidth='md'>

                <Grid container spacing={6} className={classes.card}>

                    <Grid item xs={6}>
                        <Card className={classes.work}>
                            <CardMedia component='img' image={planner} />
                        </Card>
                    </Grid>

                    <Grid item xs={6} >

                        <Typography variant='h6'>Plan</Typography>
                        <List component='ul' className={classes.workList} >

                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Tell us your goals, preferences, and what foods to avoid
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Find your favorite foods in our database, or upload your personal recipes
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Make everything just right with detailed nutrition information that updates in real time
                                </ListItemText>
                            </ListItem>

                        </List>

                    </Grid>

                </Grid>

                <Grid container spacing={2} className={classes.card}>
                    <Grid item xs={6}>

                        <Typography variant='h6'>Prepare</Typography>
                        <List component='ul' className={classes.workList}>

                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Get a weekly email with your complete grocery list and cooking instructions
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Check your grocery list for ingredients you prefer to substitute
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Take your grocery list to the store, or get it delivered to start right away. Shop, cook, and eat on your own schedule.
                                </ListItemText>
                            </ListItem>

                        </List>
                    </Grid>
                    
                    <Grid item xs={6}>

                        <Card className={classes.work}>
                            <CardMedia component='img' image={prepare} />
                        </Card>

                    </Grid>
                </Grid>

                <Grid container spacing={2} className={classes.card}>

                    <Grid item xs={6}>

                        <Card className={classes.work}>
                            <CardMedia component='img' image={progress} />
                        </Card>

                    </Grid>

                    <Grid item xs={6}>

                        <Typography variant='h6'>Progress</Typography>
                        <List component='ul' className={classes.workList}>
                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Update any changes to the plan, the rest is automatically tracked
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Review detailed stats on your weight and nutrients
                                </ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemIcon>
                                    <FiberManualRecordIcon className={classes.bulletPoint} />
                                </ListItemIcon>

                                <ListItemText>
                                    Adjust your plan and repeat!
                                </ListItemText>
                            </ListItem>

                        </List>
                    </Grid>
                </Grid>
            </Container>
            
            <Button className={classes.btn} size="large" component={Link} to="/signup" color="secondary" >Get Started</Button>
        </Container>
    )
}

export default Section3
