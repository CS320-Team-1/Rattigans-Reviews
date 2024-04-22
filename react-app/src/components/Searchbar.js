import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import style from '../styles/Searchbar.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

async function getMovies(movieName) {
  const response = await fetch(`http://localhost:3001/getMovies/${movieName}`);
  const json = await response.json().then(results => results.map(movie =>({'name': movie.name, 'year': movie.year, 'description': movie.description, 'rating': movie.rating, 'genres': movie.genre_ids, 'img': movie.posterImage})));
  return json;
}

function Searchbar() {
    const [multimediaTerm, setMultimediaTerm] = useState(' ');
    const [movieList, setMovieList] = useState(' ');
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
    return (
        <div className = {style.searchbar}>
        <TextField className={style.textField}
          placeholder="Search"
          variant="outlined"
          onChange={saveState}
          onKeyDown={keyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {/* <Link to = {{ pathname: "/results/", state: {"movies": movieList} }}> */}
                  <IconButton onClick={onClick}>
                  <Search />
                </IconButton>
                {/* </Link> */}
              </InputAdornment>
            ),
          }}
        />
        <Link className = {style.links} to="/search">
        <Typography variant="h5"></Typography>
        </Link>
        </div>
      );
}
export default Searchbar