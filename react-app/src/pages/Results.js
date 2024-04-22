import React from 'react';
import Navbar from '../components/Navbar.js'
import Result from '../components/SearchResult.js'

//allows you to call <Resultz count = {x}/> to add variable result components
const Resultz = ({count}) => (
    Array.from({length: count}).map((_item, index) => <Result index = {index}/>)
)



function Results() {
    return (
        <div>
            <Navbar/>
            <Resultz count = {5}/>
        </div>
    )
}

export default Results;