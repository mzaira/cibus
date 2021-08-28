/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 20, 2021 | 1:11 PM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { Container, CssBaseline, Button, Typography } from '@material-ui/core'

//REACT-ROUTER-DOM: used for going to link the links
import { Link } from 'react-router-dom'

//EXTERNAL CSS STYLINGS
import useStyles from '../styles'

//ASSET THAT IS USED FOR THIS PAGE
import background from '../../../assets/sec1Background.png'

const Section1 = () => {
    
    //CONST: for stylings
    const classes = useStyles()
    const styles = {
        background: {
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom'
        }
    };

    return (
        <Container maxWidth='xl' className={classes.container} style={styles.background}>

            <CssBaseline />
            <Typography variant='h3'>Eat Healthy</Typography>
            <Typography variant='h5'>All Week Long</Typography>
            <Button className={classes.btn} size="large" component={Link} to="/recipes" color="secondary" >Start Meal Planning</Button>
            
        </Container>
    )
}

export default Section1
