import React from 'react';
import Navbar from '../components/Navbar.js'
import style from '../styles/Profile.module.css';
import MediaTable from '../components/MediaTable.js'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Account(props) {
    const navigate = useNavigate();
    let list = []
    document.body.style = 'background: orange;';
    const [movies, addMovies] = useState([])
    const [tvs, addTvs] = useState([])

    async function getFavorites() {
        const response = await fetch(`http://localhost:3001/auth/favorites/?email=${localStorage.getItem("userName")}`).then(res => res.json())
            let movieIds = response.data.favorite_movies 
            let tvIds = response.data.favorite_TVs;
    
            const moviePromises = movieIds.map(async id => {
                return await fetch(`http://localhost:3001/getMovieById/${id}`).then(res => res.json())
            })
            const tvPromises = tvIds.map(async id => {
                return await fetch(`http://localhost:3001/getTvById/${id}`).then(res => res.json())
            })
            const movieData = await Promise.all(moviePromises)
            const tvData = await Promise.all(tvPromises)
            setTimeout(() => {
                console.log(tvData);
            }, 5000); 
            addTvs([...tvs, ...tvData]);
            addMovies([...movies, ...movieData])
        // });
    }
        useEffect(() => {
            if(localStorage.getItem("token")) {
                getFavorites();
            }
            else {
                navigate("/")
            }
        }, []) 
    return (
        <div style = {{backgroundColor: 'goldenrod'}}>
            <Navbar>
            </Navbar>
            <h1 className = {style.banner}> {localStorage.getItem("userName")}'s Profile Page</h1>
            <MediaTable media = "Movie" imgLeft = "true" tableTitle="Your Top Movies:" list = {movies}></MediaTable>
            <MediaTable media = "TV Show" tableTitle="Your Top TV Shows:" list = {tvs}> </MediaTable>
        </div>
    )
}

export default Account;