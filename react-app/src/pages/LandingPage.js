import Navbar from '../components/Navbar.js'
import LandingWelcome from '../components/LandingWelcome.js'
import React from 'react';

import Carousel from '../components/Carousel.js'

function LandingPage() {
    return (
        <div>
            <Navbar>
            </Navbar>
            <LandingWelcome>
            </LandingWelcome>
            <Carousel medium = "tv" carouselType = "Top Rated Shows"/>
            <Carousel medium = "movie" carouselType = "Top Rated Movies"/>
        </div>
    );
}
export default LandingPage;