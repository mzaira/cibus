/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 23, 2021 | 11:51 PM
 */

import React, { useRef, useState } from 'react'

//@MATERIAL-UI: import components
import {
    Container, Button, Typography, Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox,
    Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText
} from '@material-ui/core'
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

const Signin = () => {
    
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
    const emailAddRef = useRef()
    const { signin, resetPassword, currentUser } = useAuth()

    //CONST: for error messages
    const [error, setError] = useState('')
    const [errorReset, setErrorReset] = useState('')
    const [message, setMessage] = useState('')

    //CONST: for loading
    const [loading, setLoading] = useState(false)

    //CONST: for modal
    const [open, setOpen] = useState(false)
    // ]

    //CONST: for redirect
    const history = useHistory()

    // FUNCTION: for Sign In
    async function handleSubmit(e) {

        e.preventDefault()

        try {
            setError('')

            //load while the firebase is saving the files
            setLoading(true)
            await signin(emailRef.current.value, passwordRef.current.value)

            //redirect to index or /
            history.push('/')

        } catch {

            setError('Failed to sign in')
        }

        setLoading(false)
    }

    // FUNCTION: for Reset Password
    async function handleReset(e) {

        e.preventDefault()

        try {
            setMessage('')
            setErrorReset('')
            //load when the firebase is still checking if the email does exist
            setLoading(true)
            await resetPassword(emailAddRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            //to make sure the modal won't close if there is an error
            setOpen(true)
            setErrorReset('Failed to reset password')
        }

        setLoading(false)
    }

    //CONST: modal is open
    const handleClickOpen = () => {
        
        setOpen(true)
    }

    //CONST: modal is close
    const handleClickClose = () => {

        setMessage('')
        setErrorReset('')
        setOpen(false)
    }

    return (
        <main>
            <Container maxWidth='xl' className={classes.container} style={styles.background}>

                <Container maxWidth='md'>

                    <Grid align='center'>

                        <Paper elevation={10} className={classes.paper} >

                            <Grid className={classes.grid} align='center' >
                                <Avatar alt="Remy Sharp" src={logo} />
                                <Typography variant='h5' >Sign In</Typography>
                            </Grid>

                            {/* Sign in Form */}
                            <form onSubmit={handleSubmit}>
                                {/* Error Message Display */}
                                {error && <Alert severity="error">{error}</Alert>}
                                <TextField inputRef={emailRef} label='Email' variant='outlined' type='email' size='small' fullWidth required className={classes.textField} />
                                <TextField inputRef={passwordRef} label='Password' variant='outlined' type='password' size='small' fullWidth required className={classes.textField} />
                                <FormControlLabel control={
                                    <Checkbox
                                        name='checkedB'
                                        className={classes.checkbox}
                                        align='right'
                                    />
                                } label='Remember me' />
                                <Button type='submit' color='primary' fullWidth className={classes.btn} size="large" >Sign In</Button>
                            </form>
                            {/* End of Sign in Form */}

                            <Typography>
                                {/* Forgot Password Button */}
                                <Button color='primary' fullWidth onClick={handleClickOpen}> Forgot Password </Button>

                                {/* Forgot Password Dialog */}
                                <Dialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Reset Password</DialogTitle>

                                    {/* Forgot Password Form */}
                                    <form onSubmit={handleReset}>
                                        <DialogContent>
                                            <DialogContentText>Please enter the email address for your account. A verication code will be sent to you. Once you have recieved
                                                the verification code. You will be able to choose a new password for your password</DialogContentText>

                                            {/* Error Message Display */}
                                            {errorReset && <Alert severity="error">{errorReset}</Alert>}

                                            {/* Success Message Display */}
                                            {message && <Alert severity="info">{message}</Alert>}
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                label="Email Address"
                                                fullWidth
                                                inputRef={emailAddRef}
                                                variant='outlined'
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClickClose} color="primary"> Cancel </Button>
                                            <Button type='submit' onClick={handleReset} color="primary"> Reset </Button>
                                        </DialogActions>
                                    </form>
                                    {/* End of Forgot Password Form */}

                                </Dialog>
                                {/* End of Forgot Password Dialog */}

                                <Button href="/signup" color='primary' fullWidth > Don't have an account? Sign Up </Button>
                                
                            </Typography>

                        </Paper>

                    </Grid>

                </Container>

            </Container>
        </main>
    )
}

export default Signin
