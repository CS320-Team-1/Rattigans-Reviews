import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
import Trending from '../components/Trending.js'
import SmallSearchbar from '../components/SmallSearchbar.js'

function Movies() {

    return (
        <div>
            <Navbar>
            </Navbar>
            <SmallSearchbar pageName = {"Movies"}>
            </SmallSearchbar>
            <Trending>
            </Trending>
        </div>
    )
}

export default Movies;