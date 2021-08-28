/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 20, 2021 | 1:16 PM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { Container, Typography, CardMedia, Card } from '@material-ui/core'

//EXTERNAL CSS STYLINGS
import useStyles from '../styles'

//ASSET THAT IS USED FOR THIS PAGE
import videoSec2 from '../../../assets/sec2Video.mp4'

const Section2 = () => {
    const classes = useStyles()

    return (
        <Container maxWidth='xl' className={classes.container} >

            <Typography variant='h5' >How it Works</Typography>
            
            <Card className={classes.videoSec2} >
                <CardMedia component='video'  image={videoSec2} controls />
            </Card>
            
        </Container>
    )
}

export default Section2
