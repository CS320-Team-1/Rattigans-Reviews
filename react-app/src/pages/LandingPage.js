import Navbar from '../components/Navbar.js'
import Searchbar from '../components/Searchbar.js'
import Trending from '../components/Trending.js'
import LandingWelcome from '../components/LandingWelcome.js'
import React from 'react';

function LandingPage() {
    return (
        <div>
            <Navbar>
            </Navbar>
            <LandingWelcome>
            </LandingWelcome>
            <Trending>
            </Trending>
        </div>
    );
}
export default LandingPage;