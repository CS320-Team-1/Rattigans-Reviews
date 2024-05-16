import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'

import Carousel from '../components/Carousel.js'

//Function to display our TV shows page, which has a search bar and displays top rated TV shows in a carousel.
function TVShows() {
    
    return(
        <div>
            <Navbar>
            </Navbar>
            <Searchbar medium = "tv">
            </Searchbar>
            <Carousel medium = "tv" carouselType = "Top Rated Shows"/>
            
        </div>
    )
}

export default TVShows;