import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
import Carousel from '../components/Carousel.js'

function Movies() {

    return (
        <div>
            <Navbar>
            </Navbar>
            <Searchbar medium = "movie">
            </Searchbar>
            <Carousel medium = "movie" carouselType = "Top Rated Movies"/>
        </div>
    )
}

export default Movies;