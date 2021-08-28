/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 20, 2021 | 6:32 AM
 */

import React, { useState } from 'react'

//@MATERIAL-UI: import components
import { AppBar, Toolbar, IconButton, Button, MenuItem, Menu, CssBaseline, Typography } from '@material-ui/core'
import { CalendarToday, FormatListBulleted, AccountCircle } from '@material-ui/icons'

//AUTHCONTEXT: to call the useAuth from the file
import { useAuth } from '../../contexts/AuthContext'

//REACT-ROUTER-DOM: used for going to link the links
import { Link, useHistory } from 'react-router-dom'

//ASSETS THAT IS USED FOR THIS PAGE
import logo from '../../assets/logo.png'
import useStyles from './styles'

const Navbar = () => {

    //CONST: for stylings
    const classes = useStyles()


    //CONST: for AuthContext [
    const { currentUser, logout } = useAuth()
    const [anchorEl, setAnchorEl] = useState(null)
    
    //CONST: for error messages
    const [error, setError] = useState("")
    // ]

    //CONST: for redirect
    let history = useHistory()

    // FUNCTION: for Logout
    async function handleLogout() {
        setError('')

        try {
            await logout()

            //redirect to signin page
            history.path('/signin')
        } catch {
            setError('Failed to log out')
        }
    }

    //CONST: menu is open
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    //CONST: menu is close
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">

                <CssBaseline />

                <Toolbar >
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Cibus" className={classes.image}></img>
                        Cibus
                    </Typography>

                    <div className={classes.grow}></div>

                    <div className={classes.button}>

                        <Button component={Link} to="/recipes" color="inherit">
                            Recipes
                        </Button>

                        {/* if the currentUser is null links to signin */}
                        {currentUser === null
                            ? (
                                <>
                                    <IconButton component={Link} to="/signup" aria-label="Show weekly meal planner" color="inherit">
                                        <CalendarToday />
                                    </IconButton>
                                    <IconButton component={Link} to="/signup" aria-label="Show grocery list" color="inherit">
                                        <FormatListBulleted />
                                    </IconButton>
                                    <Button component={Link} to="/signin" color="inherit"> Sign In </Button>
                                    <Button component={Link} to="/signup" color="inherit"> Sign Up </Button>
                                </>
                            )

                            //else to their respective pages
                            : (
                                <>
                                    <IconButton component={Link} to="/meal-planner" aria-label="Show weekly meal planner" color="inherit">
                                        <CalendarToday />
                                    </IconButton>

                                    <IconButton component={Link} to="/grocery-list" aria-label="Show grocery list" color="inherit">
                                        <FormatListBulleted />
                                    </IconButton>

                                    <IconButton onClick={handleClick} aria-label="Show account" color="inherit">
                                        <AccountCircle />
                                    </IconButton>
                                    
                                    {/* Menu Bar */}
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </>
                            )
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
