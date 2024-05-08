import React from 'react';
import Navbar from '../components/Navbar.js'
import style from '../styles/Profile.module.css';
import MediaTable from '../components/MediaTable.js'
function Account(props) {
    document.body.style = 'background: orange;';
    return (
        <div style = {{backgroundColor: 'orange'}}>
            <Navbar>
            </Navbar>
            <h1 className = {style.banner}> {props.user}'s Profile page</h1>
            <MediaTable media = "Movie"></MediaTable>
            <MediaTable media = "TV Show"></MediaTable>
        </div>
    )
}

export default Account;