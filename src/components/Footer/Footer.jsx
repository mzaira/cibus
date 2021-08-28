/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 22, 2021 | 6:46 PM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { AppBar, Toolbar, Container, Grid, List, ListItem, ListItemText } from '@material-ui/core'

//EXTERNAL CSS STYLINGS
import useStyles from './styles'

const Footer = () => {

    //CONST: for stylings
    const classes = useStyles()

    return (
        <>
            <AppBar position="static" className={classes.appBar} color="inherit">

                <Toolbar>

                    <Container maxWidth='xl' className={classes.containerFooter}>

                        <Grid container spacing={3}>

                            <Grid item xs={3}>

                                <List component='nav' className={classes.workList} >

                                    <ListItem button>
                                        <ListItemText>About</ListItemText>
                                    </ListItem>

                                    <ListItem button>
                                        <ListItemText>Terms &#38; Privacy</ListItemText>
                                    </ListItem>

                                </List>

                            </Grid>

                            <Grid item xs={3}>

                                <List component='nav' className={classes.workList} >

                                    <ListItem button>
                                        <ListItemText>DMCA</ListItemText>
                                    </ListItem>

                                    <ListItem button>
                                        <ListItemText>Contact</ListItemText>
                                    </ListItem>

                                </List>

                            </Grid>

                            <Grid item xs={6}>
                                <List component='ul' className={classes.workList} >

                                    <ListItem>
                                        <ListItemText>DMCA</ListItemText>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemText>©2021 CUBIS INC. ALL RIGHTS RESERVED</ListItemText>
                                    </ListItem>

                                </List>
                            </Grid>

                        </Grid>

                    </Container>

                </Toolbar>
                
            </AppBar>
        </>
    )
}

export default Footer
