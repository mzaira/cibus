/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 25, 2021 | 10:42 AM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea } from '@material-ui/core'
import { Add } from '@material-ui/icons'

//AUTHCONTEXT: to calll the useAuth from the file
import { useAuth } from '../../../contexts/AuthContext'

//FIREBASE: to call the firebase from the firebase file
import firebase from '../../../firebase'

//EXTERNAL CSS STYLINGS
import useStyles from './styles'

// Parameter with the recipe data
const Recipe = ({ recipe }) => {

    //CONST: for stylings
    const classes = useStyles()

    //CONST: for recipe data
    const { label, image, url, calories, ingredients } = recipe.recipe;

    //CONST: for AuthContext [
    const { currentUserID } = useAuth()
    // ]

    //CONST: for inputting data to the firebase
    const addtoPlanner = () => {

        //FIREBASE: Planner
        const plannerRef = firebase.database().ref("Planner")

        //FIREBASE: Ingredients
        const ingredientRef = firebase.database().ref("Ingredient")

        //CONST: contents of the Planner Table
        const meal = {
            label,
            image,
            currentUserID
        }

        //FOR: In each ingredient insert a value "state: false"
        //FOR: To push the ingredients into their own indexes
        const ingredientList = []
        for (let id in ingredients) {
            ingredientList.push(ingredients[id])
            ingredientList[id].state = false
        }

        //CONST: contents of the Ingredient Table
        const ingredient = {
            currentUserID,
            ingredientList
        }

        //PUSHING the contents to the TABLES
        plannerRef.push(meal)
        ingredientRef.push(ingredient)
    }

    return (

        <Card className={classes.root} elevation={3} >

            {/* Redirect the Card to their Perspective Pages*/}
            <CardActionArea href={url} target="_blank" >

                <CardMedia className={classes.media} image={image} title={label} />

                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='body1' gutterBottom>{label}</Typography>
                    </div>
                </CardContent>

            </CardActionArea>

            <CardActions disableSpacing className={classes.cardActions} >

                <div>
                    {/* Rounding Off the decimal point to hundredths ".00" */}
                    <Typography variant='body2' >Calories {Math.round(calories * 100) / 100}</Typography>
                </div>

                <div>
                    {/* Add Button For AddToPlanner */}
                    <IconButton aria-label='Add to Card' onClick={addtoPlanner}>
                        <Add />
                    </IconButton>
                </div>

            </CardActions>

        </Card>
    )
}

export default Recipe
