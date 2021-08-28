/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 22, 2021 | 11:23 PM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { Container } from '@material-ui/core'

//EXTERNAL CSS STYLINGS
import useStyles from '../styles'

//ASSET THAT IS USED FOR THIS PAGE
import divider from '../../../assets/sec6Divider.png'

const Section6 = () => {
    
    //CONST: for stylings
    const classes = useStyles()
    const styles = {
        background: {
            backgroundImage: `url(${divider})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    };

    return (
        <Container maxWidth='xl' className={classes.containerSmall} style={styles.background}> </Container>
    )
}

export default Section6
