import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'

import Carousel from '../components/Carousel.js'


function TVShows() {
    
    return(
        <div>
            <Navbar>
            </Navbar>
            <Searchbar medium = "tv">
            </Searchbar>
            <Carousel carouselType = "Top Rated Shows"/>
            
        </div>
    )
}

export default TVShows;