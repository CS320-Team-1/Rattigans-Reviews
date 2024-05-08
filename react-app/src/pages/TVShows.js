import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
import Trending from '../components/Trending.js'
import SmallSearchbar from '../components/SmallSearchbar.js'

function TVShows() {
    
    return(
        <div>
            <Navbar>
            </Navbar>
            <SmallSearchbar pageName = {"TV Shows"}>
            </SmallSearchbar>
            <Trending>
            </Trending>
        </div>
    )
}

export default TVShows;