/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 20, 2021 | 5:50 AM
 */

import React from 'react'

//REACT-ROUTER-DOM: proper linking of pages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//FILES: redirect the pages from their corresponding files components
import { Home, Navbar, Footer, Signin, Signup, Browser, NotFound, Planner, Grocery } from './components'

//AUTHCONTEXT: to call the AuthProvider from the file
import { AuthProvider } from './contexts/AuthContext'

const App = () => {

    return (
        <Router>
            <AuthProvider>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/signin" component={ Signin } />
                        <Route path="/signup" component={ Signup } />
                        <Route path="/recipes" component={ Browser } />
                        <Route path="/meal-planner" component={ Planner } />
                        <Route path="/grocery-list" component={ Grocery } />
                        <Route component={ NotFound } />
                    </Switch>
                    <Footer />
                </div>
            </AuthProvider>
        </Router>
    )
}

export default App
