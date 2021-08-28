/**
 * @author Zaira Mundo <zairajune@gmail.com>
 * * May 20, 2021 | 5:51 AM
 */

import React from 'react'

//@MATERIAL-UI: import components
import { CssBaseline } from '@material-ui/core'

//FILES: import file from section folder
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Section5 from './Sections/Section5'
import Section6 from './Sections/Section6'
import Section7 from './Sections/Section7'

const Home = () => {

    return (
        <main>

            <CssBaseline />

            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            
        </main>
    )
}

export default Home
