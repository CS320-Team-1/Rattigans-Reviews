import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import style from '../styles/Searchbar.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import GenreFilter from './GenreFilter.js';

async function getMovies(movieName) {
  const response = await fetch(`http://localhost:3001/getMovies/${movieName}`);
  const json = await response.json().then(results => results.map(movie =>({'name': movie.name, 'year': movie.year, 'description': movie.description, 'rating': movie.rating, 'genres': movie.genre_ids, 'img': movie.posterImage})));
  return json;
}

function Searchbar(props) {
    const [multimediaTerm, setMultimediaTerm] = useState(' ');
    const [movieList, setMovieList] = useState(' ');
    // const [genres, setGenres] = useState([]);
    const navigate = useNavigate();

    async function keyPress(event) {
        if(event.key === "Enter") {
          event.preventDefault();
          let movies = await getMovies(multimediaTerm);
          setMovieList(movieList);
          navigate("/results", { state: { "movies": movies } });
        }
    }
    function saveState(event) {
        setMultimediaTerm(event.target.value)
    }
    async function onClick() {
      let movies = await getMovies(multimediaTerm);
      setMovieList(movieList);
      navigate("/results", { state: { "movies": movies } });
    }

    // function genreOnChange(genreList) {
    //   setGenres(genreList)
    // }
    return (
        <div className = {style.smallsearchbar}>
          <h1 className={style.pagetitle}> {props.pageName} </h1>
          <TextField className={style.textField}
            placeholder="Search"
            variant="outlined"
            onChange={saveState}
            onKeyDown={keyPress}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={onClick}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {/* <GenreFilter onChange = {genreOnChange}/> */}
        </div>
      );
}
export default Searchbar