import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
import Trending from '../components/Trending.js'
import SmallSearchbar from '../components/SmallSearchbar.js'

function Anime() {

    return (
        <div>
            <Navbar>
            </Navbar>
            <SmallSearchbar pageName = {"Anime"}>
            </SmallSearchbar>
            <Trending>
            </Trending>
        </div>
    )
}

export default Anime;