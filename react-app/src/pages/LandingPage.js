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
            <Carousel carouselType = "Top Rated Shows"/>
            <Carousel carouselType = "Top Rated Movies"/>
        </div>
    );
}
export default LandingPage;