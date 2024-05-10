import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
import Trending from '../components/Trending.js'

function TVShows() {
    
    return(
        <div>
            <Navbar>
            </Navbar>
            <Searchbar medium = "tv">
            </Searchbar>
            <Trending>
            </Trending>
        </div>
    )
}

export default TVShows;