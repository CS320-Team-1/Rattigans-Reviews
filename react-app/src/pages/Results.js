import React from 'react';
import Navbar from '../components/Navbar.js'
import Result from '../components/SearchResult.js'

function Results() {
    return (
        <div>
            <Navbar/>
            <Result/>
            <Result/>
            <Result/>
        </div>
    )
}

export default Results;