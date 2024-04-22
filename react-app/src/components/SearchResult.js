import React from 'react';
import style from '../styles/Trending.module.css';
import Button from '@mui/material/Button';

function SearchResult(props) {
    return (
        <div>
            <p> {props.name}, {props.date}, {props.rating}, {props.description} </p>
        </div>
    );
}

export default SearchResult