/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 25, 2021 | 3:34 AM
 */

//REACT: imported useState and useEffect
import React, { useState, useEffect } from 'react'

//AXIOS: importing axios
import Axios from 'axios'

//@MATERIAL-UI: import components
import { Container, Grid, AppBar, Toolbar, InputBase, Button } from '@material-ui/core'
import { Search, } from '@material-ui/icons'

//EXTERNAL CSS STYLINGS
import useStyles from './styles'

//RECIPE file: import file from recipe folder
import Recipe from './Recipe/Recipe'

const Browser = () => {

    //CONST: for stylings
    const classes = useStyles()

    //CONST: usage of useState
    const [recipes, setRecipes] = useState([])
    const [searchedData, setSearchedData] = useState('')

    //useEffect: for data to load up immediately
    useEffect(() => {

        //CONST: api_id and api_key 
        const APP_ID = "d3dfee78"
        const APP_KEY = "43c9b142876e4cddbdb34fe7b3364875"

        //CONST: getData from Edamam.com
        const getdata = async () => {
            const result = await Axios.get(
                `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=96&calories=80-100&diet=low-carb`
            )

            console.log(result.data.hits)
            //SET: setting new set of data into recipes
            setRecipes(result.data.hits)
        };

        getdata()

    }, [])

    return (
        <main>
            <AppBar className={classes.appBar} color='inherit' >

                <Toolbar>

                    <div className={classes.search}>

                        <div className={classes.searchIcon}>
                            <Search />
                        </div>

                        {/* Search Input */}
                        <InputBase
                            placeholder='Search…'
                            onChange={(event) => { setSearchedData(event.target.value) }}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />

                    </div>
                    
                    <div className={classes.grow}></div>

                    <div className={classes.button}>

                        <Button className={classes.formControl}>Favorites</Button>

                    </div>

                </Toolbar>

            </AppBar>

            <Container maxWidth='xl' className={classes.container} >

                <Grid container spacing={2} align='center'>

                    {/* Filtering the data from the API */}
                    {recipes.filter((recipe) => {

                        // Check if the search input is without a value
                        if (searchedData.toString() === '' ) {
                            return recipe
                        } 
                        // Filter the List based on the input from search input
                        // The values were loweredCased ".toLowerCase()"
                        // Check if the input text is within the array using the ".includes()"
                        else if (recipe.recipe.label.toLowerCase().includes(searchedData.toString().toLowerCase())) {
                            return recipe
                        }

                    }).map((recipe, key) => {

                        return (
                            <Grid item key={key} xs={12} sm={6} md={3} lg={3}>
                                {/* Argument with the recipe data */}
                                <Recipe recipe={recipe}></Recipe>
                            </Grid>
                        )
                    })}

                </Grid>

            </Container>
            
        </main>
    )
}

export default Browser
