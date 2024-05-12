import React from 'react';
import Navbar from '../components/Navbar.js'
import style from '../styles/Profile.module.css';
import MediaTable from '../components/MediaTable.js'
function Account(props) {
    document.body.style = 'background: orange;';
    return (
        <div style = {{backgroundColor: 'goldenrod'}}>
            <Navbar>
            </Navbar>
            <h1 className = {style.banner}> {props.user}'s Profile Page</h1>
            <MediaTable media = "Movie" imgLeft = "true" tableTitle="Your Top Movies:"></MediaTable>
            <MediaTable media = "TV Show" tableTitle="Your Top TV Shows:"></MediaTable>
        </div>
    )
}

export default Account;