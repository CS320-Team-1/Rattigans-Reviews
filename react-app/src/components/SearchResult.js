import React from 'react';
//import { Button, AppBar, Toolbar, Typography, ThemeProvider, Container, CssBaseline, Box, Grid, styled, Paper  } from '@mui/material';
//import theme from '../hooks/useTheme.js'
import style from '../styles/Result.module.css';
import breakingBadImg from '../img/breaking-bad.webp'

//Jon I added the code that I originally wrote back into this file.

// function SearchResult(props) {
//     return (
//         <div>
//             <p> {props.name}, {props.date}, {props.rating}, {props.description} hello world </p>
//         </div>
//     );
// }

// export default SearchResult


//Omar's work with MUI, I'm not sure how to use/implement this into what I'm writing so I'm leaving it here for now.

function Result(){
    return(

        <div className = {style.container}>
            <div className = {style.coverArt}>
                <img className = {style.pic} src= {breakingBadImg} alt = "pretty pic :)"></img>
            </div>

            <div className = {style.info}> 
                <div className = {style.name}><h1>Breaking Bad</h1></div>
                <div className = {style.date}><h2>02/21/2016</h2></div>
                <div className = {style.genre}><h2>Drama, Crime</h2></div>
                <div className = {style.rating}><h2>9.3/10</h2></div>
                
            </div>

            <div className = {style.misc}>
                <div className={style.description}><p>A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.</p></div>

            </div>
            
        </div>
    )
}

export default Result

// started to try to figure out MUI stuff, didnt go that well, may try again in future.

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// function ResultMUI(){
//     return(
//         <React.Fragment>
//             <CssBaseline />
//             <Box sx={{ flexGrow: 1 }}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={8} md = {8} >
//                         <Item >xs=8</Item>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Item>xs=4</Item>
//                     </Grid>
//                     <Grid item xs={4}>
//                         <Item>xs=4</Item>
//                     </Grid>
//                     <Grid item xs={8}>
//                         <Item>xs=8</Item>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </React.Fragment>
//     )
// }

// export default ResultMUI