/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 24, 2021 | 12:51 PM
 */

import React, { useRef, useState } from 'react'

//@MATERIAL-UI: import components
import { Container, Button, Typography, Avatar, Grid, Paper, TextField } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

//AUTHCONTEXT: to calll the useAuth from the file
import { useAuth } from '../../contexts/AuthContext'

//REACT-ROUTER-DOM: used for going to redirect the pages
import { useHistory } from 'react-router-dom'

//EXTERNAL CSS STYLINGS
import useStyles from './styles'

//ASSETS THAT IS USED FOR THIS PAGE
import background from '../../assets/signinBackground.png'
import logo from '../../assets/logo.png'

const Signup = () => {

    //CONST: for stylings
    const classes = useStyles()
    const styles = {
        background: {
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center left'
        }
    };

    //CONST: for AuthContext [
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    //CONST: for error messages
    const [error, setError] = useState('')

    //CONST: for loading
    const [loading, setLoading] = useState(false)
    // ]

    //CONST: for redirect
    const history = useHistory()

    // FUNCTION: for Sign Up
    async function handleSubmit(e) {
        e.preventDefault()

        //check if the password matches
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')

            //load while the firebase is checking if the input email and password is correct
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)

            //redirect to index or /
            history.push('/')

        } catch {

            setError('Failed to create an account')
        }

        setLoading(false)

    }

    return (
        <main>
            <Container maxWidth='xl' className={classes.container} style={styles.background}>

                <Container maxWidth='md'>

                    <Grid align='center' >

                        <Paper elevation={10} className={classes.paper} >

                            <Grid className={classes.grid} align='center' >
                                <Avatar alt="Remy Sharp" src={logo} />
                                <Typography variant='h5' >Sign Up</Typography>
                            </Grid>

                            {/* Sign Up Form */}
                            <form onSubmit={handleSubmit}>

                                {/* Error Message Display */}
                                {error && <Alert severity="error">{error}</Alert>}

                                <TextField inputRef={emailRef} label='Email' variant='outlined' type='email' size='small' fullWidth required className={classes.textField} />
                                <TextField inputRef={passwordRef} label='Password' variant='outlined' type='password' size='small' fullWidth required className={classes.textField} />
                                <TextField inputRef={passwordConfirmRef} label='Confirm Password' variant='outlined' type='password' size='small' fullWidth required className={classes.textField} />

                                <Button disabled={loading} type='submit' color='primary' fullWidth className={classes.btn} size="large" >Sign Up</Button>
                            </form>
                            {/* End of Sign Up Form */}

                            <Typography>
                                <Button href="/signin" color='primary' fullWidth > Already have an account? Sign In </Button>
                            </Typography>

                        </Paper>

                    </Grid>

                </Container>

            </Container>
            
        </main>
    )
}

export default Signup
