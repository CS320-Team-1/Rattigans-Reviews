import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import style from '../styles/Table.module.css';
import pineapple from '../img/pineapple_profile_img2.jpg';
import background from '../img/background.png';

function MediaTable(props) {
    let rows = props.list;

    //This was the easiest way I could think of to get to the left side of the div, don't delete it unless there's an easier way
    const source = props.imgLeft ? pineapple : background;
    
    return (
        <div className = {style.display}>
            <img src={source} className={style.imgLeft} alt=""></img>
            <TableContainer component={Paper} sx={{ maxWidth: 500, maxHeight: 440, overflowX: "auto", scrollbarColor: '#888 transparent'}} className = {style.table}>
            <h3 className = {style.tableTitle}>{props.tableTitle}</h3>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">{props.media} Name</TableCell>
                    <TableCell align="right">Rating</TableCell>
                    <TableCell align="right">Genre</TableCell>
                    <TableCell align="right">Description</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, idx) => (
                    <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{idx}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.rating}</TableCell>
                    <TableCell align="right">{row.genre}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
      );
}

export default MediaTable;