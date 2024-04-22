import React from 'react';
import { Button, AppBar, Toolbar, Typography, ThemeProvider, Container, CssBaseline, Box, Grid, styled, Paper  } from '@mui/material';
import theme from '../hooks/useTheme.js'
import style from '../styles/Result.module.css';
import SearchResult from '../components/SearchResult.js';

//Dummy prop, will need to change description if we end up using this.
const searchProp = () => {
    let name = "Breaking Bad";
    let date = "02/21/2016";
    let rating = "9.3/10";
    let description = "Walter white was him";
}

function Result(){
    return(
        <div className = {style.container}>
            <div className = {style.coverArt}>

                <p> pretty picture :) </p>

            </div>

            <div className = {style.info}>

                
                <div className = {style.title}> 
                    <p> Breaking Bad</p>
                </div>
                <div className = {style.date}> 02/21/2016</div>
                <div className = {style.rating}> 9.3/10</div>
                <div className = {style.lang}>English</div>
                



            </div>

            <div className = {style.misc}>
                <div className={style.description}>Walter white was him</div>

            </div>
            
            
        </div>

    )

}

export default Result