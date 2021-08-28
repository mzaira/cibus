/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 25, 2021 | 5:43 AM
 */

import React, { useState, useEffect } from 'react'

//@MATERIAL-UI: import components
import { Container, Card } from '@material-ui/core'
import { RadioButtonChecked, RadioButtonUnchecked } from '@material-ui/icons'

//AUTHCONTEXT: to calll the useAuth from the file
import { useAuth } from '../../contexts/AuthContext'

//FIREBASE: to call the firebase from the firebase file
import firebase from '../../firebase'

//EXTERNAL CSS STYLINGS
import useStyles from './styles'

const Grocery = () => {

    //CONST: for stylings
    const classes = useStyles()

    //CONST: usage of useState
    const [meals, setMeals] = useState([])

    //CONST: for AuthContext [
    const { currentUserID } = useAuth()
    // ]

    //CONST: for retriving data from firebase that has value of the currentUserID
    const mealRef = firebase.database().ref("Ingredient").orderByChild('currentUserID').equalTo(currentUserID)

    //useEffect: for data to load up immediately
    useEffect(() => {
        mealRef.on('child_added', snap => {

            //LET: to get the values from firebase that is in the field of 'ingredientList'
            let meal = snap.val().ingredientList

            //FOR: To push the ingredients into their own indexes
            const mealList = []
            for (let id in meal) {
                mealList.push(meal[id])
            }

            console.log(meal)
            //SET: setting new set of data into meals
            setMeals(meal)
        })

    }, [])

    //CONST: for the toggle to check if the state value is true or false
    const toggleComplete = (index) => {

        const newItem = [...meals]
        //changes the value
        //if the value is true change it to false and vice versa
        newItem[index].state = !newItem[index].state
        setMeals(newItem)

    }

    return (

        <main>

            <Container className={classes.container} >

                <div className='main-container'>

                    <Card className={classes.itemList}>

                        {meals.map((meal, index) => (

                            <div className='item-container'>

                                <div className={classes.itemName} onClick={() => toggleComplete(index)}>

                                    {meal.state ? (
                                        <>
                                            {/* If the State is true: radiobutton is checked*/}
                                            <RadioButtonChecked className={classes.margin} />
                                            <span className='completed'>{meal.text}</span>
                                        </>
                                    ) : (
                                        <>
                                            {/* If the State is else: radiobutton is unchecked*/}
                                            <RadioButtonUnchecked className={classes.margin} />
                                            <span>{meal.text}</span>
                                        </>
                                    )}

                                </div>

                            </div>

                        ))}

                    </Card>

                </div>

            </Container>

        </main>
    );
}

export default Grocery
