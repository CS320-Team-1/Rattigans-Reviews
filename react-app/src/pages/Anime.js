import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
import Trending from '../components/Trending.js'

function Anime() {

    return (
        <div>
            <Navbar>
            </Navbar>
            <Searchbar medium = "anime">
                {/* Need to implement in searchbar if we add this back. */}
            </Searchbar>
            <Trending>
            </Trending>
        </div>
    )
}

export default Anime;