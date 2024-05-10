import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
import Trending from '../components/Trending.js'

import Carousel from '../components/Carousel.js'


function TVShows() {
    
    return(
        <div>
             <Navbar>
            </Navbar>
            <Searchbar>
            </Searchbar>
            <Trending>
            </Trending>
            <Carousel/>
            
        </div>
    )
}

export default TVShows;