import React from 'react';
import Navbar from '../components/Navbar.js'
import SearchResult from '../components/SearchResult.js'
import { useLocation } from "react-router-dom";
import {genreIDs} from '../utils/genres.js';
import style from '../styles/Result.module.css';
//allows you to call <Resultz count = {x}/> to add variable result components
// const Resultz = ({count}) => (
//     Array.from({length: count}).map((_item, index) => <Result index = {index}/>)
// )


function Results() {
    let location = useLocation();
    let movies = location.state.movies;
    if(movies.length === 0) {
        movies = [{name: "No TV shows were found", year: " ", description: " ", rating: " ", genres: [], img: " "}]
    }
    return (
        <div className={style.resultsPage}>
            <Navbar/>
            {
            movies.map(movie => {
                let genres = "";
                movie.genres.forEach(genreId => {
                    genres += genreIDs[genreId] + " ";
                })
                return <SearchResult name = {movie.name} year = {movie.year} description = {movie.description} rating = {movie.rating} genre = {genres} img = {movie.img}/>
            })}
        </div>
    )
}

export default Results;