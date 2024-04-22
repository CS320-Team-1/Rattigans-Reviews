import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import style from '../styles/Searchbar.module.css';
import { Link } from 'react-router-dom';

function Searchbar({}) {
    const [multimediaTerm, setMultimediaTerm] = useState('');
    
    
    function keyPress(event) {
        if(event.key === "Enter") {
            console.log(multimediaTerm);
            //console.log(fetch(`http://localhost:3001/getMovies/${multimediaTerm}`))
            window.location.href = "/search";
        }
    }
    function saveState(event) {
        setMultimediaTerm(event.target.value)
    }
    function onClick() {
        console.log(multimediaTerm);
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
                <a href={`/search/`}>
                <IconButton onClick={onClick}>
                  <Search />
                </IconButton>
                </a>
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