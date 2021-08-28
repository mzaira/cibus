/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 25, 2021 | 5:45 AM
 */

import React, { useState, useEffect } from 'react'

//@MATERIAL-UI: import components
import { Container, AppBar, Toolbar, Button } from '@material-ui/core'

//AUTHCONTEXT: to calll the useAuth from the file
import { useAuth } from '../../contexts/AuthContext'

//FIREBASE: to call the firebase from the firebase file
import firebase from '../../firebase'

//DRAGNDROP: import file from dragndrop file
import DragNDrop from './DragnDrop'

//EXTERNAL CSS STYLINGS
import useStyles from './styles'

const Planner = () => {

    //CONST: for stylings
    const classes = useStyles()

    //CONST: usage of useState
    const [meals, setMeals] = useState([])
    const [data, setData] = useState()

    //CONST: for AuthContext [
    const { currentUserID } = useAuth()
    // ]

    //useEffect: for data to load up immediately
    useEffect(() => {

        //CONST: for retriving data from firebase that has value of the currentUserID
        const mealRef = firebase.database().ref("Planner").orderByChild('currentUserID').equalTo(currentUserID)

        mealRef.on('value', (snapshot) => {

            //LET: to get the values from firebase
            const meal = snapshot.val()

            //FOR: To push the ingredients into their own indexes
            const mealList = []
            for (let id in meal) {
                mealList.push(meal[id])
            }

            //SET: setting new set of data into meals
            setMeals(mealList)
        })
    }, [])

    //CONST: Object to JSON
    const array = JSON.parse(JSON.stringify(meals))
    //Removing the additional array with a value of "Planner"
    var index = array.indexOf("Planner");
    if (index >= 0) {
        array.splice(index, 1);
    }
    console.log(array)

    //CONST: list of rows
    const defaultData = [

        { title: 'SUN', items: [] },
        { title: 'MON', items: [] },
        { title: 'TUE', items: [] },
        { title: 'WED', items: [] },
        { title: 'THU', items: [] },
        { title: 'FRI', items: [] },
        { title: 'SAT', items: [] },
        { title: 'LIST', items: array }
    ]

    //useEffect: for data to load up immediately
    useEffect(() => {

        //check if there is an existing data in the localStorage
        if (localStorage.getItem('List')) {
            setData(JSON.parse(localStorage.getItem('List')))
            console.log(JSON.parse(localStorage.getItem('List')))
        }
        //else store the new data
        else {
            setData(defaultData)
        }
    }, [setData])

    //FUNCTION: refresh the data
    function refresh() {
        setData([])
    }

    return (
        <main>

            <AppBar className={classes.appBar} color='inherit' >
                <Toolbar>
                    <div className={classes.grow}></div>
                    <div className={classes.button}>
                        <Button onclick={refresh} >Refresh</Button>
                    </div>
                </Toolbar>
            </AppBar>

            <Container maxWidth="xl" className={classes.container}>
                {/* Argument with the recipe data */}
                <DragNDrop data={data} />
            </Container>

        </main >
    )
}

export default Planner
