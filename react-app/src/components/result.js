import React from 'react';
import { Button, AppBar, Toolbar, Typography, ThemeProvider, Container, CssBaseline, Box, Grid, styled, Paper  } from '@mui/material';
import theme from '../hooks/useTheme.js'
import style from '../styles/Result.module.css';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ResultMUI(){
    return(
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8} md = {8} >
                        <Item >xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default ResultMUI