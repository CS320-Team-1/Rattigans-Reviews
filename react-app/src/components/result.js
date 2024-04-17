import React from 'react';
import { Button, AppBar, Toolbar, Typography, ThemeProvider } from '@mui/material';
import theme from '../hooks/useTheme.js'
import style from '../styles/Result.module.css';

function Result(){
    return(

        <div className = {style.container}>
            <div className = {style.coverArt}>

                <p> pretty picture :) </p>

            </div>

            <div className = {style.info}>

                <p> lots of info</p>

            </div>
            
            
        </div>

    )

}

export default Result