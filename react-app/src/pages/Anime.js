import React from 'react';
import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'

//Unused page to display/search anime, would be implemented in the future.
function Anime() {

    return (
        <div>
            <Navbar>
            </Navbar>
            <Searchbar medium = "anime">
            </Searchbar>
        </div>
    )
}

export default Anime;